function foo() {
	for (var i = 0; i < 10; i++) {
		if (i === 5) {
			continue;
		}
		if (i === 7) {
			break;
		}
		console.log(i);
	}
}

function foo2() {
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 3; j++) {
			if (j === 2) {
				//return;
				break;
			}
			console.log("i= %d, j = %d", i, j);
		}
		console.log("outside", i);
	}
}

//foo();
foo2();
console.log("end foo2");
