var append = function(arr, v) {
  arr[arr.length] = v;
  return arr.length;
}

var arr = [1,2,3];
var n = append(arr, 4);
console.log("append test 1", arr.length === 4);
console.log("append test 2", arr[3] === 4);
console.log("append test 3", n === 4);

var myPop = function(arr) {
  var ret;
  ret = arr[arr.length - 1];
  arr.length--;
  //totally wrong!
  //arr = arr.slice(0, arr.length - 1);
  return ret;
};

var arr = [2,4,6];
var last = myPop(arr);
console.log("myPop test1", last === 6);
console.log("myPop test2", arr.length === 2);
