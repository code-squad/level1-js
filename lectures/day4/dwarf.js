var input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
var arr = [];

var sum = 0;
for (var i = 0; i <9; i++) {
  arr.push(Number(input[i]));
  sum += arr[i];
}

var leftover = sum - 100;

function compare(a, b) {
  return a - b;
}

arr.sort(compare);

console.log(arr);
function findOthers(arr) {
  for (var i = 0; i < 8; i++) {
    for (var j = i + 1; j <9; j++) {
      if (arr[i] + arr[j] === leftover) {
        return [i, j];
      }
    }
  }
}

var others = findOthers(arr);

//others [5,6]
for (var i = 0; i < 9; i++) {
  if (others.indexOf(i) === -1) {
    console.log(arr[i]);
  }
}
