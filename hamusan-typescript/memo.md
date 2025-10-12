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

上記のような開発環境用の ts のようなプロジェクト用のものを node-modules は以下のディレクトリを探索して実行してくれる超絶便利なコマンド

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
