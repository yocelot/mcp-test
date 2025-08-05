#!/usr/bin/env node

import { URL } from 'url';

// import.meta.url is the entry point, e.g., file:///.../bin/cli.js
const serverUrl = new URL('../src/server.js', import.meta.url);

import(serverUrl.href);
