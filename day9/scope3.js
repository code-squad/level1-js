var foo = function() {
	b = 10;
	console.log(b);  //??
}

foo();
console.log("outside");
console.log(b); //what is this?
