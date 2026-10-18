/*
 * VaultMemo Verify - core logic (no dependencies, runs in browsers and Node 19+)
 *
 * What it does: compares the SHA-256 fingerprint of a file with the fingerprint
 * written in a Solana transaction's Memo instruction. Nothing is uploaded.
 *
 * On-chain memo formats written by the VaultMemo app (see README.md):
 *   [VM2:HASH:<64 or 16 hex>:<unix timestamp>]   memo proof (hash of the .vam "enc" string)
 *   [VM2:FILE:<64 hex>:<unix timestamp>]         file proof (SHA-256 of the file bytes)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.VMVerify = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var MEMO_PROGRAM = 'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr';
  var DEFAULT_RPC = 'https://api.mainnet-beta.solana.com';
  // Endpoints that answer browser requests (checked 2026-10-18). The official endpoint and Ankr
  // return HTTP 403 to browsers, so they are only a last resort (works from Node / other tools).
  var DEFAULT_RPCS = [
    'https://public.rpc.solanavibestation.com',
    'https://solana-rpc.publicnode.com',
    'https://solana.api.pocket.network',
    'https://api.mainnet-beta.solana.com',
  ];
  var B58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

  // Same patterns as the VaultMemo app (src/solana/vault.ts)
  var HASH_MEMO_RE = /\[VM2:HASH:([0-9a-f]{64}|[0-9a-f]{16}):(\d+)?/i;
  var FILE_MEMO_RE = /\[VM2:FILE:([0-9a-f]{64}):(\d+)?/i;

  function base58Decode(str) {
    var bytes = [0];
    for (var i = 0; i < str.length; i++) {
      var val = B58.indexOf(str[i]);
      if (val < 0) throw new Error('invalid base58');
      var carry = val;
      for (var j = 0; j < bytes.length; j++) {
        carry += bytes[j] * 58;
        bytes[j] = carry & 0xff;
        carry >>= 8;
      }
      while (carry > 0) { bytes.push(carry & 0xff); carry >>= 8; }
    }
    for (var k = 0; k < str.length && str[k] === '1'; k++) bytes.push(0);
    return new Uint8Array(bytes.reverse());
  }

  function bytesToHex(buf) {
    var u = new Uint8Array(buf), out = '';
    for (var i = 0; i < u.length; i++) out += (u[i] < 16 ? '0' : '') + u[i].toString(16);
    return out;
  }

  /** SHA-256 of bytes (ArrayBuffer / Uint8Array) or of a string (UTF-8) -> lowercase hex */
  async function sha256Hex(input) {
    var data = typeof input === 'string' ? new TextEncoder().encode(input) : input;
    var digest = await globalThis.crypto.subtle.digest('SHA-256', data);
    return bytesToHex(digest);
  }

  /** Solana transaction signatures are 64 bytes (base58, usually 87-88 chars) */
  function isValidSignature(sig) {
    if (typeof sig !== 'string') return false;
    if (sig.length < 80 || sig.length > 90) return false;
    try { return base58Decode(sig).length === 64; } catch (e) { return false; }
  }

  /** A VaultMemo .vamp proof file starts with the 8-byte header "VAMP2\0\0\0" */
  function isVamp(bytes) {
    var u = new Uint8Array(bytes);
    var h = [0x56, 0x41, 0x4d, 0x50, 0x32]; // "VAMP2"
    if (u.length < 8) return false;
    for (var i = 0; i < h.length; i++) if (u[i] !== h[i]) return false;
    return true;
  }

  /**
   * Open a VaultMemo .vamp proof file (format "VAMP2", see README). The seal is for tamper
   * detection, not secrecy: the keys are derived from fixed strings in the app, so anyone can open it.
   *   ["VAMP2\0\0\0" 8][IV 16][AES-256-CTR( [meta length 4 BE][meta JSON][file bytes] )][HMAC-SHA256 32]
   * Returns { tagOk, meta, fileBytes, fileHash }. Throws if it is not a well-formed .vamp.
   * tagOk=false means the file was modified or damaged after it was sealed.
   * (meta.tx / meta.wallet / meta.ts are only hints: trust the chain, not the file.)
   */
  async function unsealVamp(buf) {
    var u = new Uint8Array(buf);
    if (!isVamp(u)) throw new Error('not a .vamp file');
    if (u.length < 8 + 16 + 4 + 32) throw new Error('truncated .vamp file');
    var subtle = globalThis.crypto.subtle, enc = new TextEncoder();
    var sealKey = async function (label) {
      return new Uint8Array(await subtle.digest('SHA-256', enc.encode('VaultMemo .vamp seal v2 / ' + label)));
    };
    var macKey = await subtle.importKey('raw', await sealKey('mac'), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
    var tagOk = await subtle.verify('HMAC', macKey, u.subarray(u.length - 32), u.subarray(0, u.length - 32));
    var encKey = await subtle.importKey('raw', await sealKey('enc'), { name: 'AES-CTR' }, false, ['decrypt']);
    var iv = u.subarray(8, 24);
    var plain = new Uint8Array(await subtle.decrypt({ name: 'AES-CTR', counter: iv, length: 128 }, encKey, u.subarray(24, u.length - 32)));
    var len = ((plain[0] << 24) | (plain[1] << 16) | (plain[2] << 8) | plain[3]) >>> 0;
    if (len <= 0 || len > 16 * 1024 || 4 + len > plain.length) throw new Error('damaged .vamp header');
    var meta;
    try { meta = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(plain.subarray(4, 4 + len))); }
    catch (e) { throw new Error('damaged .vamp header'); }
    var fileBytes = plain.subarray(4 + len);
    return { tagOk: tagOk, meta: meta, fileBytes: fileBytes, fileHash: await sha256Hex(fileBytes) };
  }

  /** Parse a VaultMemo .vam file (JSON text). Returns null if it is not one. */
  function parseVam(text) {
    var j;
    try { j = JSON.parse(text); } catch (e) { return null; }
    if (!j || typeof j !== 'object' || typeof j.enc !== 'string' || !j.enc) return null;
    return {
      enc: j.enc,
      tx: typeof j.tx === 'string' ? j.tx : '',
      hash: typeof j.hash === 'string' ? j.hash.toLowerCase() : '',
    };
  }

  /** Find the VaultMemo memo in a getTransaction result. Returns {kind, hash, ts} or null. */
  function extractMemo(tx) {
    if (!tx) return null;
    var logs = (tx.meta && tx.meta.logMessages) || [];
    var i, m;
    for (i = 0; i < logs.length; i++) {
      if ((m = logs[i].match(FILE_MEMO_RE))) return { kind: 'FILE', hash: m[1].toLowerCase(), ts: m[2] ? Number(m[2]) : null };
      if ((m = logs[i].match(HASH_MEMO_RE))) return { kind: 'HASH', hash: m[1].toLowerCase(), ts: m[2] ? Number(m[2]) : null };
    }
    // Fallback: decode the Memo instruction data directly
    var msg = tx.transaction && tx.transaction.message;
    var keys = (msg && msg.accountKeys) || [];
    var ixs = (msg && msg.instructions) || [];
    for (i = 0; i < ixs.length; i++) {
      var ix = ixs[i];
      if (keys[ix.programIdIndex] !== MEMO_PROGRAM || !ix.data) continue;
      try {
        var text = new TextDecoder().decode(base58Decode(ix.data));
        if ((m = text.match(FILE_MEMO_RE))) return { kind: 'FILE', hash: m[1].toLowerCase(), ts: m[2] ? Number(m[2]) : null };
        if ((m = text.match(HASH_MEMO_RE))) return { kind: 'HASH', hash: m[1].toLowerCase(), ts: m[2] ? Number(m[2]) : null };
      } catch (e) { /* ignore */ }
    }
    return null;
  }

  /**
   * Compare a locally computed hash with the transaction.
   * kind: 'file' (hash of file bytes) or 'memo' (hash of a .vam "enc" string)
   * tx:   getTransaction result or null (not found)
   * status: match | mismatch | not_found | tx_failed | no_memo | type_mismatch
   */
  function evaluate(kind, localHash, tx) {
    if (!tx) return { status: 'not_found' };
    if (tx.meta && tx.meta.err) return { status: 'tx_failed' };
    var memo = extractMemo(tx);
    if (!memo) return { status: 'no_memo' };
    var expectKind = kind === 'file' ? 'FILE' : 'HASH';
    var base = {
      memo: memo,
      feePayer: tx.transaction && tx.transaction.message && tx.transaction.message.accountKeys
        ? tx.transaction.message.accountKeys[0] : null,
      blockTime: typeof tx.blockTime === 'number' ? tx.blockTime : null,
    };
    if (memo.kind !== expectKind) return Object.assign({ status: 'type_mismatch' }, base);
    var same = localHash.slice(0, memo.hash.length).toLowerCase() === memo.hash;
    return Object.assign({ status: same ? 'match' : 'mismatch' }, base);
  }

  /**
   * Fetch a transaction over JSON-RPC. Returns the result object, or null when the
   * network says the transaction does not exist. Throws on network / RPC errors
   * (so that a failed lookup is never shown as "mismatch").
   */
  async function fetchTransaction(rpcUrl, signature, fetchImpl) {
    var f = fetchImpl || globalThis.fetch;
    var res = await f(rpcUrl || DEFAULT_RPC, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0', id: 1, method: 'getTransaction',
        params: [signature, { encoding: 'json', maxSupportedTransactionVersion: 0, commitment: 'confirmed' }],
      }),
    });
    if (!res.ok) throw new Error('RPC HTTP ' + res.status);
    var j = await res.json();
    if (j.error) throw new Error('RPC error: ' + (j.error.message || JSON.stringify(j.error)));
    return j.result || null;
  }

  /**
   * Try several RPC endpoints in order. Public endpoints differ: some block browsers (HTTP 403),
   * some answer "null" for transactions they do not have. The first endpoint that returns the
   * transaction wins. Returns { tx, tried: [{ url, outcome: 'found'|'null'|'error', detail? }] }.
   * If every endpoint failed to answer at all, it throws (a failed lookup is never "mismatch").
   */
  async function fetchTransactionAny(rpcUrls, signature, fetchImpl) {
    var tried = [], answered = 0;
    for (var i = 0; i < rpcUrls.length; i++) {
      try {
        var t = await fetchTransaction(rpcUrls[i], signature, fetchImpl);
        answered++;
        if (t) { tried.push({ url: rpcUrls[i], outcome: 'found' }); return { tx: t, tried: tried }; }
        tried.push({ url: rpcUrls[i], outcome: 'null' });
      } catch (e) {
        tried.push({ url: rpcUrls[i], outcome: 'error', detail: String(e && e.message || e) });
      }
    }
    if (!answered) {
      var err = new Error('no RPC endpoint answered (' + tried.map(function (x) { return x.detail; }).join('; ') + ')');
      err.tried = tried;
      throw err;
    }
    return { tx: null, tried: tried };
  }

  return {
    MEMO_PROGRAM: MEMO_PROGRAM,
    DEFAULT_RPC: DEFAULT_RPC,
    DEFAULT_RPCS: DEFAULT_RPCS,
    fetchTransactionAny: fetchTransactionAny,
    base58Decode: base58Decode,
    sha256Hex: sha256Hex,
    isValidSignature: isValidSignature,
    isVamp: isVamp,
    unsealVamp: unsealVamp,
    parseVam: parseVam,
    extractMemo: extractMemo,
    evaluate: evaluate,
    fetchTransaction: fetchTransaction,
  };
});
