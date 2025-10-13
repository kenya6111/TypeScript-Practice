export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

const echo = <T>(arg: T): T => {
  // Tは型引数と呼ばれる
  return arg;
};

console.log(echo(2));
console.log(echo('aa'));
console.log(echo(true));
console.log(echo<number>(2));
console.log(echo<string>('aa'));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());

//クラスにジェネリクスを適用する
class Mirror2<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror2<string>('hello').echo());
console.log(new Mirror2<number>(123).echo());

// **ジェネリクス（generics）**は英語の generic = 「一般的な／特定しない」 から来ています。
// 語源は ラテン語 genus（種・種類）／ギリシャ語 genos（種族・類）で、「ある“種類”に属するけど、個別には特定しない」という意味合い。
// だから TypeScript の T みたいな型パラメータは、「まだ具体的な型を特定せず、“種類（family of types）”を一般化して扱う」ための記号、というわけです。
