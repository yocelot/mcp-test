#!/usr/bin/env node

import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serverPath = path.resolve(__dirname, '../src/server.js');

// Use pathToFileURL to ensure compatibility on Windows when using import()
import(pathToFileURL(serverPath).href);