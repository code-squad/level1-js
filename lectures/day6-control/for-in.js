//for ... in

//배열은 쓰지 않고 객체를 사용함
//var a = [2, 4, 6, 8, 10];

var h = {name:"해나",
        status:"잠못잠",
        money: 99999999,
        age: 23,
        pc: 5,
        pet: ['에비츄', '스누피', '가필드'],
        work: function(money) {
          this.money += money;
        },
      };


//1. 객체의 키와 값을 출력해 보자.
for (var x in h) {
  console.log(x + ": " + h[x]);
}

//2. 객체 중에 숫자 객체의 합을 출력해 보자!
console.log("-------x---절취선-----x------");

var sum = 0;
for (var key in h) {
  var value = h[key];
  if(typeof(value) === "number") {
    sum += value;
    //console.log("debug", value, sum);
  }
}
console.log(sum);

var value = parseInt(h[key]);
if(!!value)
