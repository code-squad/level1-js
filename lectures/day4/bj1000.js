var input=require('fs').readFileSync('/dev/stdin').toString().split('\n');
var num1, num2;
[num1, num2] = input[0].split(" ");
console.log(Number(num1) + Number(num2));
