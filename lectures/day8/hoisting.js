/* hoisting을 셜명하는 코드 */

//console.log(a); //error
var a; //declaration
console.log("a", a);  //undefined
console.log("b1", b); //undefined
var b = 30;
console.log("b2", b); //30

