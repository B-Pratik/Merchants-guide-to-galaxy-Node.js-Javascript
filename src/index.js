/*Load Required Modules and helper file*/
var fs = require('fs');
var readLine = require('readline');
var Helper = require('./helper.js');

/* ReadStream Interface to catch new line event */
var Reader = readLine.createInterface({
	input : fs.createReadStream('./input.txt'),
	terminal : false
});

/* Process each new line by the helper function */
Reader.on('line', function(line) {
	Helper.Merchant(line.trim());
});

/* Log Uncaught Exceptions */
process.on('uncaughtException', function(err) {
	console.log(err);
});