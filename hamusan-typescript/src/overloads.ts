export {};

function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  if (typeof value === 'number') return value * 2;
  return value + value;
}

// function double(value: string): string {
//   return value + value;
// }

console.log(double(2));
console.log(double('go'));

// ざっくり言うと、**シグネチャー（signature）＝関数やメソッドの「型の名刺」**です。
// 「名前・受け取る引数の型と数・返す型」の組み合わせを指します。

// // あなたの例だと、上2行がオーバーロードのシグネチャー：
// オーバーロードのシグネチャーは「こう呼べますよ」という宣言。
// 呼び出し側の型チェックはここを見ます。

// 実装シグネチャーは 1つだけ。外からは見えません（呼び出しの候補にならない）。

// 実装は、宣言したオーバーロードすべてを正しく処理できなければいけません（中で型ガードを書くのが定石）。
