export {};

// 既存の型の別名をつけた
type Mojiretsu = string;

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'hello';

const example1 = {
  name: 'Ham',
  age: 43,
  fooMojiretsu: fooMojiretsu,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'kenya',
  age: 44,
};

// オブジェクトの実態からデータ型を抜き出せるのがtypeof
type Profile2 = typeof example1;
