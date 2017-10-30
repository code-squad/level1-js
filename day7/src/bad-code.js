//test
//오해하기 쉬운 코드

var foo = function(n) {
	n = n * 2;
}

var n = 10;
foo(n);
console.log(n); //n = 10!

//test 2 
//bad code
//가급적이면 전역변수는 사용하지 말아 주세요!

var n2 = 20;
var foo2 = function() {
	n2 = n2 * 2;
}
foo2();
console.log(n2); //n2= 40!!! 

