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
		var id = event.target.id;
		var idArr = id.split("").map(Number);
		idArr.shift();

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

// win conditions 
function winCombo(arr, str){

	// check rows
	if(arr[0][0] == str && arr[0][1] == str && arr[0][2] == str){
		alert(str + " has won!!");
	 	running = false;
	}
	if(arr[1][0] == str && arr[1][1] == str && arr[1][2] == str){
		alert(str + " has won!!");
	 	running = false;	
	}
	if(arr[2][0] == str && arr[2][1] == str && arr[2][2] == str){
		alert(str + " has won!!");
	 	running = false;
	}

	// check columns 
	if(arr[0][0] == str && arr[1][0] == str && arr[2][0] == str){
		alert(str + " has won!!");
	 	running = false;
	}
	if(arr[0][1] == str && arr[1][1] == str && arr[2][1] == str){
		alert(str + " has won!!");
	 	running = false;
	}
	if(arr[0][2] == str && arr[1][2] == str && arr[2][2] == str){
		alert(str + " has won!!");
	 	running = false;
	}

	// check left diagonal
	if(arr[0][0] == str && arr[1][1] == str && arr[2][2] == str){
		alert(str + " has won!!");
	 	running = false;
	}
	
	// check right diagonal 
	if(arr[0][2] == str && arr[1][1] == str && arr[2][0] == str){
		alert(str + " has won!!");
	 	running = false;
	}

}

// replay the game 
function replay() {
	running = true;
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

