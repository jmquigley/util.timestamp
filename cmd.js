/**
 * Commands that can be used by the package.json script to wrap more complex
 * operations.  Generally this would be called using:
 *
 *     node cmd.js {option}
 *
 * The single options would include:
 *
 * - postinstall
 * - testing
 * - reporting
 *
 */

'use strict';

const ps = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const home = require('expand-home-dir');
const rstrip = require('util.rstrip');

let argv = require('yargs')
    .usage('Usage: $0 <command>')
	.command('postinstall', 'Executed during the NPM post install')
	.command('testing', 'Start the testing process for the module')
	.command('reporting', 'Creates coverage reports after testing')
	.help()
	.argv;

let tmp = home(path.join('~/', '.tmp', '.nyc_output'));

let bin = './node_modules/.bin';
if (!fs.existsSync(tmp)) {
	fs.mkdirsSync(tmp);
}

function call(cmd) {
	console.log(cmd);
	let out = ps.exec(cmd);

	out.stdout.on('data', data => {
		console.log(rstrip(data));
		return out;
	});

	out.stderr.on('data', data => {
		console.log(rstrip(data));
	});

	out.on('close', code => {
		console.log(`exit: ${code}`);
	});
}

if (argv.testing) {
	call([
		`${bin}/xo`,
		'&&',
		`${bin}/nyc`,
		`--temp-directory=${tmp}`,
		`${bin}/ava`,
		'--verbose'
	].join(' '));
}

if (argv.reporting) {
	call([
		`${bin}/nyc`,
		'report',
		`--temp-directory=${tmp}`,
		'--reporter=html'
	].join(' '));
}

if (argv.postinstall) {
	let directories = [
		'./coverage',
		'./.nyc_output'
	];

	directories.forEach(function(directory) {
		fs.mkdirsSync(directory);
		if (process.platform !== 'win32') {
			ps.execSync(`chmod 777 ${directory}`);
		}
	});
}
