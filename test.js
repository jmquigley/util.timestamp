'use strict';

const test = require('ava');
const timestamp = require('./index');

test('Get current timestamp', t => {
    let dt = timestamp();
    t.true(typeof dt === 'string');
    t.true(dt.length === 17);
});
