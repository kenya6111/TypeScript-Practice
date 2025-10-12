console.log("こんにちは");

let aa11: number = 10;

let name11: string = "kenya";
let isActive11: boolean = true;

let anyValue: any = 100;

let fruits: string[] = ["りんご", "りんご", "りんご", "りんご"];
fruits.forEach((fruit) => fruit.length);
let fruitsInt: number[] = [1, 2, 3, 4, 45];

// 関数の宣言
const add = (a: number, b: number): number => {
  return a + b;
};

const outputString = (str: string): void => {
  console.log(str);
};

// オジェクトの宣言
let user: { name: string; age: number; sayHello: () => void } = {
  name: "kenya",
  age: 1,
  sayHello: () => {
    console.log(1111);
  },
};

//型エイリアス
type User = { name: string; age: number; sayHello: () => void };
let userUseAreus: User = {
  name: "kenya",
  age: 1,
  sayHello: () => {
    console.log(1111);
  },
};

//

const methodA = (val: string | number) => {
  console.log(val);
};

let numLiteral: 10 | 20 = 10;
let numLiteral2: "aaa" | "bbb" = "aaa";

type Base = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

type Product = {
  name: string;
  price: number;
};

let product1: Base & Product = {
  id: 1,
  name: "bousi",
  price: 1000,
  createdAt: new Date(),
  updatedAt: new Date(),
};

type Meeting = {
  startAt: Date;
  kind: "office" | "tel" | "web";
  url?: string | null;
};

const meeting: Meeting = {
  startAt: new Date(),
  kind: "web",
};
const meeting2: Meeting = {
  startAt: new Date(),
  kind: "web",
  url: undefined,
};
const meeting3: Meeting = {
  startAt: new Date(),
  kind: "web",
  url: null,
};

// console.log(meeting2.url.length);
// if (meeting2.url !== null && meeting2.url !== undefined) {
//   console.log(meeting2.url.length);
// }

console.log(meeting2.url?.length);

const element = document.getElementById("email") as HTMLInputElement;
console.log(element.value);

const remainString = (val: string): string => {
  return val;
};
const remainNUmber = (val: number): number => {
  return val;
};
const remainValue = <T>(val: T): T => {
  return val;
};

remainValue("aaa");
remainValue<string>("aaa");
remainValue(111);
remainValue<number>(111);

type OneDayMeals = {
  morning: string;
  lunch: string;
  dinner: string;
};

const meals: OneDayMeals = {
  morning: "フレンチトースト",
  lunch: "焼きそば",
  dinner: "とんかつ定食",
};

const outputValueLength = (key: "morning" | "lunch" | "dinner") => {
  console.log(meals[key].length);
};
const outputValueLength2 = (key: keyof OneDayMeals) => {
  console.log(meals[key].length);
};

let list: string[] = ["aa", "aa", "aa"];

type OBJ = {
  nickname: string;
  fullName?: string;
  age: number;
  gender: "male" | "female";
  sayHello: () => void;
};

const obj: OBJ = {
  nickname: "kenya",
  fullName: "aaa",
  age: 222,
  gender: "male",
  sayHello: () => {
    console.log("こんにちは");
  },
};
console.log(obj.fullName?.length);

type Base2 = {
  id: number;
};

type Product2 = {
  name: string;
};

const OBJ2: Base2 & Product2 = {
  id: 11,
  name: "string!!",
};
