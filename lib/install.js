'use strict';
const pkgjson = require('../package.json');
const log = require('./log').name(pkgjson.name);
const bin = require('.');
const chalk = require('chalk');

(async () => {
	try {
		await bin.run(['-v']);
		log.info(chalk.green('vale downloaded successfully'));
	} catch (error) {
		log.error(error);
		log.error(chalk.red('vale failed to download'));
	}
})();
