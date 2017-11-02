var str = "";
var fact = function(n) {
	if (n == 1) {
		str += 1;
		return 1;
	}
	str += n + " * ";
	console.log(str);
	return n * fact(n - 1);
}

var x = fact(5);
console.log("%s = %d",str, x);
