'use strict';

const defaultFormat = '%Y%m%d%H%M%S%L';

const objectAssign = require('object-assign');
let dt = require('strftime');

module.exports = function(opts = undefined) {
    opts = objectAssign({
        dateFormat: defaultFormat
    }, opts);

    return dt(opts.dateFormat, new Date());
};
