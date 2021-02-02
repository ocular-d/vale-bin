'use strict';
const pkgjson = require('../package.json');
const log = require('./log').name(pkgjson.name);
const bin = require('.');

(async () => {
	try {
		await bin.run(['-v']);
		log.info('vale downloaded successfully');
	} catch (error) {
		log.error(error);
		log.error('vale failed to download');
	}
})();
