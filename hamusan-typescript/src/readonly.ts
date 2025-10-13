export {};

class VisaCard {
  readonly owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }
}

let myVisaCard = new VisaCard('kenya');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'dasdsa';//Cannot assign to 'owner' because it is a read-only property.ts(2540)

class VisaCard2 {
  constructor(public readonly owner: string) {}
}

let myVisaCard2 = new VisaCard2('kenya');
console.log(myVisaCard2.owner);
// myVisaCard2.owner = 'dasdsa';//Cannot assign to 'owner' because it is a read-only property.ts(2540)

// readonlyは読めるのでつまりアクセスできるのでpublicになる。
// publicは書かなくてもいいのだが、tsを知らない人からするとreadonlyだけ書いてあるとpublicなのかこれ？？？となるので書いた方がいい
