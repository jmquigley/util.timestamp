'use strict';

const objectAssign = require('object-assign');
let dt = require('strftime');

module.exports = function(opts = undefined) {
    opts = objectAssign({
        dateFormat: '%Y%m%d%H%M%S%L'
    }, opts);

    return dt(opts.dateFormat, new Date());
};
