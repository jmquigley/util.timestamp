'use strict';

import * as dt from 'strftime';
import * as objectAssign from 'object-assign';

export interface ITimestampOpts {
	dateFormat: string;
}

const defaultFormat: string = '%Y%m%d%H%M%S%L';

export function timestamp(opts?: ITimestampOpts) {
	opts = objectAssign({
		dateFormat: defaultFormat
	}, opts);

	return dt(opts.dateFormat, new Date());
}
