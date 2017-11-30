var ticArr = [];
var running = true;

// generate an array for the game table
function table(arr) {
	for (var i = 0; i < 3; i++) {
		ticArr[i] = [];
		for(var j = 0; j < 3; j++){
			ticArr[i][j] = " ";
		}
	}
}

table(ticArr);

// get the game table shown on the page
function showTable(arr) {
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			var numbers = document.getElementById("n"+i+j);
			numbers.innerHTML = arr[i][j];
		}
	}
}

showTable(ticArr);

var p1 = {x: -1, y: -1};
var p2 = {x: -1, y: -1};
var count = 0;

// click the position
function ticClick(event) {

	if(running){
		var id = event.target.id.slice(1,3);
		var idArr = id.split('').map(Number);

		count++;
		if(count == 1){
			p1.x = idArr[0];
			p1.y = idArr[1];
			oxChange(ticArr, p1.x, p1.y);
			winCombo(ticArr, "O");
			document.getElementById("n"+p1.x+p1.y).disabled = true;
		}
		if(count == 2){
			p2.x = idArr[0];
			p2.y = idArr[1];
			oxChange(ticArr, p2.x, p2.y);
			count = 0;
			winCombo(ticArr, "X");
			document.getElementById("n"+p2.x+p2.y).disabled = true;
		}
		showTable(ticArr);
	} else {
		return;
	}
}

// change the coordinate values to "O"s and "X"s
function oxChange(arr, x1, y1){
	if(count == 1){
		arr[x1][y1] = "O";
	}
	if(count == 2){
		arr[x1][y1] = "X";
	}
}

function win(str) {
	alert(str + " has won!!");
	running = false;
}

function checkRow(arr, i, str) {
	for (var j = 0; j < 3; j++) {
		if (arr[i][j] != str) {
			return;
		}
	}
	win(str);
}

function checkCol(arr, j, str) {
	for (var i = 0; i < 3; i++) {
		if (arr[i][j] != str) {
			return;
		}
	}
	win(str);
}

function checkLeftDiagonal(arr, str) {
	for (var i = 0; i < 3; i++) {
			if (arr[i][i] != str) {
				return;
			}
	}
	win(str);
}

function checkRightDiagonal(arr, str) {
	for (var i = 0; i < 3; i++) {
			if (arr[i][2 - i] != str) {
				return;
			}
	}
	win(str);
}
// win conditions
function winCombo(arr, str){
	for (var i = 0; i < 3; i++) {
		checkRow(arr, i, str);
	}
	for (var j = 0; j < 3; j++) {
		checkCol(arr,j , str);
	}
	checkLeftDiagonal(arr, str);
	checkRightDiagonal(arr, str);
}

// replay the game
function replay() {
	running = true;
	count = 0;
	table(ticArr);
	showTable(ticArr);
	btnWork();
}

// get the replay button clicked when a game is done
function btnWork(){
	for(var i = 0; i < 3; i++){
		for(var j = 0; j < 3; j++){
			document.getElementById("n"+i+j).disabled = false;
		}
	}
}
