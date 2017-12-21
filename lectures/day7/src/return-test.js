var angel = function(people) {
	  people.money *= 2;
	    return people;
};

var p1 = {money: 100, name: "Pobi"};
var p2 = angel(p1);
p2.name = "Hyun";
console.log(p1);
console.log(p2);
console.log(p1 === p2);
