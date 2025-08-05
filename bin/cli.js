#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// npxが実行するカレントディレクトリにログファイルを作成してみる
const logPath = path.resolve(process.cwd(), 'bin-debug.log');

try {
  fs.writeFileSync(logPath, `[${new Date().toISOString()}] bin/cli.js executed successfully.\n`);
} catch (e) {
  // もし書き込みに失敗した場合、エラーを別のファイルに書き出す試み
  try {
    fs.writeFileSync(path.resolve(process.cwd(), 'bin-error.log'), e.toString());
  } catch (err) {
    // これも失敗する場合、どうしようもない
  }
}

// src/server.jsのインポートは一時的に無効化
// import { URL } from 'url';
// const serverUrl = new URL('../src/server.js', import.meta.url);
// import(serverUrl.href);