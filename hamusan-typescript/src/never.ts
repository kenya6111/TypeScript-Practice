export {};

function error(message: string): never {
  throw new Error(message);
}

// this function will never returnというニュアンス
// 呼び元に戻ってこないというイメージでOK

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;

// let bar: never = undefined; //Type 'undefined' is not assignable to type 'never'.ts(2322)

let bar2: never = error('only me');
// neverには唯一,errorが代入できる
