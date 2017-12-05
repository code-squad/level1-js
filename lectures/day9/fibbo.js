var fibo = function(n) {
	if (n == 0) {
		return 0;
	} else if (n  == 1) {
		return 1;
	}
	return fibo(n - 1) + fibo(n - 2);
};


var answer = [];

for (var i = 0; i < 40; i++) {
	answer.push(fibo(i));
}

console.log(answer);

