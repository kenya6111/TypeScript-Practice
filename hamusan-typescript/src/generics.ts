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
