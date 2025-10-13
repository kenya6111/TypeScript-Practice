export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name:${this.name}, age:${this.age}`;
  }
}

let taro = new Person('kenya', 25);
// let hananko = new Person();

console.log(taro);
console.log(taro.profile());
