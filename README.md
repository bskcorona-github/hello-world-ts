# Hello World TypeScript

シンプルなHello Worldを出力するTypeScriptプロジェクトです。

## セットアップ

```bash
npm install
```

## 使い方

### 開発モード（ts-nodeを使用）

```bash
npm run dev
```

### ビルドして実行

```bash
npm run build
npm start
```

### 名前を指定してあいさつ

```bash
npm run dev -- "あなたの名前"
```

## 機能

- 基本的なHello Worldメッセージの表示
- 現在時刻の表示
- コマンドライン引数で名前を指定可能
- TypeScriptの型安全性を活用

## スクリプト

- `npm run build`: TypeScriptをJavaScriptにコンパイル
- `npm start`: コンパイル済みのJavaScriptを実行
- `npm run dev`: ts-nodeを使用して直接TypeScriptを実行
- `npm run clean`: distディレクトリを削除