export {};
// 静的メンバとは
//

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'kenya';
  static lastName: string = 'tanaka';

  static work() {
    return 'hey guys!!';
  }
  static work2() {
    return `hey guys!!${this.firstName}`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer); //Property 'isProgrammer' does not exist on type 'Me'. Did you mean to access the static member 'Me.isProgrammer' instead?ts(2576)

console.log(Me.isProgrammer);
console.log(Me.work());
console.log(Me.work2());
