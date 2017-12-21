var myshift = function(arr) {
  //return arr.splice(0, 1)[0];
  var x = arr[0];
  for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  return x;
}

var arr = [5, 6, 7];
var n = myshift(arr);
console.log(n === 5);
console.log(arr.length === 2);
console.log(arr);

var myunshift = function(arr, v) {
  for (var i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = v;
};

myunshift(arr, n);
console.log(arr);
console.log(arr.length  ===3);
console.log(arr[0]  === n);
