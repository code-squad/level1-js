var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var count = 0;
var readLine = function() {
  return input[count++];
}

var n = Number(readLine());

for (var i = 0; i < n; i++) {
  console.log(readLine());
}
