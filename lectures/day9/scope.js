//global variables
var a = 5;
//var b = 7;

var foo = function() {
	a = a + 10;
	var b = 20;
	console.log(a);
	console.log(b);
	
}

foo();
console.log("outside");
console.log(a);
console.log(b); //what is this?
