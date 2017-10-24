var fs = require('fs');

var foo = function(err, data) {
	if (err) {
		console.error("error 발생");
		console.error(err);
	} else {
		console.log(data);
	}
}
		
fs.readFile('test.txt', 'utf8', foo);
console.log("hahaha");
