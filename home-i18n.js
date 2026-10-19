/*
 * VaultMemo homepage - texts in 15 languages (same set as the app and the Verify page).
 * Each language is an array in the order of KEYS. English is the reference (it is also in index.html).
 * Terms of Use and Privacy Policy pages stay English only; their links are marked "(EN)".
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.VMHome = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var KEYS = [
    'tagline', 'quote',
    'hWhat', 'lede',
    'c1h', 'c1p', 'c2h', 'c2p', 'c3h', 'c3p', 'c4h', 'c4p',
    'hHow', 's1h', 's1p', 's2h', 's2p', 's3h', 's3p',
    'hFaq', 'faqLede',
    'q1h', 'q1p', 'q2h', 'q2p', 'q3h', 'q3p', 'q4h', 'q4p', 'q5h', 'q5p',
    'q6h', 'q6p', 'q7h', 'q7p', 'q8h', 'q8p', 'q9h', 'q9p',
    'viewSrc',
    'hContact', 'contactLede',
    'terms', 'privacy', 'verify', 'langLabel'
  ];

  var D = {};

  D.en = [
    'Encrypted memo vault with on-chain proof, for Solana Seeker & Saga',
    'Your secrets stay yours. Your proof lives on Solana.',
    'What it does',
    'VaultMemo stores your seed phrases, passwords, and private notes on your device only — never on a server. Each time you save, a fingerprint of that note is written to the Solana blockchain, so you can later prove it existed and hasn\'t been altered, without ever exposing the note itself.',
    'Local-only encryption', 'Notes are encrypted and stored on your device. Nothing is uploaded, no account is needed.',
    'Tamper-evident proof', 'A hash of each note is recorded on Solana mainnet, so anyone can independently verify it later.',
    'Seed Vault–derived key', 'Your Solana wallet signs a fixed message, and that signature is used to derive the encryption key. No PIN, no biometrics.',
    'Pay per save', 'No subscription. A small one-time payment unlocks storage by size, in SKR, SOL, USDC, or USDT.',
    'How it works',
    'Seed Vault signs', 'Your wallet signs a fixed message on-device. The private key never leaves the hardware.',
    'A key is derived', 'That signature is hashed to create an AES-256 encryption key, held only in memory.',
    'A proof goes on-chain', 'A fingerprint of the encrypted note is recorded on Solana as tamper-proof evidence it existed.',
    'FAQ', 'Common questions about how VaultMemo handles your data.',
    'Is my memo content visible on the Solana blockchain?', 'No. Your memo is encrypted and stored only on your device. Only a random hash fingerprint — proof that the note existed — is recorded on-chain, never the content itself.',
    'What happens if I forget my password?', 'There\'s no separate password to forget. Your encryption key is generated instantly from a Seed Vault signature each time, so as long as your wallet\'s seed phrase is safe, you\'ll never lose access to your key.',
    'What happens if I lose my wallet\'s seed phrase?', 'Since your encryption key is derived from your wallet\'s signature, losing the seed phrase means permanently losing access to your encrypted notes. Keep your seed phrase and your .vam backup files stored safely, in a separate place.',
    'Will my notes disappear if I delete and reinstall the app?', 'No. Your encrypted .vam files are stored in a folder you chose on your device (e.g. Downloads/VaultMemo), not inside the app itself. Reconnect with the same wallet after reinstalling, and everything is still there.',
    'How does on-chain verification work?', 'VaultMemo compares the hash of your saved file against the record actually written to the Solana blockchain. If even one byte has changed, or the file is fake, verification fails.',
    'What is the Encryption Certificate, and how do I use it?', 'Once a memo has been verified, you can instantly generate a security certificate image (PNG) right in the app. It includes your wallet address, the on-chain transaction ID, and the save timestamp — so you can share it, like a business card, as proof that a note existed unaltered at that point in time.',
    'What\'s different about real-time RPC verification?', 'Starting in v1.3.4, VaultMemo compares your saved file\'s hash directly against the live record on the Solana blockchain (RPC). If even a single byte has been changed or tampered with, verification fails immediately, guaranteeing the integrity of your data.',
    'Do I need to pay a monthly subscription?', 'No. There\'s no subscription at all. You pay a small, one-time fee based on the note\'s size only when you save it. Notes under 200 bytes are free.',
    'VaultMemo says it has no servers, so why does it use Firebase?', 'Firebase Remote Config is used only to push pricing updates and in-app announcements, not to store or process your data. Your memo content, wallet keys, and personal information are never sent to Firebase or any other server.',
    'View source code',
    'Get in touch', 'Questions about VaultMemo, feedback, or partnership inquiries — reach out below.',
    'Terms of Use', 'Privacy Policy', 'Verify a file', 'Language'
  ];

  D.ko = [
    'Solana Seeker & Saga용, 온체인 증명을 갖춘 암호화 메모 보관함',
    '당신의 비밀은 당신의 것입니다. 증명은 Solana에 남습니다.',
    '무엇을 하나요',
    'VaultMemo는 시드 문구, 비밀번호, 개인 메모를 서버가 아닌 기기에만 저장합니다. 저장할 때마다 그 메모의 지문(해시)이 Solana 블록체인에 기록되어, 메모 내용을 드러내지 않고도 나중에 그 메모가 존재했고 변경되지 않았음을 증명할 수 있습니다.',
    '기기 안에서만 암호화', '메모는 암호화되어 기기에만 저장됩니다. 아무것도 업로드되지 않고 계정도 필요 없습니다.',
    '변조 감지 증명', '각 메모의 해시가 Solana 메인넷에 기록되어, 누구나 나중에 독립적으로 검증할 수 있습니다.',
    'Seed Vault로 만든 키', 'Solana 지갑이 고정된 메시지에 서명하고, 그 서명으로 암호화 키를 만듭니다. PIN도 생체인증도 필요 없습니다.',
    '저장할 때만 결제', '구독이 없습니다. 크기에 따라 소액을 한 번 결제하면 저장 공간이 열립니다. SKR, SOL, USDC, USDT로 결제할 수 있습니다.',
    '작동 방식',
    'Seed Vault가 서명', '지갑이 기기 안에서 고정된 메시지에 서명합니다. 개인 키는 하드웨어 밖으로 나가지 않습니다.',
    '키 생성', '그 서명을 해시해서 AES-256 암호화 키를 만들고, 키는 메모리에만 보관합니다.',
    '증명이 온체인에', '암호화된 메모의 지문이 Solana에 기록되어, 그 메모가 존재했다는 변조 방지 증거가 됩니다.',
    '자주 묻는 질문', 'VaultMemo가 데이터를 어떻게 다루는지에 대한 질문입니다.',
    '내 메모 내용이 Solana 블록체인에 보이나요?', '아니요. 메모는 암호화되어 기기에만 저장됩니다. 메모가 존재했다는 증거인 무작위 해시 지문만 온체인에 기록되고, 내용 자체는 기록되지 않습니다.',
    '비밀번호를 잊으면 어떻게 되나요?', '잊어버릴 별도의 비밀번호가 없습니다. 암호화 키는 매번 Seed Vault 서명에서 바로 만들어지므로, 지갑의 시드 문구만 안전하면 키에 접근하지 못하게 될 일이 없습니다.',
    '지갑의 시드 문구를 잃어버리면 어떻게 되나요?', '암호화 키가 지갑의 서명에서 만들어지므로, 시드 문구를 잃으면 암호화된 메모에 영구히 접근할 수 없습니다. 시드 문구와 .vam 백업 파일을 서로 다른 안전한 곳에 보관하세요.',
    '앱을 지웠다가 다시 설치하면 메모가 사라지나요?', '아니요. 암호화된 .vam 파일은 앱 안이 아니라 기기에서 직접 고른 폴더(예: Downloads/VaultMemo)에 저장됩니다. 재설치 후 같은 지갑으로 연결하면 모두 그대로 있습니다.',
    '온체인 검증은 어떻게 작동하나요?', 'VaultMemo는 저장된 파일의 해시를 Solana 블록체인에 실제로 기록된 값과 비교합니다. 1바이트라도 바뀌었거나 가짜 파일이면 검증이 실패합니다.',
    '암호화 인증서는 무엇이고 어떻게 쓰나요?', '메모를 검증하고 나면 앱에서 바로 보안 인증서 이미지(PNG)를 만들 수 있습니다. 지갑 주소, 온체인 트랜잭션 ID, 저장 시각이 들어 있어서, 그 시점에 메모가 변경 없이 존재했다는 증거로 명함처럼 공유할 수 있습니다.',
    '실시간 RPC 검증은 무엇이 다른가요?', 'v1.3.4부터 VaultMemo는 저장된 파일의 해시를 Solana 블록체인(RPC)의 실시간 기록과 직접 비교합니다. 1바이트라도 바뀌거나 변조되면 즉시 검증이 실패하므로 데이터의 무결성을 보장합니다.',
    '월 구독료를 내야 하나요?', '아니요. 구독은 전혀 없습니다. 메모를 저장할 때만 크기에 따른 소액을 한 번 냅니다. 200바이트 미만의 메모는 무료입니다.',
    'VaultMemo는 서버가 없다면서 왜 Firebase를 쓰나요?', 'Firebase Remote Config는 가격 변경과 앱 내 공지를 전달하는 데만 쓰이며, 데이터를 저장하거나 처리하지 않습니다. 메모 내용, 지갑 키, 개인정보는 Firebase나 다른 어떤 서버로도 전송되지 않습니다.',
    '소스 코드 보기',
    '문의하기', 'VaultMemo에 대한 질문, 의견, 제휴 문의는 아래로 연락해 주세요.',
    '이용약관', '개인정보 처리방침', '파일 검증하기', '언어'
  ];

  D.ja = [
    'Solana Seeker & Saga向け、オンチェーン証明付きの暗号化メモ保管庫',
    'あなたの秘密はあなたのもの。証明は Solana に残ります。',
    '何ができるか',
    'VaultMemo は、シードフレーズ、パスワード、個人的なメモを、サーバーではなく端末の中だけに保存します。保存するたびにそのメモのフィンガープリントが Solana ブロックチェーンに記録されるため、メモの内容を明かすことなく、後からそのメモが存在し、改ざんされていないことを証明できます。',
    '端末内だけで暗号化', 'メモは暗号化されて端末にのみ保存されます。何もアップロードされず、アカウントも不要です。',
    '改ざんを検知できる証明', '各メモのハッシュが Solana メインネットに記録されるので、誰でも後から独立して検証できます。',
    'Seed Vault から作る鍵', 'Solana ウォレットが固定メッセージに署名し、その署名から暗号鍵を作ります。PIN も生体認証も不要です。',
    '保存ごとの支払い', 'サブスクリプションはありません。サイズに応じた少額を一度支払うと保存できます。SKR、SOL、USDC、USDT に対応しています。',
    '仕組み',
    'Seed Vault が署名', 'ウォレットが端末上で固定メッセージに署名します。秘密鍵がハードウェアの外に出ることはありません。',
    '鍵を生成', 'その署名をハッシュして AES-256 の暗号鍵を作り、メモリ上にだけ保持します。',
    '証明がオンチェーンへ', '暗号化されたメモのフィンガープリントが Solana に記録され、そのメモが存在した改ざん防止の証拠になります。',
    'よくある質問', 'VaultMemo がデータをどう扱うかについてのよくある質問です。',
    'メモの内容は Solana ブロックチェーン上で見えますか？', 'いいえ。メモは暗号化されて端末にのみ保存されます。メモが存在した証拠であるランダムなハッシュのフィンガープリントだけがオンチェーンに記録され、内容そのものは記録されません。',
    'パスワードを忘れたらどうなりますか？', '忘れるパスワードがそもそもありません。暗号鍵は毎回 Seed Vault の署名からその場で生成されるので、ウォレットのシードフレーズが安全である限り、鍵にアクセスできなくなることはありません。',
    'ウォレットのシードフレーズを失くしたらどうなりますか？', '暗号鍵はウォレットの署名から作られるため、シードフレーズを失うと暗号化されたメモに二度とアクセスできなくなります。シードフレーズと .vam のバックアップファイルは、別々の安全な場所に保管してください。',
    'アプリを削除して再インストールするとメモは消えますか？', 'いいえ。暗号化された .vam ファイルは、アプリの中ではなく端末上で選んだフォルダ（例：Downloads/VaultMemo）に保存されます。再インストール後に同じウォレットで接続すれば、すべてそのまま残っています。',
    'オンチェーン検証はどう動きますか？', 'VaultMemo は、保存したファイルのハッシュを Solana ブロックチェーンに実際に書き込まれた記録と比べます。1バイトでも変わっていたり偽のファイルだったりすると、検証は失敗します。',
    '暗号化証明書とは何で、どう使いますか？', 'メモを検証したあと、アプリですぐにセキュリティ証明書の画像（PNG）を作れます。ウォレットアドレス、オンチェーンのトランザクション ID、保存日時が含まれるので、その時点でメモが変更されずに存在していた証拠として、名刺のように共有できます。',
    'リアルタイム RPC 検証は何が違いますか？', 'v1.3.4 から、VaultMemo は保存したファイルのハッシュを Solana ブロックチェーン（RPC）上の最新の記録と直接比較します。1バイトでも変更や改ざんがあれば直ちに検証が失敗し、データの完全性が保証されます。',
    '月額のサブスクリプションは必要ですか？', 'いいえ。サブスクリプションは一切ありません。メモを保存するときだけ、サイズに応じた少額を一度支払います。200バイト未満のメモは無料です。',
    'サーバーがないと言いながら、なぜ Firebase を使っているのですか？', 'Firebase Remote Config は料金の更新とアプリ内のお知らせを配信するためだけに使われ、データの保存や処理には使われません。メモの内容、ウォレットの鍵、個人情報が Firebase やほかのサーバーに送られることはありません。',
    'ソースコードを見る',
    'お問い合わせ', 'VaultMemo についてのご質問、ご意見、提携のご相談は、下記までご連絡ください。',
    '利用規約', 'プライバシーポリシー', 'ファイルを検証', '言語'
  ];

  D.zh = [
    '面向 Solana Seeker 和 Saga 的加密备忘录保险库，带链上证明',
    '你的秘密属于你。你的证明留在 Solana 上。',
    '它能做什么',
    'VaultMemo 把你的助记词、密码和私人笔记只保存在你的设备上，绝不放在服务器上。每次保存时，该笔记的指纹会写入 Solana 区块链，这样你之后可以证明它存在过且没有被改动，而无需暴露笔记本身。',
    '仅本地加密', '笔记经加密后只保存在你的设备上。不上传任何内容，也不需要账号。',
    '可发现篡改的证明', '每条笔记的哈希都会记录在 Solana 主网上，任何人之后都可以独立验证。',
    'Seed Vault 派生密钥', '你的 Solana 钱包对一条固定消息签名，并用这个签名派生加密密钥。无需 PIN，也无需生物识别。',
    '按保存付费', '没有订阅。按大小一次性支付少量费用即可使用存储，支持 SKR、SOL、USDC 或 USDT。',
    '工作原理',
    'Seed Vault 签名', '你的钱包在设备上对固定消息签名。私钥永远不会离开硬件。',
    '派生密钥', '把该签名做哈希，生成 AES-256 加密密钥，只保存在内存中。',
    '证明上链', '加密笔记的指纹记录在 Solana 上，作为它存在过的防篡改证据。',
    '常见问题', '关于 VaultMemo 如何处理你的数据的常见问题。',
    '我的笔记内容会在 Solana 区块链上被看到吗？', '不会。你的笔记经加密后只保存在你的设备上。链上只记录一个随机的哈希指纹（证明笔记存在过），绝不记录内容本身。',
    '忘记密码会怎样？', '没有需要你记住的单独密码。加密密钥每次都由 Seed Vault 签名即时生成，所以只要你钱包的助记词安全，你就不会失去对密钥的访问。',
    '丢失钱包的助记词会怎样？', '由于加密密钥由你钱包的签名派生，丢失助记词就意味着永久无法访问加密的笔记。请把助记词和 .vam 备份文件分别妥善保管在不同的地方。',
    '删除并重新安装应用后，笔记会消失吗？', '不会。加密的 .vam 文件保存在你在设备上选择的文件夹中（例如 Downloads/VaultMemo），而不是应用内部。重装后用同一个钱包重新连接，一切都还在。',
    '链上验证是如何工作的？', 'VaultMemo 会把你保存的文件的哈希与实际写入 Solana 区块链的记录进行比对。哪怕只有一个字节发生变化，或者文件是伪造的，验证都会失败。',
    '什么是加密证书，如何使用？', '笔记验证通过后，你可以在应用内立即生成一张安全证书图片（PNG）。其中包含你的钱包地址、链上交易 ID 和保存时间，你可以像名片一样分享它，作为该笔记在那一刻未被改动而存在的证明。',
    '实时 RPC 验证有什么不同？', '从 v1.3.4 开始，VaultMemo 直接把你保存的文件的哈希与 Solana 区块链（RPC）上的实时记录比对。只要有一个字节被改动或篡改，验证就会立即失败，从而保证数据的完整性。',
    '需要按月订阅付费吗？', '不需要。完全没有订阅。只有在保存笔记时才按笔记大小一次性支付少量费用。小于 200 字节的笔记免费。',
    'VaultMemo 说没有服务器，为什么还用 Firebase？', 'Firebase Remote Config 只用于推送价格更新和应用内公告，不用于存储或处理你的数据。你的笔记内容、钱包密钥和个人信息绝不会发送到 Firebase 或任何其他服务器。',
    '查看源代码',
    '联系我们', '关于 VaultMemo 的问题、反馈或合作咨询，请通过下面的方式联系我们。',
    '使用条款', '隐私政策', '验证文件', '语言'
  ];

  D['zh-TW'] = [
    '為 Solana Seeker 與 Saga 打造、附鏈上證明的加密備忘錄保險庫',
    '你的秘密屬於你。你的證明留在 Solana 上。',
    '它能做什麼',
    'VaultMemo 把你的助記詞、密碼和私人筆記只儲存在你的裝置上，絕不放在伺服器上。每次儲存時，該筆記的指紋會寫入 Solana 區塊鏈，讓你日後可以證明它存在過且沒有被更動，而不必暴露筆記本身。',
    '僅本機加密', '筆記經加密後只儲存在你的裝置上。不上傳任何內容，也不需要帳號。',
    '可發現竄改的證明', '每則筆記的雜湊都會記錄在 Solana 主網上，任何人日後都可以獨立驗證。',
    'Seed Vault 衍生金鑰', '你的 Solana 錢包對一則固定訊息簽名，並用這個簽名衍生加密金鑰。不需要 PIN，也不需要生物辨識。',
    '依儲存付費', '沒有訂閱。依大小一次性支付少量費用即可使用儲存空間，支援 SKR、SOL、USDC 或 USDT。',
    '運作方式',
    'Seed Vault 簽名', '你的錢包在裝置上對固定訊息簽名。私鑰永遠不會離開硬體。',
    '衍生金鑰', '把該簽名做雜湊，產生 AES-256 加密金鑰，只保留在記憶體中。',
    '證明上鏈', '加密筆記的指紋記錄在 Solana 上，作為它存在過的防竄改證據。',
    '常見問題', '關於 VaultMemo 如何處理你的資料的常見問題。',
    '我的筆記內容會在 Solana 區塊鏈上被看到嗎？', '不會。你的筆記經加密後只儲存在你的裝置上。鏈上只記錄一個隨機的雜湊指紋（證明筆記存在過），絕不記錄內容本身。',
    '忘記密碼會怎樣？', '沒有需要你記住的獨立密碼。加密金鑰每次都由 Seed Vault 簽名即時產生，所以只要你錢包的助記詞安全，你就不會失去對金鑰的存取。',
    '遺失錢包的助記詞會怎樣？', '由於加密金鑰由你錢包的簽名衍生，遺失助記詞就代表永久無法存取加密的筆記。請把助記詞和 .vam 備份檔分別妥善保管在不同的地方。',
    '刪除並重新安裝應用程式後，筆記會消失嗎？', '不會。加密的 .vam 檔案儲存在你在裝置上選擇的資料夾中（例如 Downloads/VaultMemo），而不是應用程式內部。重裝後用同一個錢包重新連線，一切都還在。',
    '鏈上驗證是如何運作的？', 'VaultMemo 會把你儲存的檔案的雜湊與實際寫入 Solana 區塊鏈的記錄進行比對。即使只有一個位元組發生變化，或檔案是偽造的，驗證都會失敗。',
    '什麼是加密憑證，如何使用？', '筆記驗證通過後，你可以在應用程式內立即產生一張安全憑證圖片（PNG）。其中包含你的錢包位址、鏈上交易 ID 和儲存時間，你可以像名片一樣分享它，作為該筆記在那一刻未被更動而存在的證明。',
    '即時 RPC 驗證有什麼不同？', '從 v1.3.4 開始，VaultMemo 直接把你儲存的檔案的雜湊與 Solana 區塊鏈（RPC）上的即時記錄比對。只要有一個位元組被更動或竄改，驗證就會立即失敗，從而保證資料的完整性。',
    '需要按月訂閱付費嗎？', '不需要。完全沒有訂閱。只有在儲存筆記時才依筆記大小一次性支付少量費用。小於 200 位元組的筆記免費。',
    'VaultMemo 說沒有伺服器，為什麼還用 Firebase？', 'Firebase Remote Config 只用於推送價格更新和應用程式內公告，不用於儲存或處理你的資料。你的筆記內容、錢包金鑰和個人資訊絕不會傳送到 Firebase 或任何其他伺服器。',
    '查看原始碼',
    '聯絡我們', '關於 VaultMemo 的問題、意見或合作洽詢，請透過下方方式與我們聯絡。',
    '使用條款', '隱私權政策', '驗證檔案', '語言'
  ];

  D.de = [
    'Verschlüsselter Memo-Tresor mit On-Chain-Nachweis, für Solana Seeker & Saga',
    'Deine Geheimnisse bleiben deine. Dein Nachweis lebt auf Solana.',
    'Was es macht',
    'VaultMemo speichert deine Seed-Phrasen, Passwörter und privaten Notizen nur auf deinem Gerät – nie auf einem Server. Bei jedem Speichern wird ein Fingerabdruck der Notiz in die Solana-Blockchain geschrieben. So kannst du später beweisen, dass sie existierte und nicht verändert wurde, ohne die Notiz selbst preiszugeben.',
    'Nur lokale Verschlüsselung', 'Notizen werden verschlüsselt und nur auf deinem Gerät gespeichert. Es wird nichts hochgeladen, ein Konto ist nicht nötig.',
    'Manipulationssicherer Nachweis', 'Ein Hash jeder Notiz wird im Solana-Mainnet erfasst, sodass ihn später jeder unabhängig prüfen kann.',
    'Aus Seed Vault abgeleiteter Schlüssel', 'Deine Solana-Wallet signiert eine feste Nachricht, und aus dieser Signatur wird der Schlüssel abgeleitet. Keine PIN, keine Biometrie.',
    'Zahlung pro Speichern', 'Kein Abo. Eine kleine Einmalzahlung schaltet Speicherplatz nach Größe frei – in SKR, SOL, USDC oder USDT.',
    'So funktioniert es',
    'Seed Vault signiert', 'Deine Wallet signiert auf dem Gerät eine feste Nachricht. Der private Schlüssel verlässt die Hardware nie.',
    'Ein Schlüssel wird abgeleitet', 'Diese Signatur wird gehasht und ergibt einen AES-256-Schlüssel, der nur im Arbeitsspeicher liegt.',
    'Ein Nachweis geht on-chain', 'Ein Fingerabdruck der verschlüsselten Notiz wird auf Solana erfasst – als manipulationssicherer Beleg, dass sie existierte.',
    'FAQ', 'Häufige Fragen dazu, wie VaultMemo mit deinen Daten umgeht.',
    'Ist der Inhalt meiner Notiz auf der Solana-Blockchain sichtbar?', 'Nein. Deine Notiz wird verschlüsselt und nur auf deinem Gerät gespeichert. On-chain wird nur ein zufällig wirkender Hash-Fingerabdruck erfasst – der Beleg, dass die Notiz existierte –, niemals der Inhalt selbst.',
    'Was passiert, wenn ich mein Passwort vergesse?', 'Es gibt kein separates Passwort, das man vergessen könnte. Dein Schlüssel wird jedes Mal sofort aus einer Seed-Vault-Signatur erzeugt. Solange die Seed-Phrase deiner Wallet sicher ist, verlierst du nie den Zugriff auf deinen Schlüssel.',
    'Was passiert, wenn ich die Seed-Phrase meiner Wallet verliere?', 'Da dein Schlüssel aus der Signatur deiner Wallet abgeleitet wird, bedeutet der Verlust der Seed-Phrase den dauerhaften Verlust des Zugriffs auf deine verschlüsselten Notizen. Bewahre Seed-Phrase und .vam-Backups sicher und getrennt voneinander auf.',
    'Verschwinden meine Notizen, wenn ich die App lösche und neu installiere?', 'Nein. Deine verschlüsselten .vam-Dateien liegen in einem Ordner, den du auf deinem Gerät gewählt hast (z. B. Downloads/VaultMemo), nicht in der App selbst. Verbinde nach der Neuinstallation dieselbe Wallet, und alles ist wieder da.',
    'Wie funktioniert die On-Chain-Prüfung?', 'VaultMemo vergleicht den Hash deiner gespeicherten Datei mit dem Eintrag, der tatsächlich in die Solana-Blockchain geschrieben wurde. Hat sich auch nur ein Byte geändert oder ist die Datei gefälscht, schlägt die Prüfung fehl.',
    'Was ist das Verschlüsselungszertifikat und wie nutze ich es?', 'Nach der Prüfung einer Notiz kannst du direkt in der App ein Sicherheitszertifikat als Bild (PNG) erstellen. Es enthält deine Wallet-Adresse, die On-Chain-Transaktions-ID und den Speicherzeitpunkt – du kannst es wie eine Visitenkarte teilen, als Beleg, dass die Notiz zu diesem Zeitpunkt unverändert existierte.',
    'Was ist an der Echtzeit-RPC-Prüfung anders?', 'Seit v1.3.4 vergleicht VaultMemo den Hash deiner gespeicherten Datei direkt mit dem aktuellen Eintrag in der Solana-Blockchain (RPC). Wurde auch nur ein Byte geändert oder manipuliert, schlägt die Prüfung sofort fehl – das garantiert die Integrität deiner Daten.',
    'Muss ich ein monatliches Abo bezahlen?', 'Nein. Es gibt gar kein Abo. Du zahlst nur beim Speichern einer Notiz eine kleine Einmalgebühr, die von ihrer Größe abhängt. Notizen unter 200 Bytes sind kostenlos.',
    'VaultMemo sagt, es hat keine Server – warum nutzt es dann Firebase?', 'Firebase Remote Config dient nur dazu, Preisänderungen und In-App-Hinweise auszuliefern, nicht zum Speichern oder Verarbeiten deiner Daten. Dein Notizinhalt, deine Wallet-Schlüssel und persönliche Daten werden nie an Firebase oder einen anderen Server gesendet.',
    'Quellcode ansehen',
    'Kontakt', 'Fragen zu VaultMemo, Feedback oder Kooperationsanfragen – melde dich unten.',
    'Nutzungsbedingungen', 'Datenschutzerklärung', 'Datei prüfen', 'Sprache'
  ];

  D.es = [
    'Bóveda de memos cifrados con prueba en la cadena, para Solana Seeker y Saga',
    'Tus secretos siguen siendo tuyos. Tu prueba vive en Solana.',
    'Qué hace',
    'VaultMemo guarda tus frases semilla, contraseñas y notas privadas solo en tu dispositivo, nunca en un servidor. Cada vez que guardas, una huella de esa nota se escribe en la blockchain de Solana, para que luego puedas demostrar que existió y que no ha sido alterada, sin exponer nunca la nota en sí.',
    'Cifrado solo local', 'Las notas se cifran y se guardan en tu dispositivo. No se sube nada y no hace falta cuenta.',
    'Prueba a prueba de manipulación', 'El hash de cada nota se registra en la mainnet de Solana, de modo que cualquiera puede verificarlo de forma independiente más adelante.',
    'Clave derivada de Seed Vault', 'Tu wallet de Solana firma un mensaje fijo y esa firma se usa para derivar la clave de cifrado. Sin PIN ni biometría.',
    'Pago por guardado', 'Sin suscripción. Un pequeño pago único desbloquea el almacenamiento según el tamaño, en SKR, SOL, USDC o USDT.',
    'Cómo funciona',
    'Seed Vault firma', 'Tu wallet firma un mensaje fijo en el dispositivo. La clave privada nunca sale del hardware.',
    'Se deriva una clave', 'Esa firma se convierte en hash para crear una clave de cifrado AES-256 que solo se conserva en memoria.',
    'Una prueba va a la cadena', 'Una huella de la nota cifrada se registra en Solana como evidencia a prueba de manipulaciones de que existió.',
    'Preguntas frecuentes', 'Preguntas habituales sobre cómo VaultMemo trata tus datos.',
    '¿El contenido de mi memo es visible en la blockchain de Solana?', 'No. Tu memo se cifra y se guarda solo en tu dispositivo. En la cadena solo se registra una huella hash aleatoria, la prueba de que la nota existió, nunca el contenido en sí.',
    '¿Qué pasa si olvido mi contraseña?', 'No hay una contraseña aparte que olvidar. Tu clave de cifrado se genera al instante a partir de una firma de Seed Vault cada vez, así que mientras la frase semilla de tu wallet esté a salvo, nunca perderás el acceso a tu clave.',
    '¿Qué pasa si pierdo la frase semilla de mi wallet?', 'Como tu clave de cifrado se deriva de la firma de tu wallet, perder la frase semilla significa perder para siempre el acceso a tus notas cifradas. Guarda tu frase semilla y tus copias .vam en lugares seguros y distintos.',
    '¿Desaparecerán mis notas si borro y reinstalo la app?', 'No. Tus archivos .vam cifrados se guardan en una carpeta que elegiste en tu dispositivo (p. ej. Downloads/VaultMemo), no dentro de la app. Tras reinstalar, conecta la misma wallet y todo sigue ahí.',
    '¿Cómo funciona la verificación en la cadena?', 'VaultMemo compara el hash de tu archivo guardado con el registro realmente escrito en la blockchain de Solana. Si ha cambiado aunque sea un byte, o el archivo es falso, la verificación falla.',
    '¿Qué es el Certificado de cifrado y cómo se usa?', 'Una vez verificado un memo, puedes generar al instante una imagen de certificado de seguridad (PNG) en la propia app. Incluye la dirección de tu wallet, el ID de la transacción en la cadena y la fecha de guardado, para que puedas compartirlo como una tarjeta de visita, como prueba de que una nota existía sin alterar en ese momento.',
    '¿Qué tiene de distinta la verificación RPC en tiempo real?', 'Desde la v1.3.4, VaultMemo compara el hash de tu archivo guardado directamente con el registro en vivo de la blockchain de Solana (RPC). Si se cambia o manipula aunque sea un solo byte, la verificación falla al instante, lo que garantiza la integridad de tus datos.',
    '¿Tengo que pagar una suscripción mensual?', 'No. No hay ninguna suscripción. Pagas una pequeña tarifa única según el tamaño de la nota solo cuando la guardas. Las notas de menos de 200 bytes son gratis.',
    'VaultMemo dice que no tiene servidores, ¿por qué usa Firebase?', 'Firebase Remote Config se usa solo para enviar cambios de precios y avisos dentro de la app, no para almacenar ni procesar tus datos. El contenido de tus memos, las claves de tu wallet y tu información personal nunca se envían a Firebase ni a ningún otro servidor.',
    'Ver el código fuente',
    'Contacto', 'Preguntas sobre VaultMemo, comentarios o propuestas de colaboración: escríbenos abajo.',
    'Términos de uso', 'Política de privacidad', 'Verificar un archivo', 'Idioma'
  ];

  D.fr = [
    'Coffre de mémos chiffrés avec preuve sur la blockchain, pour Solana Seeker et Saga',
    'Vos secrets restent à vous. Votre preuve vit sur Solana.',
    'Ce que ça fait',
    'VaultMemo conserve vos phrases de récupération, mots de passe et notes privées uniquement sur votre appareil, jamais sur un serveur. À chaque enregistrement, une empreinte de la note est écrite sur la blockchain Solana, ce qui vous permet de prouver plus tard qu\'elle existait et n\'a pas été modifiée, sans jamais exposer la note elle-même.',
    'Chiffrement uniquement local', 'Les notes sont chiffrées et stockées sur votre appareil. Rien n\'est envoyé, aucun compte n\'est nécessaire.',
    'Preuve inviolable', 'Le hash de chaque note est enregistré sur le mainnet de Solana, que n\'importe qui peut ensuite vérifier de façon indépendante.',
    'Clé dérivée de Seed Vault', 'Votre wallet Solana signe un message fixe, et cette signature sert à dériver la clé de chiffrement. Ni code PIN, ni biométrie.',
    'Paiement à l\'enregistrement', 'Pas d\'abonnement. Un petit paiement unique débloque le stockage selon la taille, en SKR, SOL, USDC ou USDT.',
    'Comment ça marche',
    'Seed Vault signe', 'Votre wallet signe un message fixe sur l\'appareil. La clé privée ne quitte jamais le matériel.',
    'Une clé est dérivée', 'Cette signature est hachée pour créer une clé de chiffrement AES-256, conservée uniquement en mémoire.',
    'Une preuve est inscrite sur la blockchain', 'Une empreinte de la note chiffrée est enregistrée sur Solana comme preuve infalsifiable de son existence.',
    'FAQ', 'Questions fréquentes sur la façon dont VaultMemo traite vos données.',
    'Le contenu de mon mémo est-il visible sur la blockchain Solana ?', 'Non. Votre mémo est chiffré et stocké uniquement sur votre appareil. Seule une empreinte hash aléatoire, preuve que la note existait, est enregistrée sur la blockchain, jamais le contenu lui-même.',
    'Que se passe-t-il si j\'oublie mon mot de passe ?', 'Il n\'y a pas de mot de passe distinct à oublier. Votre clé de chiffrement est générée instantanément à partir d\'une signature Seed Vault à chaque fois : tant que la phrase de récupération de votre wallet est en sécurité, vous ne perdrez jamais l\'accès à votre clé.',
    'Que se passe-t-il si je perds la phrase de récupération de mon wallet ?', 'Votre clé de chiffrement étant dérivée de la signature de votre wallet, perdre la phrase de récupération signifie perdre définitivement l\'accès à vos notes chiffrées. Conservez votre phrase de récupération et vos sauvegardes .vam en lieu sûr, séparément.',
    'Mes notes disparaîtront-elles si je supprime et réinstalle l\'application ?', 'Non. Vos fichiers .vam chiffrés sont stockés dans un dossier que vous avez choisi sur votre appareil (p. ex. Downloads/VaultMemo), pas dans l\'application. Après la réinstallation, reconnectez le même wallet et tout est toujours là.',
    'Comment fonctionne la vérification sur la blockchain ?', 'VaultMemo compare le hash de votre fichier enregistré avec l\'enregistrement réellement écrit sur la blockchain Solana. Si ne serait-ce qu\'un octet a changé, ou si le fichier est faux, la vérification échoue.',
    'Qu\'est-ce que le Certificat de chiffrement et comment l\'utiliser ?', 'Une fois un mémo vérifié, vous pouvez générer instantanément dans l\'application une image de certificat de sécurité (PNG). Elle contient l\'adresse de votre wallet, l\'ID de la transaction on-chain et l\'horodatage de l\'enregistrement : vous pouvez la partager comme une carte de visite, preuve qu\'une note existait, inchangée, à ce moment-là.',
    'Qu\'a de différent la vérification RPC en temps réel ?', 'Depuis la v1.3.4, VaultMemo compare le hash de votre fichier enregistré directement avec l\'enregistrement en direct de la blockchain Solana (RPC). Si un seul octet a été modifié ou altéré, la vérification échoue immédiatement, ce qui garantit l\'intégrité de vos données.',
    'Dois-je payer un abonnement mensuel ?', 'Non. Il n\'y a aucun abonnement. Vous payez un petit tarif unique, selon la taille de la note, uniquement lorsque vous l\'enregistrez. Les notes de moins de 200 octets sont gratuites.',
    'VaultMemo dit ne pas avoir de serveurs, alors pourquoi utilise-t-il Firebase ?', 'Firebase Remote Config sert uniquement à diffuser les changements de prix et les annonces dans l\'application, pas à stocker ni traiter vos données. Le contenu de vos mémos, vos clés de wallet et vos informations personnelles ne sont jamais envoyés à Firebase ni à aucun autre serveur.',
    'Voir le code source',
    'Nous contacter', 'Questions sur VaultMemo, retours ou demandes de partenariat : écrivez-nous ci-dessous.',
    'Conditions d\'utilisation', 'Politique de confidentialité', 'Vérifier un fichier', 'Langue'
  ];

  D.it = [
    'Cassaforte di memo cifrati con prova on-chain, per Solana Seeker e Saga',
    'I tuoi segreti restano tuoi. La tua prova vive su Solana.',
    'Cosa fa',
    'VaultMemo conserva le tue frasi seed, password e note private solo sul tuo dispositivo, mai su un server. Ogni volta che salvi, un\'impronta della nota viene scritta sulla blockchain di Solana, così puoi dimostrare in seguito che esisteva e non è stata alterata, senza mai esporre la nota stessa.',
    'Cifratura solo locale', 'Le note sono cifrate e salvate sul tuo dispositivo. Non viene caricato nulla e non serve un account.',
    'Prova a prova di manomissione', 'L\'hash di ogni nota è registrato sulla mainnet di Solana, così chiunque può verificarlo in modo indipendente in seguito.',
    'Chiave derivata da Seed Vault', 'Il tuo wallet Solana firma un messaggio fisso e quella firma serve a derivare la chiave di cifratura. Niente PIN, niente biometria.',
    'Pagamento a ogni salvataggio', 'Nessun abbonamento. Un piccolo pagamento una tantum sblocca lo spazio in base alla dimensione, in SKR, SOL, USDC o USDT.',
    'Come funziona',
    'Seed Vault firma', 'Il tuo wallet firma un messaggio fisso sul dispositivo. La chiave privata non lascia mai l\'hardware.',
    'Viene derivata una chiave', 'Quella firma viene sottoposta a hash per creare una chiave di cifratura AES-256, tenuta solo in memoria.',
    'Una prova va on-chain', 'Un\'impronta della nota cifrata viene registrata su Solana come prova a prova di manomissione della sua esistenza.',
    'Domande frequenti', 'Domande comuni su come VaultMemo tratta i tuoi dati.',
    'Il contenuto del mio memo è visibile sulla blockchain di Solana?', 'No. Il tuo memo è cifrato e salvato solo sul tuo dispositivo. On-chain viene registrata solo un\'impronta hash casuale, la prova che la nota esisteva, mai il contenuto.',
    'Cosa succede se dimentico la password?', 'Non c\'è una password separata da dimenticare. La tua chiave di cifratura viene generata all\'istante da una firma di Seed Vault ogni volta, quindi finché la frase seed del tuo wallet è al sicuro non perderai mai l\'accesso alla chiave.',
    'Cosa succede se perdo la frase seed del mio wallet?', 'Poiché la chiave di cifratura deriva dalla firma del tuo wallet, perdere la frase seed significa perdere per sempre l\'accesso alle tue note cifrate. Conserva la frase seed e i backup .vam in luoghi sicuri e separati.',
    'Le mie note spariranno se elimino e reinstallo l\'app?', 'No. I tuoi file .vam cifrati sono salvati in una cartella che hai scelto sul dispositivo (es. Downloads/VaultMemo), non dentro l\'app. Dopo la reinstallazione, ricollega lo stesso wallet e tutto è ancora lì.',
    'Come funziona la verifica on-chain?', 'VaultMemo confronta l\'hash del tuo file salvato con la registrazione effettivamente scritta sulla blockchain di Solana. Se è cambiato anche un solo byte, o il file è falso, la verifica fallisce.',
    'Cos\'è il Certificato di cifratura e come si usa?', 'Dopo aver verificato un memo, puoi generare subito nell\'app un\'immagine di certificato di sicurezza (PNG). Include l\'indirizzo del tuo wallet, l\'ID della transazione on-chain e l\'orario di salvataggio, così puoi condividerlo come un biglietto da visita, come prova che una nota esisteva inalterata in quel momento.',
    'Cosa cambia con la verifica RPC in tempo reale?', 'Dalla v1.3.4, VaultMemo confronta l\'hash del tuo file salvato direttamente con la registrazione in tempo reale sulla blockchain di Solana (RPC). Se anche un solo byte è stato modificato o manomesso, la verifica fallisce subito, garantendo l\'integrità dei tuoi dati.',
    'Devo pagare un abbonamento mensile?', 'No. Non c\'è alcun abbonamento. Paghi una piccola tariffa una tantum, in base alla dimensione della nota, solo quando la salvi. Le note sotto i 200 byte sono gratuite.',
    'VaultMemo dice di non avere server, perché usa Firebase?', 'Firebase Remote Config serve solo a inviare aggiornamenti dei prezzi e avvisi nell\'app, non a salvare o elaborare i tuoi dati. Il contenuto dei memo, le chiavi del wallet e i dati personali non vengono mai inviati a Firebase né ad altri server.',
    'Vedi il codice sorgente',
    'Contatti', 'Domande su VaultMemo, feedback o richieste di collaborazione: scrivici qui sotto.',
    'Termini di utilizzo', 'Informativa sulla privacy', 'Verifica un file', 'Lingua'
  ];

  D.pt = [
    'Cofre de memos criptografados com prova na blockchain, para Solana Seeker e Saga',
    'Seus segredos continuam seus. Sua prova vive na Solana.',
    'O que faz',
    'O VaultMemo guarda suas frases seed, senhas e notas privadas somente no seu dispositivo, nunca em um servidor. A cada salvamento, uma impressão digital da nota é gravada na blockchain da Solana, para que você possa provar depois que ela existiu e não foi alterada, sem nunca expor a nota em si.',
    'Criptografia apenas local', 'As notas são criptografadas e guardadas no seu dispositivo. Nada é enviado e não é preciso conta.',
    'Prova à prova de adulteração', 'O hash de cada nota é registrado na mainnet da Solana, para que qualquer pessoa possa verificá-lo de forma independente depois.',
    'Chave derivada do Seed Vault', 'Sua carteira Solana assina uma mensagem fixa, e essa assinatura é usada para derivar a chave de criptografia. Sem PIN, sem biometria.',
    'Pagamento por salvamento', 'Sem assinatura. Um pequeno pagamento único libera o armazenamento conforme o tamanho, em SKR, SOL, USDC ou USDT.',
    'Como funciona',
    'O Seed Vault assina', 'Sua carteira assina uma mensagem fixa no dispositivo. A chave privada nunca sai do hardware.',
    'Uma chave é derivada', 'Essa assinatura passa por hash para criar uma chave de criptografia AES-256, mantida apenas na memória.',
    'Uma prova vai para a blockchain', 'Uma impressão digital da nota criptografada é registrada na Solana como evidência à prova de adulteração de que ela existiu.',
    'Perguntas frequentes', 'Perguntas comuns sobre como o VaultMemo trata seus dados.',
    'O conteúdo do meu memo fica visível na blockchain da Solana?', 'Não. Seu memo é criptografado e guardado somente no seu dispositivo. Apenas uma impressão digital hash aleatória, a prova de que a nota existiu, é registrada na blockchain, nunca o conteúdo em si.',
    'O que acontece se eu esquecer minha senha?', 'Não existe uma senha separada para esquecer. Sua chave de criptografia é gerada na hora, a cada vez, a partir de uma assinatura do Seed Vault; enquanto a frase seed da sua carteira estiver segura, você nunca perderá o acesso à chave.',
    'O que acontece se eu perder a frase seed da minha carteira?', 'Como sua chave de criptografia é derivada da assinatura da carteira, perder a frase seed significa perder para sempre o acesso às suas notas criptografadas. Guarde a frase seed e seus backups .vam em lugares seguros e separados.',
    'Minhas notas somem se eu apagar e reinstalar o app?', 'Não. Seus arquivos .vam criptografados ficam em uma pasta que você escolheu no dispositivo (ex.: Downloads/VaultMemo), não dentro do app. Depois de reinstalar, conecte a mesma carteira e tudo continua lá.',
    'Como funciona a verificação na blockchain?', 'O VaultMemo compara o hash do seu arquivo salvo com o registro realmente gravado na blockchain da Solana. Se mudou até um único byte, ou se o arquivo é falso, a verificação falha.',
    'O que é o Certificado de criptografia e como uso?', 'Depois que um memo é verificado, você pode gerar na hora, no próprio app, uma imagem de certificado de segurança (PNG). Ela inclui o endereço da sua carteira, o ID da transação na blockchain e o horário do salvamento, para que você a compartilhe como um cartão de visita, como prova de que a nota existia inalterada naquele momento.',
    'O que muda na verificação RPC em tempo real?', 'A partir da v1.3.4, o VaultMemo compara o hash do seu arquivo salvo diretamente com o registro ao vivo na blockchain da Solana (RPC). Se um único byte for alterado ou adulterado, a verificação falha imediatamente, garantindo a integridade dos seus dados.',
    'Preciso pagar uma assinatura mensal?', 'Não. Não há assinatura alguma. Você paga uma pequena taxa única, conforme o tamanho da nota, apenas quando a salva. Notas com menos de 200 bytes são gratuitas.',
    'O VaultMemo diz que não tem servidores, então por que usa o Firebase?', 'O Firebase Remote Config é usado apenas para enviar atualizações de preços e avisos dentro do app, não para guardar ou processar seus dados. O conteúdo dos memos, as chaves da carteira e suas informações pessoais nunca são enviados ao Firebase nem a qualquer outro servidor.',
    'Ver o código-fonte',
    'Fale conosco', 'Dúvidas sobre o VaultMemo, comentários ou propostas de parceria: entre em contato abaixo.',
    'Termos de uso', 'Política de privacidade', 'Verificar um arquivo', 'Idioma'
  ];

  D.ru = [
    'Хранилище зашифрованных заметок с доказательством в блокчейне, для Solana Seeker и Saga',
    'Ваши секреты остаются вашими. Ваше доказательство живёт в Solana.',
    'Что это делает',
    'VaultMemo хранит ваши seed-фразы, пароли и личные заметки только на вашем устройстве — никогда на сервере. При каждом сохранении отпечаток заметки записывается в блокчейн Solana, так что позже вы сможете доказать, что она существовала и не была изменена, ни разу не раскрыв саму заметку.',
    'Шифрование только на устройстве', 'Заметки шифруются и хранятся на вашем устройстве. Ничего не загружается, аккаунт не нужен.',
    'Доказательство, защищённое от подделки', 'Хеш каждой заметки записывается в основную сеть Solana, чтобы любой мог независимо проверить его позже.',
    'Ключ из Seed Vault', 'Ваш кошелёк Solana подписывает фиксированное сообщение, и из этой подписи выводится ключ шифрования. Без PIN-кода и биометрии.',
    'Оплата за сохранение', 'Без подписки. Небольшой разовый платёж открывает хранилище по размеру, в SKR, SOL, USDC или USDT.',
    'Как это работает',
    'Seed Vault подписывает', 'Ваш кошелёк подписывает фиксированное сообщение на устройстве. Закрытый ключ никогда не покидает аппаратную часть.',
    'Выводится ключ', 'Эта подпись хешируется, и получается ключ шифрования AES-256, который хранится только в памяти.',
    'Доказательство попадает в блокчейн', 'Отпечаток зашифрованной заметки записывается в Solana как защищённое от подделки свидетельство того, что она существовала.',
    'Вопросы и ответы', 'Частые вопросы о том, как VaultMemo обращается с вашими данными.',
    'Виден ли текст моей заметки в блокчейне Solana?', 'Нет. Ваша заметка шифруется и хранится только на вашем устройстве. В блокчейн записывается лишь случайный хеш-отпечаток — доказательство того, что заметка существовала, — но никогда не её содержимое.',
    'Что будет, если я забуду пароль?', 'Отдельного пароля, который можно забыть, нет. Ключ шифрования каждый раз мгновенно создаётся из подписи Seed Vault, поэтому, пока seed-фраза вашего кошелька в безопасности, вы никогда не потеряете доступ к ключу.',
    'Что будет, если я потеряю seed-фразу кошелька?', 'Поскольку ключ шифрования выводится из подписи вашего кошелька, потеря seed-фразы означает безвозвратную потерю доступа к зашифрованным заметкам. Храните seed-фразу и резервные копии .vam в надёжных и разных местах.',
    'Пропадут ли мои заметки, если я удалю и заново установлю приложение?', 'Нет. Ваши зашифрованные файлы .vam хранятся в выбранной вами папке на устройстве (например, Downloads/VaultMemo), а не внутри приложения. После переустановки подключите тот же кошелёк, и всё останется на месте.',
    'Как работает проверка в блокчейне?', 'VaultMemo сравнивает хеш вашего сохранённого файла с записью, реально внесённой в блокчейн Solana. Если изменился хотя бы один байт или файл поддельный, проверка не пройдёт.',
    'Что такое сертификат шифрования и как им пользоваться?', 'После проверки заметки вы можете сразу создать в приложении изображение сертификата безопасности (PNG). В нём указаны адрес вашего кошелька, ID транзакции в блокчейне и время сохранения — им можно делиться, как визиткой, как доказательством того, что заметка существовала в неизменном виде в тот момент.',
    'Чем отличается проверка RPC в реальном времени?', 'Начиная с версии 1.3.4 VaultMemo сравнивает хеш вашего сохранённого файла напрямую с актуальной записью в блокчейне Solana (RPC). Если изменён или подделан хотя бы один байт, проверка сразу не проходит, что гарантирует целостность ваших данных.',
    'Нужно ли платить ежемесячную подписку?', 'Нет. Подписки нет вообще. Вы платите небольшую разовую плату, зависящую от размера заметки, только при её сохранении. Заметки меньше 200 байт бесплатны.',
    'VaultMemo говорит, что у него нет серверов, так почему он использует Firebase?', 'Firebase Remote Config используется только для передачи изменений цен и сообщений в приложении, а не для хранения или обработки ваших данных. Содержимое заметок, ключи кошелька и личные данные никогда не отправляются в Firebase или на любой другой сервер.',
    'Посмотреть исходный код',
    'Связаться с нами', 'Вопросы о VaultMemo, отзывы или предложения о сотрудничестве — пишите ниже.',
    'Условия использования', 'Политика конфиденциальности', 'Проверить файл', 'Язык'
  ];

  D.tr = [
    'Solana Seeker ve Saga için, zincir üstü kanıtlı şifreli not kasası',
    'Sırlarınız sizin kalır. Kanıtınız Solana\'da yaşar.',
    'Ne yapar',
    'VaultMemo, seed ifadelerinizi, parolalarınızı ve özel notlarınızı yalnızca cihazınızda saklar; asla bir sunucuda değil. Her kaydettiğinizde o notun parmak izi Solana blokzincirine yazılır; böylece notun kendisini hiç açığa çıkarmadan, daha sonra var olduğunu ve değiştirilmediğini kanıtlayabilirsiniz.',
    'Yalnızca yerel şifreleme', 'Notlar şifrelenir ve cihazınızda saklanır. Hiçbir şey yüklenmez, hesap gerekmez.',
    'Kurcalamaya karşı kanıt', 'Her notun hash\'i Solana ana ağına kaydedilir; böylece herkes daha sonra bağımsız olarak doğrulayabilir.',
    'Seed Vault\'tan türetilen anahtar', 'Solana cüzdanınız sabit bir mesajı imzalar ve bu imza şifreleme anahtarını türetmek için kullanılır. PIN yok, biyometri yok.',
    'Kayıt başına ödeme', 'Abonelik yok. Küçük bir tek seferlik ödeme, boyuta göre depolamanın kilidini açar; SKR, SOL, USDC veya USDT ile.',
    'Nasıl çalışır',
    'Seed Vault imzalar', 'Cüzdanınız cihaz üzerinde sabit bir mesajı imzalar. Özel anahtar donanımdan asla çıkmaz.',
    'Bir anahtar türetilir', 'Bu imza hash\'lenerek yalnızca bellekte tutulan bir AES-256 şifreleme anahtarı oluşturulur.',
    'Bir kanıt zincire yazılır', 'Şifrelenmiş notun parmak izi, var olduğuna dair kurcalamaya karşı kanıt olarak Solana\'ya kaydedilir.',
    'SSS', 'VaultMemo\'nun verilerinizi nasıl ele aldığına dair sık sorulan sorular.',
    'Not içeriğim Solana blokzincirinde görünür mü?', 'Hayır. Notunuz şifrelenir ve yalnızca cihazınızda saklanır. Zincire yalnızca rastgele bir hash parmak izi — notun var olduğunun kanıtı — kaydedilir, içeriğin kendisi asla.',
    'Parolamı unutursam ne olur?', 'Unutulacak ayrı bir parola yoktur. Şifreleme anahtarınız her seferinde bir Seed Vault imzasından anında üretilir; cüzdanınızın seed ifadesi güvende olduğu sürece anahtarınıza erişimi asla kaybetmezsiniz.',
    'Cüzdanımın seed ifadesini kaybedersem ne olur?', 'Şifreleme anahtarınız cüzdanınızın imzasından türetildiği için seed ifadesini kaybetmek, şifreli notlarınıza kalıcı olarak erişimi kaybetmek demektir. Seed ifadenizi ve .vam yedek dosyalarınızı güvenli ve ayrı yerlerde saklayın.',
    'Uygulamayı silip yeniden kurarsam notlarım kaybolur mu?', 'Hayır. Şifreli .vam dosyalarınız uygulamanın içinde değil, cihazınızda seçtiğiniz bir klasörde (ör. Downloads/VaultMemo) saklanır. Yeniden kurduktan sonra aynı cüzdanla bağlanın, her şey yerinde olur.',
    'Zincir üstü doğrulama nasıl çalışır?', 'VaultMemo, kaydettiğiniz dosyanın hash\'ini Solana blokzincirine gerçekten yazılmış kayıtla karşılaştırır. Tek bir bayt bile değiştiyse ya da dosya sahteyse doğrulama başarısız olur.',
    'Şifreleme Sertifikası nedir ve nasıl kullanılır?', 'Bir not doğrulandıktan sonra uygulamada hemen bir güvenlik sertifikası görseli (PNG) oluşturabilirsiniz. Cüzdan adresinizi, zincir üstü işlem kimliğini ve kayıt zamanını içerir; böylece notun o anda değişmeden var olduğunun kanıtı olarak bir kartvizit gibi paylaşabilirsiniz.',
    'Gerçek zamanlı RPC doğrulamasında ne farklı?', 'v1.3.4\'ten itibaren VaultMemo, kaydettiğiniz dosyanın hash\'ini doğrudan Solana blokzincirindeki (RPC) canlı kayıtla karşılaştırır. Tek bir bayt bile değiştirilir veya kurcalanırsa doğrulama anında başarısız olur ve verinizin bütünlüğü garanti edilir.',
    'Aylık abonelik ödemem gerekir mi?', 'Hayır. Hiç abonelik yok. Yalnızca bir notu kaydederken, notun boyutuna göre küçük bir tek seferlik ücret ödersiniz. 200 baytın altındaki notlar ücretsizdir.',
    'VaultMemo sunucusu olmadığını söylüyor, peki neden Firebase kullanıyor?', 'Firebase Remote Config yalnızca fiyat güncellemelerini ve uygulama içi duyuruları iletmek için kullanılır; verilerinizi saklamak veya işlemek için değil. Not içeriğiniz, cüzdan anahtarlarınız ve kişisel bilgileriniz Firebase\'e ya da başka bir sunucuya asla gönderilmez.',
    'Kaynak kodunu görüntüle',
    'İletişim', 'VaultMemo hakkında sorular, geri bildirim veya ortaklık talepleri için aşağıdan ulaşın.',
    'Kullanım Koşulları', 'Gizlilik Politikası', 'Dosya doğrula', 'Dil'
  ];

  D.vi = [
    'Két an toàn cho ghi chú mã hóa có bằng chứng trên chuỗi, dành cho Solana Seeker & Saga',
    'Bí mật của bạn vẫn là của bạn. Bằng chứng của bạn nằm trên Solana.',
    'Nó làm gì',
    'VaultMemo chỉ lưu cụm từ khôi phục, mật khẩu và ghi chú riêng tư của bạn trên thiết bị, không bao giờ trên máy chủ. Mỗi lần lưu, dấu vân tay của ghi chú được ghi vào blockchain Solana, để sau này bạn có thể chứng minh nó đã tồn tại và chưa bị thay đổi mà không phải tiết lộ chính ghi chú.',
    'Mã hóa chỉ trên thiết bị', 'Ghi chú được mã hóa và lưu trên thiết bị của bạn. Không có gì được tải lên, không cần tài khoản.',
    'Bằng chứng chống giả mạo', 'Hash của mỗi ghi chú được ghi trên mainnet Solana, để bất kỳ ai cũng có thể tự xác minh sau này.',
    'Khóa sinh ra từ Seed Vault', 'Ví Solana của bạn ký một thông điệp cố định, và chữ ký đó được dùng để tạo khóa mã hóa. Không PIN, không sinh trắc học.',
    'Trả phí theo mỗi lần lưu', 'Không có gói đăng ký. Một khoản thanh toán nhỏ một lần mở khóa dung lượng lưu trữ theo kích thước, bằng SKR, SOL, USDC hoặc USDT.',
    'Cách hoạt động',
    'Seed Vault ký', 'Ví của bạn ký một thông điệp cố định ngay trên thiết bị. Khóa riêng không bao giờ rời khỏi phần cứng.',
    'Một khóa được tạo ra', 'Chữ ký đó được băm để tạo khóa mã hóa AES-256, chỉ giữ trong bộ nhớ.',
    'Một bằng chứng lên chuỗi', 'Dấu vân tay của ghi chú đã mã hóa được ghi trên Solana làm bằng chứng chống giả mạo rằng nó đã tồn tại.',
    'Câu hỏi thường gặp', 'Những câu hỏi phổ biến về cách VaultMemo xử lý dữ liệu của bạn.',
    'Nội dung ghi chú của tôi có hiển thị trên blockchain Solana không?', 'Không. Ghi chú của bạn được mã hóa và chỉ lưu trên thiết bị. Chỉ có một dấu vân tay hash ngẫu nhiên, bằng chứng rằng ghi chú đã tồn tại, được ghi lên chuỗi, không bao giờ là chính nội dung.',
    'Điều gì xảy ra nếu tôi quên mật khẩu?', 'Không có mật khẩu riêng nào để quên. Khóa mã hóa của bạn được tạo ngay từ chữ ký Seed Vault mỗi lần, nên miễn là cụm từ khôi phục của ví an toàn, bạn sẽ không bao giờ mất quyền truy cập vào khóa.',
    'Điều gì xảy ra nếu tôi mất cụm từ khôi phục của ví?', 'Vì khóa mã hóa được tạo từ chữ ký của ví, mất cụm từ khôi phục đồng nghĩa với mất vĩnh viễn quyền truy cập vào các ghi chú đã mã hóa. Hãy cất cụm từ khôi phục và các tệp sao lưu .vam ở những nơi an toàn và riêng biệt.',
    'Ghi chú của tôi có biến mất nếu tôi xóa và cài lại ứng dụng không?', 'Không. Các tệp .vam đã mã hóa được lưu trong thư mục bạn chọn trên thiết bị (ví dụ Downloads/VaultMemo), không nằm trong ứng dụng. Sau khi cài lại, hãy kết nối cùng một ví và mọi thứ vẫn còn đó.',
    'Việc xác minh trên chuỗi hoạt động thế nào?', 'VaultMemo so sánh hash của tệp bạn đã lưu với bản ghi thực sự được ghi trên blockchain Solana. Nếu dù chỉ một byte thay đổi, hoặc tệp là giả, việc xác minh sẽ thất bại.',
    'Chứng nhận mã hóa là gì và dùng thế nào?', 'Sau khi một ghi chú được xác minh, bạn có thể tạo ngay một hình ảnh chứng nhận bảo mật (PNG) trong ứng dụng. Nó gồm địa chỉ ví, ID giao dịch trên chuỗi và thời điểm lưu, để bạn chia sẻ như một danh thiếp, làm bằng chứng rằng ghi chú đã tồn tại nguyên vẹn vào thời điểm đó.',
    'Xác minh RPC theo thời gian thực khác gì?', 'Từ v1.3.4, VaultMemo so sánh hash của tệp bạn đã lưu trực tiếp với bản ghi trực tiếp trên blockchain Solana (RPC). Nếu dù chỉ một byte bị thay đổi hoặc can thiệp, việc xác minh thất bại ngay lập tức, đảm bảo tính toàn vẹn dữ liệu của bạn.',
    'Tôi có phải trả phí đăng ký hằng tháng không?', 'Không. Hoàn toàn không có gói đăng ký. Bạn chỉ trả một khoản phí nhỏ một lần, tùy theo kích thước ghi chú, khi lưu. Ghi chú dưới 200 byte được miễn phí.',
    'VaultMemo nói không có máy chủ, vậy tại sao lại dùng Firebase?', 'Firebase Remote Config chỉ được dùng để gửi cập nhật giá và thông báo trong ứng dụng, không dùng để lưu hay xử lý dữ liệu của bạn. Nội dung ghi chú, khóa ví và thông tin cá nhân của bạn không bao giờ được gửi đến Firebase hay bất kỳ máy chủ nào khác.',
    'Xem mã nguồn',
    'Liên hệ', 'Câu hỏi về VaultMemo, góp ý hoặc đề xuất hợp tác — hãy liên hệ bên dưới.',
    'Điều khoản sử dụng', 'Chính sách quyền riêng tư', 'Xác minh tệp', 'Ngôn ngữ'
  ];

  D.id = [
    'Brankas memo terenkripsi dengan bukti on-chain, untuk Solana Seeker & Saga',
    'Rahasia Anda tetap milik Anda. Bukti Anda hidup di Solana.',
    'Apa yang dilakukannya',
    'VaultMemo menyimpan seed phrase, kata sandi, dan catatan pribadi Anda hanya di perangkat, tidak pernah di server. Setiap kali Anda menyimpan, sidik jari catatan itu ditulis ke blockchain Solana, sehingga nanti Anda bisa membuktikan bahwa catatan itu pernah ada dan tidak diubah, tanpa pernah membuka isi catatannya.',
    'Enkripsi hanya lokal', 'Catatan dienkripsi dan disimpan di perangkat Anda. Tidak ada yang diunggah, tidak perlu akun.',
    'Bukti anti-manipulasi', 'Hash setiap catatan dicatat di mainnet Solana, sehingga siapa pun dapat memverifikasinya secara mandiri kemudian.',
    'Kunci turunan Seed Vault', 'Dompet Solana Anda menandatangani pesan tetap, dan tanda tangan itu dipakai untuk menurunkan kunci enkripsi. Tanpa PIN, tanpa biometrik.',
    'Bayar per simpan', 'Tanpa langganan. Pembayaran kecil sekali bayar membuka penyimpanan sesuai ukuran, dalam SKR, SOL, USDC, atau USDT.',
    'Cara kerja',
    'Seed Vault menandatangani', 'Dompet Anda menandatangani pesan tetap di perangkat. Kunci privat tidak pernah meninggalkan perangkat keras.',
    'Sebuah kunci diturunkan', 'Tanda tangan itu di-hash untuk membuat kunci enkripsi AES-256 yang hanya disimpan di memori.',
    'Sebuah bukti masuk on-chain', 'Sidik jari catatan terenkripsi dicatat di Solana sebagai bukti anti-manipulasi bahwa catatan itu ada.',
    'FAQ', 'Pertanyaan umum tentang cara VaultMemo menangani data Anda.',
    'Apakah isi memo saya terlihat di blockchain Solana?', 'Tidak. Memo Anda dienkripsi dan hanya disimpan di perangkat Anda. Hanya sidik jari hash acak, bukti bahwa catatan itu ada, yang dicatat on-chain, tidak pernah isinya.',
    'Apa yang terjadi jika saya lupa kata sandi?', 'Tidak ada kata sandi terpisah yang bisa dilupakan. Kunci enkripsi Anda dibuat seketika dari tanda tangan Seed Vault setiap kali, jadi selama seed phrase dompet Anda aman, Anda tidak akan pernah kehilangan akses ke kunci.',
    'Apa yang terjadi jika saya kehilangan seed phrase dompet?', 'Karena kunci enkripsi diturunkan dari tanda tangan dompet Anda, kehilangan seed phrase berarti kehilangan akses ke catatan terenkripsi secara permanen. Simpan seed phrase dan berkas cadangan .vam di tempat yang aman dan terpisah.',
    'Apakah catatan saya hilang jika saya menghapus dan memasang ulang aplikasi?', 'Tidak. Berkas .vam terenkripsi Anda disimpan di folder yang Anda pilih di perangkat (mis. Downloads/VaultMemo), bukan di dalam aplikasi. Setelah memasang ulang, hubungkan dompet yang sama dan semuanya masih ada.',
    'Bagaimana cara kerja verifikasi on-chain?', 'VaultMemo membandingkan hash berkas yang Anda simpan dengan catatan yang benar-benar tertulis di blockchain Solana. Jika satu byte saja berubah, atau berkasnya palsu, verifikasi gagal.',
    'Apa itu Sertifikat Enkripsi dan bagaimana menggunakannya?', 'Setelah memo diverifikasi, Anda bisa langsung membuat gambar sertifikat keamanan (PNG) di aplikasi. Isinya alamat dompet, ID transaksi on-chain, dan waktu penyimpanan, sehingga Anda bisa membagikannya seperti kartu nama, sebagai bukti bahwa catatan itu ada tanpa perubahan pada saat itu.',
    'Apa bedanya verifikasi RPC waktu nyata?', 'Mulai v1.3.4, VaultMemo membandingkan hash berkas yang Anda simpan langsung dengan catatan terkini di blockchain Solana (RPC). Jika satu byte saja diubah atau dimanipulasi, verifikasi langsung gagal, menjamin integritas data Anda.',
    'Apakah saya perlu membayar langganan bulanan?', 'Tidak. Sama sekali tidak ada langganan. Anda hanya membayar biaya kecil sekali bayar sesuai ukuran catatan saat menyimpannya. Catatan di bawah 200 byte gratis.',
    'VaultMemo bilang tidak punya server, lalu mengapa memakai Firebase?', 'Firebase Remote Config hanya dipakai untuk mengirim pembaruan harga dan pengumuman dalam aplikasi, bukan untuk menyimpan atau memproses data Anda. Isi memo, kunci dompet, dan informasi pribadi Anda tidak pernah dikirim ke Firebase atau server lain mana pun.',
    'Lihat kode sumber',
    'Hubungi kami', 'Pertanyaan tentang VaultMemo, masukan, atau ajakan kerja sama — hubungi kami di bawah.',
    'Ketentuan Penggunaan', 'Kebijakan Privasi', 'Verifikasi berkas', 'Bahasa'
  ];

  D.hi = [
    'Solana Seeker और Saga के लिए, ऑन-चेन प्रमाण वाली एन्क्रिप्टेड मेमो तिजोरी',
    'आपके राज़ आपके ही रहते हैं। आपका प्रमाण Solana पर रहता है।',
    'यह क्या करता है',
    'VaultMemo आपके सीड फ़्रेज़, पासवर्ड और निजी नोट्स केवल आपके डिवाइस पर रखता है, कभी किसी सर्वर पर नहीं। हर बार सेव करने पर उस नोट का फ़िंगरप्रिंट Solana ब्लॉकचेन पर लिखा जाता है, ताकि आप बाद में साबित कर सकें कि वह मौजूद था और बदला नहीं गया, नोट को कभी उजागर किए बिना।',
    'केवल लोकल एन्क्रिप्शन', 'नोट्स एन्क्रिप्ट होकर आपके डिवाइस पर ही रहते हैं। कुछ भी अपलोड नहीं होता, खाते की ज़रूरत नहीं।',
    'छेड़छाड़ पकड़ने वाला प्रमाण', 'हर नोट का हैश Solana मेननेट पर दर्ज होता है, ताकि कोई भी बाद में स्वतंत्र रूप से जाँच सके।',
    'Seed Vault से बनी कुंजी', 'आपका Solana वॉलेट एक तय संदेश पर हस्ताक्षर करता है, और उसी हस्ताक्षर से एन्क्रिप्शन कुंजी बनती है। न PIN, न बायोमेट्रिक्स।',
    'हर सेव पर भुगतान', 'कोई सब्सक्रिप्शन नहीं। आकार के अनुसार एक छोटा एकमुश्त भुगतान स्टोरेज खोलता है, SKR, SOL, USDC या USDT में।',
    'यह कैसे काम करता है',
    'Seed Vault हस्ताक्षर करता है', 'आपका वॉलेट डिवाइस पर ही एक तय संदेश पर हस्ताक्षर करता है। प्राइवेट कुंजी हार्डवेयर से बाहर कभी नहीं जाती।',
    'एक कुंजी बनती है', 'उस हस्ताक्षर का हैश बनाकर AES-256 एन्क्रिप्शन कुंजी बनाई जाती है, जो केवल मेमोरी में रहती है।',
    'एक प्रमाण ऑन-चेन जाता है', 'एन्क्रिप्टेड नोट का फ़िंगरप्रिंट Solana पर इस बात के छेड़छाड़-रोधी सबूत के रूप में दर्ज होता है कि वह मौजूद था।',
    'अक्सर पूछे जाने वाले प्रश्न', 'VaultMemo आपके डेटा को कैसे संभालता है, इस बारे में आम सवाल।',
    'क्या मेरे मेमो की सामग्री Solana ब्लॉकचेन पर दिखती है?', 'नहीं। आपका मेमो एन्क्रिप्ट होकर केवल आपके डिवाइस पर रहता है। ऑन-चेन पर केवल एक यादृच्छिक हैश फ़िंगरप्रिंट, यानी नोट के मौजूद होने का प्रमाण, दर्ज होता है, सामग्री कभी नहीं।',
    'अगर मैं पासवर्ड भूल जाऊँ तो क्या होगा?', 'भूलने के लिए कोई अलग पासवर्ड नहीं है। आपकी एन्क्रिप्शन कुंजी हर बार Seed Vault के हस्ताक्षर से तुरंत बनती है, इसलिए जब तक आपके वॉलेट का सीड फ़्रेज़ सुरक्षित है, आप अपनी कुंजी तक पहुँच कभी नहीं खोएँगे।',
    'अगर मैं अपने वॉलेट का सीड फ़्रेज़ खो दूँ तो क्या होगा?', 'क्योंकि आपकी एन्क्रिप्शन कुंजी आपके वॉलेट के हस्ताक्षर से बनती है, सीड फ़्रेज़ खोने का मतलब है एन्क्रिप्टेड नोट्स तक हमेशा के लिए पहुँच खो देना। अपना सीड फ़्रेज़ और .vam बैकअप फ़ाइलें अलग-अलग सुरक्षित जगहों पर रखें।',
    'क्या ऐप डिलीट करके दोबारा इंस्टॉल करने पर मेरे नोट्स गायब हो जाएँगे?', 'नहीं। आपकी एन्क्रिप्टेड .vam फ़ाइलें ऐप के अंदर नहीं, बल्कि डिवाइस पर आपके चुने फ़ोल्डर (जैसे Downloads/VaultMemo) में रहती हैं। दोबारा इंस्टॉल करने के बाद उसी वॉलेट से जुड़ें, सब कुछ वैसा ही मिलेगा।',
    'ऑन-चेन सत्यापन कैसे काम करता है?', 'VaultMemo आपकी सेव की गई फ़ाइल के हैश की तुलना Solana ब्लॉकचेन पर वास्तव में लिखे रिकॉर्ड से करता है। अगर एक बाइट भी बदली हो, या फ़ाइल नकली हो, तो सत्यापन विफल हो जाता है।',
    'एन्क्रिप्शन सर्टिफ़िकेट क्या है और इसे कैसे इस्तेमाल करें?', 'मेमो सत्यापित होने के बाद आप ऐप में ही तुरंत एक सुरक्षा सर्टिफ़िकेट इमेज (PNG) बना सकते हैं। इसमें आपका वॉलेट पता, ऑन-चेन ट्रांज़ैक्शन ID और सेव का समय होता है, जिसे आप विज़िटिंग कार्ड की तरह साझा कर सकते हैं, इस प्रमाण के रूप में कि उस समय नोट बिना बदलाव के मौजूद था।',
    'रियल-टाइम RPC सत्यापन में क्या अलग है?', 'v1.3.4 से VaultMemo आपकी सेव की गई फ़ाइल के हैश की सीधी तुलना Solana ब्लॉकचेन (RPC) के लाइव रिकॉर्ड से करता है। अगर एक बाइट भी बदली या छेड़छाड़ की गई हो, तो सत्यापन तुरंत विफल हो जाता है, जिससे आपके डेटा की अखंडता सुनिश्चित होती है।',
    'क्या मुझे मासिक सब्सक्रिप्शन देना होगा?', 'नहीं। कोई सब्सक्रिप्शन है ही नहीं। आप केवल नोट सेव करते समय उसके आकार के अनुसार एक छोटा एकमुश्त शुल्क देते हैं। 200 बाइट से छोटे नोट मुफ़्त हैं।',
    'VaultMemo कहता है कि उसके पास कोई सर्वर नहीं, तो वह Firebase क्यों इस्तेमाल करता है?', 'Firebase Remote Config का उपयोग केवल कीमतों के अपडेट और ऐप-भीतर घोषणाएँ भेजने के लिए होता है, आपका डेटा रखने या प्रोसेस करने के लिए नहीं। आपके मेमो की सामग्री, वॉलेट कुंजियाँ और निजी जानकारी कभी Firebase या किसी अन्य सर्वर को नहीं भेजी जातीं।',
    'सोर्स कोड देखें',
    'संपर्क करें', 'VaultMemo के बारे में प्रश्न, प्रतिक्रिया या साझेदारी के लिए नीचे संपर्क करें।',
    'उपयोग की शर्तें', 'गोपनीयता नीति', 'फ़ाइल सत्यापित करें', 'भाषा'
  ];

  var ORDER = ['en', 'ko', 'ja', 'zh', 'zh-TW', 'de', 'es', 'fr', 'it', 'pt', 'ru', 'tr', 'vi', 'id', 'hi'];
  var NAMES = { en: 'English', ko: '한국어', ja: '日本語', zh: '简体中文', 'zh-TW': '繁體中文', de: 'Deutsch', es: 'Español', fr: 'Français', it: 'Italiano', pt: 'Português', ru: 'Русский', tr: 'Türkçe', vi: 'Tiếng Việt', id: 'Bahasa Indonesia', hi: 'हिन्दी' };
  var FLAGS = { en: '🇺🇸', ko: '🇰🇷', ja: '🇯🇵', zh: '🇨🇳', 'zh-TW': '🇹🇼', de: '🇩🇪', es: '🇪🇸', fr: '🇫🇷', it: '🇮🇹', pt: '🇧🇷', ru: '🇷🇺', tr: '🇹🇷', vi: '🇻🇳', id: '🇮🇩', hi: '🇮🇳' };

  /** Pick a language from a list of browser language tags ("ko-KR", "zh-Hant-TW", ...) */
  function pick(tags) {
    for (var i = 0; i < (tags || []).length; i++) {
      var t = String(tags[i] || '').toLowerCase();
      if (/^zh/.test(t)) return /(tw|hk|mo|hant)/.test(t) ? 'zh-TW' : 'zh';
      var base = t.split('-')[0];
      if (base === 'in') base = 'id'; // legacy code
      if (D[base]) return base;
    }
    return 'en';
  }

  function table(code) {
    var arr = D[code] || D.en, o = {};
    for (var i = 0; i < KEYS.length; i++) o[KEYS[i]] = arr[i];
    return o;
  }

  return { KEYS: KEYS, D: D, ORDER: ORDER, NAMES: NAMES, FLAGS: FLAGS, pick: pick, table: table };
});
