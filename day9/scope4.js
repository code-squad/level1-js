var c = 100;

var foo = function(c) {
	console.log(c);

	var i = 0;
	for ( ; i < 10; i++) {
		console.log(i);
	}
	console.log(i);
}


// console.log(i); //error

foo(55);
console.log("outside");
console.log(c);
