var foo = function() {
	console.log("1");
}; //사라지는 함수

var foo = function(a=255) {
	console.log("foo", a);
};

var foo2 = function(n) {
	console.log("foo2", n);
};

var giveMoney = function(p, b=100) {
	p.money += b;
};

foo();  //255
foo(10); //10
foo2();

var p1 = {name: "9", money: 5000};
giveMoney(p1, 1000);
console.log(p1); //6000
giveMoney(p1); 
console.log(p1); //6100
