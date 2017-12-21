var arr = [1, 2, 3, 4, 5];

var foo = function(n) {
  console.log(n);
};

arr.forEach(foo);

var sum = 0;
arr.forEach(function(n){
  sum += n;
});
console.log(sum);

var b = arr.map(function(n) {
  return n % 2 === 0;
});
console.log(b);
