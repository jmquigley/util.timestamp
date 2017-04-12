'use strict';

import test from 'ava';
import {timestamp} from './index';

test('Get current timestamp', t => {
		const dt = timestamp();
		t.is(typeof dt, 'string');
		t.is(dt.length, 17);
});
