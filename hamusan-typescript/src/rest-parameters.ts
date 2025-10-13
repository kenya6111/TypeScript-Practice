export {};

const sum = (...values: number[]): void => {
  console.log(values);
};

sum(1, 2, 3, 4, 5);
// ざっくり言うと rest パラメーターの “rest” は「残り（the rest）」という英語から来てます。
// 関数に渡された引数のうち、“残り全部” をひとまとめの配列に集めるから “rest” です。

function f(a: number, ...rest: string[]) {
  console.log(a, rest);
}

f(99, 'a', 'b', 'c');
