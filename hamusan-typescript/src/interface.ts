export {};

type ObjectType = {
  name: string;
  age: number;
};

// interfaceは値じゃないので「＝」は不要
interface ObjectInterface {
  name: string;
  age: number;
}
let object: ObjectType = {
  name: 'kenya',
  age: 43,
};

// interfaceでも、オブジェクトに型をつけることができる
let object2: ObjectInterface = {
  name: 'kenya',
  age: 43,
};
