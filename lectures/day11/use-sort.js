var arr = [5, 3, 1, 7, 9, 11];

//내림차순
console.log("before", arr);
arr.sort((a,b) => (a - b));
console.log("after", arr);

//오름차순
arr = ['banana', 'apple', 'carrot', 'apple II'];
console.log("before", arr);
arr.sort(function(a, b) {
	if (a > b) {
		return -1;
	} else if (a == b) {
		return 0;
	} else {
		return 1;
	}
});
console.log("after", arr);

//empty array
arr.length = 0;
arr.push({name: "honux", score: 1000, money: 10});
arr.push({name: "crong", score: 2000, money: 50});
arr.push({name: "pobi1", score: 20, money: 20});
arr.push({name: "pobi3", score: 60, money: 20});
arr.push({name: "pobi3", score: 30, money: 20});
arr.push({name: "pobi2", score: 40, money: 20});

console.log("before", arr);
arr.sort((a,b) => (a.score - b.score));
console.log("after", arr);
arr.sort((a,b) => (a.money - b.money));
console.log("Stable check:");
console.log("after sort:", arr);

