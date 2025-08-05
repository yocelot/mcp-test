#!/usr/bin/env node

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// src/server.jsをインポートして実行
import(path.resolve(__dirname, '../src/server.js'));
