var fs = require('fs');

fs.readFile('hello.txt', 'utf8', function(err, data) {
	if (err) {
		console.log("에러");
		console.log(err);
	} else {
		console.log(data);
	}
});

console.log("program ended");
