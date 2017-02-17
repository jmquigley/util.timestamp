# util.timestamp [![Build Status](https://travis-ci.org/jmquigley/util.timestamp.svg?branch=master)](https://travis-ci.org/jmquigley/util.timestamp) [![NPM](https://img.shields.io/npm/v/util.timestamp.svg)](https://www.npmjs.com/package/util.timestamp) [![Coverage Status](https://coveralls.io/repos/github/jmquigley/util.timestamp/badge.svg?branch=master)](https://coveralls.io/github/jmquigley/util.timestamp?branch=master)

> Generates a string timestamp

This module is a thin wrapper on the [strftime](https://github.com/samsonjs/strftime) module to create a simple string timestamp with a consistent format.  It uses the format rule:

    %Y%m%d%H%M%S%L
    
This results in a 17 byte string representing the current timestamp.  e.g.

    20170126075705148

## Installation

To install as a global package:
```
$ npm install --global util.timestamp
```

To install as a development dependency with cli:
```
$ npm install --save-dev util.timestamp
```

## Usage

There are two ways to use this package:

- Command line
- Function call

#### Command line

The timestamp can be generated from the command line using:

    timestamp
    
This will return the default format above.  This could be used in scripting.

#### Function call

The default JavaScript call will just return the timestamp format above as a string:

    const timestamp = require('util.timestamp');
    console.log(timestamp());
    
The function also has an option to set a format that is acceptable to the [strftime](https://github.com/samsonjs/strftime) library:

    const timestamp = require('util.timestamp');
    console.log(timestamp({
        dateFormat: '%B %d, %Y %H:%M:%S'
    }));

    // returns the string: 'April 28, 2011 18:21:08'
