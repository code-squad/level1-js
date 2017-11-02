var rsum = function(a, b) {
	if (a ==  b) {
		return a;
	}
	return b + rsum(a, b - 1);
}

var x = rsum(1, 10);
console.log(x);

