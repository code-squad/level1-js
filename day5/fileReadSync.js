var fs = require('fs');

//read file into data
var data = fs.readFileSync('test.txt', 'utf8');

//print file 
console.log(data);

console.log(typeof(data));
console.log("End...");

