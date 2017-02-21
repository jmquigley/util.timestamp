'use strict';

import {test} from 'ava';
import {timestamp} from './index';

test('Get current timestamp', t => {
	let dt = timestamp();
	t.true(typeof dt === 'string');
	t.true(dt.length === 17);
});
