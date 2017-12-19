console.log(bar);
//bar(); //error
foo(); //no problem

function foo() {
	console.log("I am foo");
}

var bar = function() {
	console.log("I am bar");
};

bar(); //ok

var foo2 = function() {
	return "I am foo2";
}

var x = foo();
console.log(x);


var x = foo2();
console.log("x after foo2()", x);
console.log("foo2", foo2);
console.log("foo2()", foo2());
