function double(n) {
	return 2 * n;
}

var x = 3;
console.log(double(double(x)));

function printDouble(n) {
	console.log("In function", n * 2);
}

console.log("console", printDouble(x));

console.log("console2", printDouble(printDouble(x)));

console.log(5/0);
