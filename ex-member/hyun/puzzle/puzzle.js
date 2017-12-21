var puzzle = document.getElementById('puzzle');
var up, down, left, right;
var arr = [];

//배열 퍼즐 만들기
//arr : 퍼즐배열
//return : 없음
function generatePuzzle(arr){
	for(var i = 0; i < 4; i++){
		arr[i] = [];
		for(var j = 0; j < 4; j++){
			arr[i][j] = i * 4 + j + 1;
		}
	}
	arr[3][3] = "#";
}


//배열을 innerHTML로 화면에 뿌려준다
//arr : 퍼즐배열
//return : 없음
function updateHTML(arr) {
	for (var i = 0; i < 4; i++ ) {
		for (var j = 0; j <4; j++) {
			var num = document.getElementById("n"+i+j);
			num.innerHTML = arr[i][j];
			num.style.color = "#7C7877";
			if(num.innerHTML == "#"){
				num.style.background = "#7C7877";
			} else {
				num.style.background = "#ABD0CE	";
			}

		}
	}
}

generatePuzzle(arr);
shuffle(arr);
updateHTML(arr);


//#의 위치를 찾는다
//arr : 퍼즐배열, num : #
//return : 위치값 리턴, 없으면 null
function findPosition(arr, num){
	var pos = {x : -1, y : -1};
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			if(arr[i][j] == num){
				pos.x = i;
				pos.y = j;
				break;
			}
		}
	}
	if(pos.x !== -1){
		return pos;
	} else {
		return null;
	}
}


//'#' 상하좌우 위치에 있는 값 찾기
//arr : 퍼즐배열
//return : 위치값
function findNeighbor(arr){
	var key = findPosition(arr, '#');

	up = down = left = right = -1; //좌표중에 -1은 없는값
	if(key.x !== -1){
		if(key.x > 0){
			up = arr[key.x - 1][key.y];
		}
		if(key.y > 0){
			left = arr[key.x][key.y - 1];
		}
		if(key.x < 3){
			down = arr[key.x + 1][key.y];
		}
		if(key.y < 3){
			right = arr[key.x][key.y + 1];
		}
	}
	return up, down, left, right;
}
findNeighbor(arr);


//x1y1 와 x2y2 스왑
//arr : 퍼즐배열, x1y1 : #의 xy, x2y2 : 선택된 값의 xy
//return : 없음 
function arraySwap(arr, x1, y1, x2, y2) {
	var temp = arr[x1][y1];
	arr[x1][y1] = arr[x2][y2];
	arr[x2][y2] = temp;
}


//퍼즐 #과 선택된 값 체인지
//arr : 퍼즐배열, pos : 클릭한 자리의 숫자값 
//return : 없음
function puzzleChange(arr, pos){
	var key = findPosition(arr, '#');
	findNeighbor(arr);

	if(pos == up){
		arraySwap(arr, key.x, key.y, key.x - 1, key.y);
	} else if (pos == down) {
		arraySwap(arr, key.x, key.y, key.x + 1, key.y);
	} else if (pos == left) {
		arraySwap(arr, key.x, key.y, key.x , key.y - 1);
	} else if (pos == right) {
		arraySwap(arr, key.x, key.y, key.x, key.y + 1);
	} else {
		console.log("못 바꿔");
	}	

}

//퍼즐 섞기
//arr : 퍼즐배열
//return : 없음
function shuffle(arr){

	var count = 0;

	while(count < 500){
		count++;
		var key = findPosition(arr, '#');		
		findNeighbor(arr);
		var n = Math.floor(Math.random()*4);
		switch(n){
		case 0:
			if(up != -1){
				findNeighbor(arr);
				arraySwap(arr, key.x, key.y, key.x - 1, key.y);
				updateHTML(arr);
			}			
			break;
		case 1:
			if(down != -1){
				findNeighbor(arr);
				arraySwap(arr, key.x, key.y, key.x + 1, key.y);
				updateHTML(arr);
			}			
			break;
		case 2:
			if(left != -1){
				findNeighbor(arr);
				arraySwap(arr, key.x, key.y, key.x , key.y - 1);
				updateHTML(arr);
			}
			break;
		case 3:
			if(right != -1){
				findNeighbor(arr);
				arraySwap(arr, key.x, key.y, key.x, key.y + 1);
				updateHTML(arr);				
			}
			break;
		}
	}
}
shuffle(arr);

//스왑할 번호선택
function numClick(event){
	var r = checkResult(arr);
	console.log(r);
	if(r){
		return;
	}else{
		var v = event.target.innerHTML;
		puzzleChange(arr, v);
		updateHTML(arr);
		checkResult(arr);
	}
}


//reset 다시 퍼즐 셔플
function reStart(){
	shuffle(arr);
	updateHTML(arr);
}


//결과체크
//arr : 퍼즐배열
//return : 다르면 false, 기본퍼즐과 모두같으면 true
function checkResult(arr){
		
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			if (i ===3 && j ===3) {
				break;
			}
			if(arr[i][j] != i * 4 + j + 1){
				//console.log("같지않음");
				return false;
			}
		}
	}	
	var end = document.getElementById("title");
	end.innerHTML = "END";
	end.style.color = ""
	//console.log("같음");
	return true;
}





