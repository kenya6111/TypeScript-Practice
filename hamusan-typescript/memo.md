### nodejs

ノード js とはですね。
JAVASCRIPT の実行環境のことです

### LTS

log term support
特別な理由がない限り LTS を使う。推奨。
recommend for all users

### package.json

パッケージの管理をやってくれる

### package.json の作成

npm init コマンドで作成できる
npm init -y

### typescript のインストール

この Udemy では以下でインストールしている。
プロジェクト内（ローカル）に TypeScript の“バージョン 4.9.3”を開発用依存として入れるコマンドです。
メリットは、チームで同じ TS バージョン（4.9.3）を使うために、プロジェクトにローカル導入してロックする」ためのコマンド。
この開発リポジトリ配下にのみインストールするって意味

```bash
npm install --save-dev typescript@4.9.3
```

以下の ryo さんの hc の ts 課題では以下でインストールしてる
以下は TypeScript のコンパイラとツールを PC 全体にインストールし、どのプロジェクトでも tsc が叩けるようにする」

```bash
sudo npm i -g typescript
```

### tsc コマンド

c はコンパイルという意味

上記でグローバルにインストールした typescript は以下に bin がある

```bash
sudo npm i -g typescript
```

```bash
where tsc
/usr/local/bin/tsc
```

<br/>

開発環境用にインストールした typescript は node-modules ディレクトリに bin がある

```bash
npm install --save-dev typescript@4.9.3
```

```bash
k_tanaka@Mac hamusan-typescript % ls node_modules/.bin/tsc
node_modules/.bin/tsc
```

よって開発環境用の ts を使って tsc コマンド実行するときは以下のようになる

```bash
k_tanaka@Mac hamusan-typescript % ./node_modules/.bin/tsc src/install-typescript.ts
```

<br/>

### npx コマンド

上記のような開発環境用の ts のようなプロジェクト用のものを node-modules 配下のディレクトリを探索して実行してくれる超絶便利なコマンド

```bash
k_tanaka@Mac hamusan-typescript % npx tsc src/install-typescript.ts
```

めっちゃスタイリッシュに！！

### js ファイルの実行

node hoge.js 　で js を実行できる

```bash
k_tanaka@Mac hamusan-typescript % node src/install-typescript.js
{ message: 'hello typescript' }
```

### ts-node

より高速に typescript のコードを実行できるスゴスゴコマンド

tsc コマンドで ts をコンパイルして、コンパイルして生成した js を node で実行するまで
という一連の作業をコマンド一発で実行できるヤバイコマンド。

```bash
k_tanaka@Mac hamusan-typescript % npx ts-node src/install-typescript.ts
{ message: 'hello typescript' }
```

ちなみにすでに global と開発環境の両方にインストール済みだったので以下でもいける

```bash
k_tanaka@Mac hamusan-typescript % ts-node src/install-typescript.ts
{ message: 'hello typescript' }
k_tanaka@Mac hamusan-typescript % where ts-node
/usr/local/bin/ts-node
```

### ts-node-dev

ここまでで結構便利にはなったが、まだ不便。なぜなら ts ファイルを変更するたびに毎回毎回、ts-node コマンド打って実行！ってしなきゃいけない。面倒すぎ。

というわけで ts-node-dev の出番。これは ts ファイルが修正されるたびに毎回毎回コンパイルと実行をやってくれる

```bash
k_tanaka@Mac hamusan-typescript % npx ts-node-dev --respawn src/install-typescript.ts
[INFO] 22:31:29 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 4.9.3)
{ message: 'hello ts-node!' }
[INFO] 22:31:36 Restarting: /Users/k_tanaka/Repository/TypeScript-Practice/hamusan-typescript/src/install-typescript.ts has been modified
{ message: 'hello ts-node!!' }
[INFO] 22:31:38 Restarting: /Users/k_tanaka/Repository/TypeScript-Practice/hamusan-typescript/src/install-typescript.ts has been modified
{ message: 'hello ts-node!!' }
```

### package.json にタスクの登録

- 毎回 npx run dev src/install-typescript.ts ~~って打つのだるいので
  package.json にタスクとして特定のコマンドをまとめたやつをエイリアス的な感じで設定できる

今回は "dev":"ts-node-dev --respawn"で登録した。

今後は npm run dev hoge.ts で Air のような修正後即実行の環境が手に入った。

```json
{
  "name": "hamusan-typescript",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "ts-node-dev --respawn",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "ts-node": "^10.9.2",
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.9.3"
  }
}
```

```bash
k_tanaka@Mac hamusan-typescript % npm run dev src/install-typescript.ts

> hamusan-typescript@1.0.0 dev
> ts-node-dev --respawn src/install-typescript.ts

[INFO] 22:40:07 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 4.9.3)
{ message: 'hello ts-node!!' }
[INFO] 22:40:15 Restarting: /Users/k_tanaka/Repository/TypeScript-Practice/hamusan-typescript/src/install-typescript.ts has been modified
{ message: 'hello ts-node!!!!' }
```

### tsconfig.json

以下のコマンドで生成できる

```bash
npx tsc --init
```

### boolean 型

「:データ型」の部分を型注釈とか、型アノテーションとか、アノテーションとか呼ぶ
この変数はこのような型で使うからよろしくね！と呼びかけているってことでアノテーションという。
annotation はラテン語 annotāre（メモを書く）の系統で、
「本体に付ける説明メモ」 という意味。
プログラミングでは「コード要素に付ける補足情報（メタデータ）」を指し、
型注釈は「この変数/式はこういう型だよ」という説明メモです

TypeScript や Haskell/ML 系のように型推論がある言語では、型は多くの場合書かなくても推論されます。
そこに明示で型を書き添えるので「宣言（必須）」というより**注釈（オプションのメモ）**のニュアンス。
さらに TS では型は実行時に消える（型消去）ので、振る舞いを変える命令ではなく静的解析のための情報＝「注釈」

```ts
let isFinished: boolean = true;
```

### Cannot redeclare block-scoped variable 'name'.ts(2451)

以下の ts ファイルをコンパイルすると、name 変数部分で出るエラー。

```ts
//export {};

let name = 'TypeScript';

let isFinished: boolean = true;
console.log({ isFinished });
```

しっかりわかってないけど、とりあえずそのファイルに export{}と書いておくと、モジュールとしてそのファイルが認識され、そのファイル内の変数はグローバル空間に宣言されないらしい。個別のロッカーに宣言されるイメージ。export がないと公のば（グローバル）に宣言され、再度コンパイル時にすでに宣言してるって怒られる？？みたいな感じらしい。よくわからん。

### tuple

要素の型が明確にわかっている型

普通に以下で宣言すると、let profile: (string | number)[]の方で宣言される

```ts
let profile = ['ham', 43]; //let profile: (string | number)[]
profile = [111, 'ham'];
```

以下も同じユニオン型。またはのやつ。

```ts
let uniontest: string | number = 'ssss';
uniontest = 1000;

console.log(uniontest);
```

でもこれは上記に書いた通りデータに順序は制限しないものになる。

タプルはこれに順序を課したものになる。
以下のように書く

```ts
let profile2: [string, number] = ['aaa', 22];
```

### any 型

### 型安全

型を導入するいちばんのメリットが型安全
