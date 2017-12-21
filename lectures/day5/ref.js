//call by value
var foo = function(x) {
  var ret = x;
  ret++;
  console.log("ret", ret);
  return ret;
};

var a = 10;
//call by value, a값 안 바뀜
var n = foo(a);
console.log("a", a);
console.log("n", n);

//call by reference
var eat = function(x) {
  var ret = x;
  ret.kg += 5;
  console.log("ret", ret);
  return ret;
};

var p = {name: "abel", kg: 60};
//call by reference, p는 참조, 바뀔 수 있다.
var p2 = eat(p);
console.log("p", p);
console.log("p2", p2);
p2.name = "Jimmy";
console.log("p", p);
console.log("p2", p2);


var foo3 = function(arr) {
  arr.push(100);
};

var arr = [1,2,3];
foo3(arr);
//call by reference
console.log(arr);

var brr = arr;
brr.push(100);
console.log(arr, brr, arr === brr);
brr = [4,5,6];
console.log(arr, brr, arr === brr);

arr = [1,2,3];
console.log("before arr", arr);
var foo4 = function(array) {
  array.push(255);
  array = [4, 5, 6];
  console.log("array", array);
}

foo4(arr);
console.log("arr", arr);
