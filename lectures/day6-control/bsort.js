arr = [1, 10, 50, 30, 20, 90, 44, 77, 22, 3, 50];

var ret = document.getElementById('test');
var result = "정렬되기 전:" + arr  +"<br>\n";
ret.innerHTML = result;

var aswap = function(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;

}
var bsort = function(arr) {

}
