var countdown = function(n) {
	for (var i = n; i >= 0; i--) {
		console.log(i);
	}
};

countdown(10);

console.log("-----recursion-----");

var countdown2 = function(n) {

	//termination condition
	console.log(n);
	if (n <= 0) {
		return;
	} 

	countdown2(n - 1);
};

countdown2(10);
