var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var n = Number(input[0]);
var arr = input[1].split(' ').map(Number);
var sum = 0;
for (var i = 0; i < n; i++) {
	sum += arr[i];
}

console.log(sum);
