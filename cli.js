#!/usr/bin/env node
'use strict';
const {spawn} = require('child_process');
const vale = require('.');

const input = process.argv.slice(2);

spawn(vale, input, {stdio: 'inherit'})
	.on('exit', process.exit);
