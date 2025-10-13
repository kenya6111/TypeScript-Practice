export {};
let name: any = 'kenya';

let length = name.length as number;

// length = 'qaaa';

let length2 = <number>name.length;
//型アサーション（type assertion）とは？
// **「コンパイラに “これはこの型として扱ってOK” と伝える注釈」**です。
// 実行時の値は一切変わらない＝型チェックだけに影響します。

// *アサーション（assertion）**の語源は 英語 assertion（主張・断言） ← ラテン語 assertio／asserere（「自分のものとして主張する・断言する」）です。
// asserere は ad-（〜へ）＋ serere（結びつける）が語源で、「自分に結びつけて主張する」ニュアンス。

// <>とasを使う２通りがある。
// <>は非推奨。使うならas。
