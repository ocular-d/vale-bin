'use strict';
const path = require('path');
const pkgjson = require('../package.json');
const BinWrapper = require('./binwrapper');

const url = `https://github.com/errata-ai/vale/releases/download/v${pkgjson.valeVersion}/vale_${pkgjson.valeVersion}`;

module.exports = new BinWrapper()
	.src(`${url}_macOS_64-bit.tar.gz`, 'darwin', 'x64')
	.src(`${url}_macOS_arm64.tar.gz`, 'darwin', 'arm64')
	.src(`${url}_Linux_64-bit.tar.gz`, 'linux', 'x64')
	.src(`${url}_Windows_64-bit.zip`, 'win32', 'x64')
	.dest(path.resolve(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'vale.exe' : 'vale');
