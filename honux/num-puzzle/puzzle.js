
//배열에서 #의 자리를 리턴해 준다.
//arr: 퍼즐 배열
//num: 우리가 찾을 숫자 혹은 마크 (1~15, #)
//return: position{x, y} x: #의 행, y: #의 열
// 못 찾을 경우 null 리턴
//
var arr = (function() {
	var arr = [];
	for (var i = 0; i < 4; i++) {
		arr[i] = [];
		for (var j = 0; j < 4; j++) {
			arr[i][j] = i * 4 + j + 1;
		}
	}
	arr[3][3] = '#';
	return arr;
})();

console.log("game arr: \n", arr);

function findPosition(arr, num) {
	var pos = {x: -1, y: -1};
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (arr[i][j] === num) {
				pos.x = i;
				pos.y = j;
				break;
			}
		}
	}
	if (pos.x !== -1) {
		return pos;
	} else {
		return null;
	}
}

//#의 주변 숫자를 알려주는 함수
//return: # 주변 숫자 배열들 
function findNeighber(arr) {
 	var arr = [12,15];
	return arr;
}

//움직일 수 있는지 여부를 알려주는 함수 
//arr: 퍼즐 배열
//num: 움직일 숫자
//return: position{x, y} 숫자의 현재 위치, 움직일 수 없다면 null 리턴 
function checkNumChange(arr, num) {
	var pos = {x:-1, y:-1};
	return pos;
}

//퍼즐 데이터를 업데이트한다.
//arr: 원래 배열 
//num: #과 바꿀 숫자 
//return: 바꾸기 성공 여부  
function changePuzzle(arr, num) {

	var spos = findPosition(arr, '#');

	var available = findNeighber(arr);
	
	var numpos = findPosition(arr,num);

	if (available.indexOf(num) != -1) {
		arraySwap(arr, spos.x, spos.y, numpos.x, numpos.y);
	} else {
		return false;
	}
}
