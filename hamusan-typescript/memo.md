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

```bash
npm install --save-dev typescript@4.9.3
```

以下の ryo さんの hc の ts 課題では以下でインストールしてる
以下は TypeScript のコンパイラとツールを PC 全体にインストールし、どのプロジェクトでも tsc が叩けるようにする」

```bash
sudo npm i -g typescript
```
