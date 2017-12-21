var input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
var arr = [];

var sum = 0;
for (var i = 0; i <9; i++) {
  arr.push(Number(input[i]));
  sum += arr[i];
}
var leftover = sum - 100;

//sort array
function compare(a, b) {
  return a - b;
}
arr.sort(compare);

var i = 3;
var j = 4;
for (;;) {
  var sum = arr[i] + arr[j];
  if (sum < leftover) {
    j++;
  } else if (sum > leftover) {
    i--;
  } else {
    //find them!
    console.log(i, j);
    arr[i] = -1;
    arr[j] = -1;
    break;
  }
}

for (var i = 0; i < 9; i++) {
    if(arr[i] != -1) {
      console.log(arr[i]);
    }
}
