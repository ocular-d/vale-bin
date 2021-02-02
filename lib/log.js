'use strict';

class Log {
	info(msg) {
		return this._log('info', msg);
	}

	warn(msg) {
		return this._log('warning', msg);
	}

	error(msg) {
		return this._log('err', msg);
	}

	name(name) {
		if (!name) {
			return this._name;
		}

		this._name = name;
		return this;
	}

	_log(level, msg) {
		console.log(`${this._name} <${level}> ${msg}`);
		return true;
	}
}

module.exports = new Log();
