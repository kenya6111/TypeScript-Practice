export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'i can run';
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    const ms = super.run(); // 親クラスのrunメソっドを呼ぶようにする

    console.log('------');
    console.log({ ms });
    return 'i can run 80km';
  }
}
let animal = new Animal('animal');
console.log(animal.run());

let lion = new Lion('lion', 123);
console.log(lion.run());
