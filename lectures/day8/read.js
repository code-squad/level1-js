var filename = 'hello.txt';
var fs = require('fs');
var input = fs.readFileSync(filename).toString();
console.log(input);
