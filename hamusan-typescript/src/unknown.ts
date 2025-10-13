export {};
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// let sumUnknown = numberUnknown + 10; //'numberUnknown' is of type 'unknown'.ts(18046)
// このデータは数値型じゃないかもしれない。だからこの演算をするのはちょっと乱防雨じゃないですか？？ってニュアンス

// console.log(typeof numberUnknown); // number が出る。

// 以下のように書くとコンパイルエラーが消える
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

// 型ガード！
// unknown は「中身なんでもあり」だからそのまま計算は危険。
// でも typeof ... === 'number' という型ガードで number に確定→演算OKになる、という流れ。
