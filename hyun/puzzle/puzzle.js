//숫자퍼즐 구현
//1. html +  js만들기
//<div id="puzzle"><span id="n00"></span></div>
//<div><span id ="n10"></span>
//2. css span을 적당히 키우기
//3. js구현
//버튼 이벤트 리스너 추가 
//어떤 span이 눌렸는지 체크
//움직일 수 있다면 스왑 
//반복
//섞기 (무작위 스왑을 여러번 수행)
//움직인 횟수체크 (스왑한 카운트)
//다 정리했으면 성공! 메시지 출력

var puzzle = document.getElementById('puzzle');

var arr = [];

function generatePuzzle(arr){
	for(var i = 0; i < 4; i++){
		arr[i] = [];
		for(var j = 0; j < 4; j++){
			arr[i][j] = i * 4 + j + 1;
		}
	}
	arr[3][3] = "#";
}


function printArr(arr){
	for(var i = 0; i < 4; i++){
		var str = "";
		for(var j = 0; j < 4; j++){
				str += arr[i][j] + " ";
		}
		console.log(str);
	}
}

function updateHTML(arr) {
	for (var i = 0; i < 4; i++ ) {
		for (var j = 0; j <4; j++) {
			document.getElementById("n"+i+j).innerHTML = arr[i][j];
		}
	}
}


generatePuzzle(arr);
printArr(arr);
updateHTML(arr);




function arraySwap(arr, x1, y1, x2, y2) {
	var temp = arr[x1][y1];
	arr[x1][y1] = arr[x2][y2];
	arr[x2][y2] = temp;
}

/*
pos: 클릭한 자리의 숫자값 
*/
function puzzleChange(arr, pos){
	var x = -1; y = -1;
	for(var i = 0; i < 4; i++){
		var k = arr[i].indexOf("#");
		if(k !== -1){
			console.log("# 찾았다!");
			x = i;
			y = k;
			break;
		}
	}

	var up, down, left, right;
	up = down = left = right = -1;
	//찾았다! 
	if(x !== -1){
		if(x > 0){
			up = arr[x - 1][y];
		}
		if(y > 0){
			left = arr[x][y - 1];
		}
		if(x < 3){
			down = arr[x + 1][y];
		}
		if(y < 3){
			right = arr[x][y + 1];
		}
	}

	console.log(up, down, left, right);

	if(pos == up){
		arraySwap(arr, x, y, x - 1, y);
	} else if (pos == down) {
		arraySwap(arr, x, y, x + 1, y);
	} else if (pos == left) {
		arraySwap(arr, x, y, x , y - 1);
	} else if (pos == right) {
		arraySwap(arr, x, y, x, y + 1);
	} else {
		console.log("못 바꿔");
	}	
}

function numClick(event){
	
	var v = event.target.innerHTML;
	puzzleChange(arr, v);
	updateHTML(arr);
}

