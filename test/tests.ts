'use strict';

import * as assert from 'assert';
import {timestamp} from '../index';

describe('Testing timestamp', () => {
	it('Get current timestamp', () => {
		let dt = timestamp();
		assert(typeof dt === 'string');
		assert.equal(dt.length, 17);
	});
});
