export {};

// exportでそのと空間からアクセスできるようにできる
namespace Japanese {
  export namespace Tokyo {
    export class TokyoPerson {
      constructor(public name: string) {}
    }
  }
  export class Person {
    constructor(public name: string) {}
  }
}
namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Person('kenya');
console.log(me.name);

const michael = new English.Person('michael', 'joseph', 'jackson');
console.log(michael.firstName);

const me2 = new Japanese.Tokyo.TokyoPerson('tkperson');
console.log(me2.name);
