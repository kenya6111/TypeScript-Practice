export {};

class Mahoutsukai {}
class Souryo {}

class Taro extends Mahoutsukai {} // tsでは1つのクラスしか継承できない

// ただしinterfaceは複数を継承のようなことができる
// 継承というか継承のようなことができる。

interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('dokan');
  }
  kougeki(): void {
    console.log('dhukusi');
  }
}

const jiro = new Jiro();

jiro.ionazun();
jiro.kougeki();
