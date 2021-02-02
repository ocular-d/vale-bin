'use strict';

const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const util = require('util');

const download = require('download');

module.exports = class BinWrapper {
	constructor() {
		this._sources = [];
		this._destination = null;
		this._binary = null;
	}

	src(url, os, archType) {
		if (arguments.length === 0) {
			return this._sources;
		}

		this._sources.push({
			arch: archType,
			platform: os,
			src: url
		});

		return this;
	}

	dest(dest) {
		if (!dest) {
			return this._destination;
		}

		this._destination = dest;
		return this;
	}

	use(bin) {
		if (!bin) {
			return this._binary;
		}

		this._binary = bin;
		return this;
	}

	path() {
		return path.join(this.dest(), this.use());
	}

	async run(args = []) {
		const execFile = util.promisify(cp.execFile);

		await this.resolve();
		await execFile(this.path(), args);
	}

	async resolve() {
		const source = this.matchSource(process.platform, process.arch);

		if (!source) {
			throw new Error(`Failed to find source that matches ${process.platform} ${process.arch}`);
		}

		if (!await this.hasBinary()) {
			await this.download(source.src);
		}
	}

	async hasBinary() {
		const access = util.promisify(fs.access);

		try {
			await access(this.path(), fs.constants.F_OK | fs.constants.R_OK | fs.constants.X_OK);
			return true;
		} catch (error) {
			if (error.code === 'ENOENT') {
				return false;
			}

			throw error;
		}
	}

	async download(url) {
		const chmod = util.promisify(fs.chmod);
		const dlopts = {
			extract: true
		};

		await download(url, this.dest(), dlopts);
		await chmod(this.path(), 0o755);
	}

	matchSource(platform, arch) {
		let i = 0;
		const len = this._sources.length;
		let source;

		for (i = 0; i < len; ++i) {
			source = this._sources[i];
			if (source.platform === platform && source.arch === arch) {
				return source;
			}
		}

		return null;
	}
};
