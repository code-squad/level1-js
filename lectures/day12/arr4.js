var arr = [];

for (var i = 0; i < 4; i++) {
	var n = 4 * i;
	arr.push([n +1, n + 2, n + 3, n + 4]);
}

arr[3][3] = 'x';

console.log(arr);

function arraySwap(arr, x1, y1, x2, y2) {
	var temp = arr[x1][y1];
	arr[x1][y1] = arr[x2][y2];
	arr[x2][y2] = temp;
}


function arrayMove(arr, x1,y1, pos) {
	if (pos == 'up' && x1 > 0) {
		arraySwap(arr, x1, y1, x1 - 1, y1);
		return true;
	} else if (pos == 'down' && x1 < 3) {
		arraySwap(arr, x1, y1, x1 + 1, y1);
		return true;
	} else if (pos == 'left' && y1 > 0) {
		arraySwap(arr, x1, y1, x1, y1 - 1);
		return true;
	} else if (pos == 'right' && y1 < 3) {
		arraySwap(arr, x1, y1, x1, y1 + 1);
		return true;
	} else {
		return false;
	}
}
//arraySwap(arr, 0, 0, 3, 3);
//console.log(arr);
var ok = arrayMove(arr, 3, 3, "right");
console.log(ok);
ok = arrayMove(arr, 3, 3, "left");
console.log(ok);
console.log(arr);
