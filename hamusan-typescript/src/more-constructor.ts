export {};

// コンストラクタの初期化処理が鬱陶しい。そんな時はコンストラクタの引数にアクセス修飾子を書いてあげれば、
// 初期化処理を書かずとも初期化できる！
class Person {
  // public name: string;
  // protected age: number;

  constructor(public name: string, protected age: number) {
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person('kenya', 25);
console.log(me);
