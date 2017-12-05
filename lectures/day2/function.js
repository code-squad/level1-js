var foo = function() {
	console.log("I am function");
};

foo();

var mySum = function(a, b) {
	console.log("%d + %d = %d", a, b, a + b);
};

var mySum2 = function(a, b) {
	return a + b;
}

var n = mySum2(5, 10);
console.log(n);
