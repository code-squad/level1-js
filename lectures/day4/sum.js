var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('data.txt').toString().split('\r\n');
var n = Number(input[0]);

for (var i = 1; i <= n; i++) {
  var arr = input[i].split(" ");
  console.log(Number(arr[0]) + Number(arr[1]));
}
