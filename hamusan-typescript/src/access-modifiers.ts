export {};

class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name:${this.name}, age:${this.age}, antionality ${this.nationality}`;
  }
}

let taro = new Person('kenya', 25, 'japan');
// let hananko = new Person();

// console.log(taro);
console.log(taro.name);
// console.log(taro.age);//Property 'age' is private and only accessible within class 'Person'.ts(2341)

console.log(taro.profile());

// 基本的にｐublicは書かない。規制したいプロパティに対してのみprivateとかを付与する感じ。

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality); // 親のコンストラクタを呼ぶ
  }

  profile(): string {
    // ageはprivateなのでPersonクラスの中だけでアクセスできる。サブクラスでもアクセスはできない。
    // 一方protectedのnationalityはprotectedなのでこのサブクラスからアクセスできる
    // return `name:${this.name}, age:${this.age}, antionality ${this.nationality}`; //Property 'age' is private and only accessible within class 'Person'.ts(2341)
    return `name:${this.name}, antionality ${this.nationality}`; //Property 'age' is private and only accessible within class 'Person'.ts(2341)
  }
}
