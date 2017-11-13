arr=[]

//generate 4 * 4 array
function generateArray(arr) {
	for (var i = 0; i < 4; i++) {
			arr[i] = [];
		for (var j = 0;j < 4; j++) {
			var x = Math.floor(Math.random() * 1000 + 1);
			arr[i].push(x);
		}
	}
}

function printArray(arr) {
	for (var i = 0; i < 4; i++) {
		var str = "";
		for (var j = 0; j < 4; j++) {
			str += arr[i][j] + " ";	
		}
		console.log(str);
	}
}

function printNeighber(arr, n) {
	var x = -1, y = -1;	
	for (var i = 0; i < 4; i++) {
		var k = arr[i].indexOf(n);
		if (k !== -1) {
			//찾았다!
			x = i; 
			y = k;
			break;
		}
	}

	if (x !== -1) {
		//print above
		if ( x > 0) {
			console.log("up", arr[x - 1][y]);
		} 
		if ( y > 0) {
			console.log("left", arr[x][y - 1]);
		}
		if ( x < 3) {
			console.log("down", arr[x + 1][y]);
		}
		if ( y < 3) {
			console.log("right", arr[x][y + 1]);
		}
	} else {
		console.log("못 찾음!");
	}
}

//4*4 배열을 만들어준다.
generateArray(arr);

//배열을 출력해준다.
printArray(arr);

//배열의 이웃을 출력해준다.
printNeighber(arr, arr[2][2]);
printNeighber(arr, arr[0][0]);
printNeighber(arr, arr[3][3]);

