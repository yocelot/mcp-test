あなたはMCP（Model Context Protocol）対応のサーバを作成するエキスパートエンジニアです。
次の要件を満たすMCPサーバを作成してください。

# サーバ仕様
- 言語: Node.js（TypeScriptまたはJavaScript、ESM対応）
- プロトコル: Model Context Protocol v0.1 準拠
- MCPクライアント（例: Gemini-CLI, ClaudeCode）から利用可能
- 標準入力/出力（stdio）を使った通信に対応
- サーバ起動時にMCP handshake処理を行い、機能一覧を返す
- 以下のツール（tools）を提供する:
  1. `example_tool`  
     - 入力: `query`（文字列）
     - 処理: 入力テキストを大文字に変換して返す
  2. `system_info`  
     - 入力なし
     - 処理: 実行環境のOS・CPU情報を返す

# GitHubから直接 `npx` 実行できる仕様
- `package.json` に `"bin"` フィールドを設定して、`npx github:<ユーザー>/<リポジトリ>` で起動可能にする
- 実行エントリーポイントは `bin/cli.js` に配置し、`#!/usr/bin/env node` を付与
- `bin/cli.js` から `src/server.js` を呼び出す構成
- `chmod +x bin/cli.js` が必要な旨をREADMEに記載
- `npx github:<ユーザー>/<リポジトリ>` 実行例をREADMEに含める
- npm公開は不要（GitHubから直接npx実行）

# 実装要件
- MCPサーバ起動コマンドの例を含める
- `manifest.json` の例も作成
- コードは1つのファイルに完結させる場合と、`bin/` + `src/` に分ける場合の両方の例を提示
- README.mdに、セットアップ方法とテスト方法、npx実行方法を記載

# 出力形式
1. ディレクトリ構成例
2. manifest.json
3. package.json
4. bin/cli.js
5. src/server.js（MCPサーバ本体）
6. README.md

可能であれば、クライアントからのサンプル呼び出し例も記載してください。

