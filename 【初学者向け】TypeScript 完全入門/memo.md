### 動的型付け言語

変数宣言時に型を宣言せずに値を格納し実行時に値が決定される
また別のデータ型の値を再度代入できる
なので、大規模プロジェクトとかだと変数に何が格納されているのか、その変数が書き換わる場合がある、
そういった場合、型の違いで型の違いで思わぬエラーが発生するし、そのエラーは実行時にしかわからないのが動的型付け。

### 静的型付け言語

実行前にデータ型を宣言し決定される
データ型が一目でわかるし、違う型の値を代入しようとするとエディターで(赤波線とかで)実行前の時点でエラーが出る
なので、型の違いで思わぬエラーは発生しなくなり保守性の高い言語になる
つまり typescript は javascritp をを静的型付け言語として書けるようにした拡張言語です。
typescript 実行時は typescript を js に変換して（コンパイルして）実行する

### tsc hoge.ts

ちなみに tsc だけ打つと全てのｔｓがコンパイルされる

### tsc --init

tsconfig.json ができる

### tsconfig.json の中身

- rootDir "./src"

  - typescript のあるファイルを指し示す。基本的に src のようなディレクトリを作ってそこでまとめて管理する。src 外の ts ファイルを src 内の ts ファイルで呼び出そうとしたときにエラーとなる

- outDir:"./dist"
  - コンパイルした js ファイルを格納するディレクトリ。dist のようなディレクトリにして管理するのが一般的

### any は ts の型定義を無視する行為なので ts の恩恵を受けられないので極力使用しない

### typescript では型に名前をつけられる。型エイリアスという

これのメリットは、同じオブジェクトを作る際に繰り返し同じ方を宣言する必要がなくなる
また、型宣言を別のファイルに切り出すことができる

### 型エイリアス

「エイリアス（alias）」の語源はラテン語の alias（「別名で／他のときには」＝“otherwise, at another time/otherwise named”）です。英語でも「a.k.a.（also known as）」みたいに“別名”の意味で使われます。
データ型に別名をつける

```ts
let user: { name: string; age: number; sayHello: () => void } = {
  name: "kenya",
  age: 1,
  sayHello: () => {
    console.log(1111);
  },
};

//型エイリアス
// ↑で宣言したデータ型 : { name: string; age: number; sayHello: () => void }を「User」として別名で宣言したもの。使いやすい。
type User = { name: string; age: number; sayHello: () => void };
let userUseAreus: User = {
  name: "kenya",
  age: 1,
  sayHello: () => {
    console.log(1111);
  },
};
```

### ユニオン型

データ型を「または」で複数あり得るようにするやつ

```ts
const methodA = (val: string | number) => {
  console.log(val);
};
```

語源：英語 union はラテン語 ūniō/ūnion-（「一つにすること」「結合」）← ūnus（“1”＝一）に由来。
フランス語経由で「結合・連合・統一」の意味になりました。
一般的な意味：別々のものを一つにまとめること。数学では集合の和集合（A∪B）。

### リテラル型

特定の「値」のみに制限する書き方

```ts
let numLiteral: 10 | 20 = 10;
let numLiteral2: "aaa" | "bbb" = "aaa";
```

### インターセクション型

- ラテン語 inter（「～の間」）＋ secare（「切る」）→ intersect（「交差する／切り合う」）
  名詞 intersection は「交差・交点・共通部分」の意。数学だと集合の積集合（A∩B）。
- プログラミングの「インターセクション型」
  「A かつ B を同時に満たす型」＝両方の性質を持つもの。

TypeScript：type T = A & B;
二つの型エイリアスを結合したオブジェクトを生成できる

```ts
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
```

### オプショナルプロパティ

「そのプロパティは存在してもいいし、なくてもいい」。必須（required/mandatory）の反対。

TypeScript: interface User { name: string; age?: number }

optional：ラテン語 optāre（「望む・選ぶ」）→ optio（選択）→ 英語 option/optional（「任意の／選択制の」）。
property：ラテン語 proprietās（「所有・特性」）→ 英語 property（「性質／プロパティ」「所有物」）。

```ts
type Meeting = {
  startAt: Date;
  kind: "office" | "tel" | "web";
  url?: string;
};

const meeting: Meeting = {
  startAt: new Date(),
  kind: "web",
};
```

オプショナルプロパティには undefined を設定できるが

```ts
const meeting2: Meeting = {
  startAt: new Date(),
  kind: "web",
  url: undefined,
};
```

null は設定できない。エディタエラーが起きる

```ts
const meeting3: Meeting = {
  startAt: new Date(),
  kind: "web",
  url: null, //Type 'null' is not assignable to type 'string | undefined'.ts(2322)
};
```

なのでエイリアスのプロパティに null の型を書いてあげればエラー解消

```ts
type Meeting = {
  startAt: Date;
  kind: "office" | "tel" | "web";
  url?: string | null; //
};

const meeting3: Meeting = {
  startAt: new Date(),
  kind: "web",
  url: null,
};
```

### オプショナルチェーン

null や undefined のあり得る値に対してメソッドを呼ぼうとすると、そもそも url が定義されていない可能性があるのでエラーが起こる

```ts
console.log(meeting2.url.length); //'meeting2.url' is possibly 'null' or 'undefined'.ts(18049)
//          ~~~~~~~~~~~~
```

そのため、url が null 出ない、かつ undefined でない場合に、問いチェックを入れる必要がある

```ts
if (meeting2.url !== null && meeting2.url !== undefined) {
  console.log(meeting2.url.length);
}
```

上記の記述をオプショナルチェーンをつけて簡略化できる
オプショナルチェーンはその値が存在しない可能性がある場合にクエスチョンをつけてメソッドを呼び出すことでエラーを出さず undefined を返却できる

以下のように存在しない可能性がある対象の後にクエスチョンをつける

```ts
console.log(meeting2.url?.length);
```

### 型アサーション

getElementById のメソッドは、html の要素を取得するメソッドで、その要素が div か input か、はたまた a タグか、何の要素なのか実行するまで型を判定することができない。
その場合に型推論をうわがくことができる。これを型アサーションという。

```ts
const element = document.getElementById("email") as HTMLInputElement; //const element: HTMLInputElement

console.log(element.value);
```

HTMLInputElement はインプットタグの型
上記のように HTMLInputElement をアサーションすることで、value は input タグが持つプロパティなのでエラーになく呼び出せる。

```ts
const element = document.getElementById("email"); //const element: HTMLElement | null
console.log(element.value); // Property 'value' does not exist on type 'HTMLElement'.ts(2339)
```

### ジェネリクス

抽象的な型引数を使用して実際に利用されるまで型が確定しない関数などを実現するために使用されます。

```ts
const remainString = (val: string): string => {
  return val;
};
const remainNUmber = (val: number): number => {
  return val;
};
const remainValue = <T>(val: T): T => {
  // メソッドの引数の前に<T>をかく。引数はTにする
  return val;
};
// 別にTじゃなくてもいいのだが、慣習的にTが好まれる
const remainValue = <Sample>(val: Sample): Sample => {
  return val;
};

remainValue("aaa");
remainValue<string>("aaa"); // ジェネリクスメソッドを呼ぶときは引数の前に<データ型>を書く
remainValue(111);
remainValue<number>(111);
```

## keyof

オブジェクトの型から、プロパティ名を型として返却する型演算子です。
OnedayMeals のプロパティのリテラル型を全部取れる

```ts
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
```
