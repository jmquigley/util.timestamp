'use strict';

import * as dt from 'strftime';

export interface ITimestampOpts {
	dateFormat: string;
}

const defaultFormat: string = '%Y%m%d%H%M%S%L';

export function timestamp(opts?: ITimestampOpts) {

	opts = Object.assign({
		dateFormat: defaultFormat
	}, opts);

	return dt(opts.dateFormat, new Date());
}
