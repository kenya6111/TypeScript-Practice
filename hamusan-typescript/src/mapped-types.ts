export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

type PropertyTypes = keyof Profile;

interface User {
  id: number;
  name: string;
  age: number;
  createdAt: Date;
}

// keyof == 「型が持つプロパティ名の“集合”（＝文字列リテラルのユニオン型）を取り出す演算子」**です。
type K = keyof User; // "id" | "name" | "age" | "createdAt"
let val: K = 'id';
val = 'name';
val = 'age';
val = 'createdAt';
// val = 'aaa';//Type '"aaa"' is not assignable to type 'keyof User'.ts(2322)

//型の in = 「ユニオンを回して“型を生成”するための記号」
type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Saturday' | 'yeahhhh';
type Schedule = { [D in Weekday]: string };
const type: Schedule = {
  Mon: 'test',
  Tue: 'おはよう',
  Wed: 'あああああああああああ',
  Saturday: 'えええ',
  yeahhhh: 'réれれれれれ',
};

// T[P] とは？
// インデックス型アクセス（lookup type）といって、
// 「型 T の キー P に対応するプロパティの型を取り出す」記法です。
interface User {
  id: number;
  name: string;
  admin: boolean;
}
type NameType = User['name']; // => string
type IdType = User['id']; // => number

// type test = string; は “別名（型エイリアス）” を作っているだけで、新しい独立した型は作っていません。
// なので test は string と完全に同じ型として扱われます。
type test = string;
let aaa: string;

type test2 = string;
let a: test2 = 'hello'; // OK（= string）
let b: string = a; // OK（相互代入できる）
let c: test2 = b; // OK

type Person = {
  name: string;
  age: number;
  height: number;
  weight: number;
};

type Person2 = string;
