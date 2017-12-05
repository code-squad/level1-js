/*
객체를 배열처럼 제어하는 이유
*/

var h = {name:"해나",
        status:"잠못잠",
        money: 99999999};

h.money -= 5000;

var x = prompt("어떤 속성을 바꿀래요?");
var y = prompt("어떤 값으로 바꿀래요?");

console.log(x, y);

//h.x
h[x] = y; // h[x] = h["money"];
console.log(h);
