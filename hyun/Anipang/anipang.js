var numArr = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7];
var characterArr = [];
var score = 0;
var running = false;
var move = false;
var count = 0;


//배열을 만드는 함수
function generateArr(arr){
	for(var i = 0; i < 7; i++){
		characterArr[i] = [];
		for(var j = 0; j < 7; j++){
			var r = Math.floor(Math.random() * numArr.length);
			characterArr[i][j] = numArr[r];
		}
	}
}
generateArr(characterArr);


//updateHtml
function updateHtml(arr){
	for(var i = 0; i < 7; i++){
		for(var j = 0; j < 7; j++){
			var h = document.getElementById("n"+i+j);
			h.innerHTML = characterArr[i][j];
			var img = document.createElement("IMG");
			
			if(characterArr[i][j] == 1 ){		
				if (!!key && key.x == i && key.y == j && count % 2 == 1) {
   					img.setAttribute("src", "img/jl02.png");
   				} else {
   					img.setAttribute("src", "img/jl01.png");
   				}
			}
			if(characterArr[i][j] == 2){	
				if (!!key && key.x== i && key.y == j && count % 2 == 1) {
   					img.setAttribute("src", "img/jina02.png");
   				} else {
   					img.setAttribute("src", "img/jina01.png");;
   				}				
			}
			if(characterArr[i][j] == 3){	
				if (!!key && key.x== i && key.y == j && count % 2 == 1) {
   					img.setAttribute("src", "img/heana02.png");
   				} else {
   					img.setAttribute("src", "img/heana01.png");
   				}					
			}			
			if(characterArr[i][j] == 4){	
				if (!!key && key.x== i && key.y == j && count % 2 == 1) {
   					img.setAttribute("src", "img/koo02.png");
   				} else {
   					img.setAttribute("src", "img/koo01.png");
   				}								
			}
			if(characterArr[i][j] == 5){	
				if (!!key && key.x== i && key.y == j && count % 2 == 1) {
   					img.setAttribute("src", "img/jack02.png");
   				} else {
   					img.setAttribute("src", "img/jack01.png");
   				}				
			}
			if(characterArr[i][j] == 6){	
				if (!!key && key.x== i && key.y == j && count % 2 == 1) {
   					img.setAttribute("src", "img/hyun02.png");
   				} else {
   					img.setAttribute("src", "img/hyun01.png");
   				}					
			}
			if(characterArr[i][j] == 7){		
   				img.setAttribute("src", "img/honux.png");
			}			

		   	img.setAttribute("width", "45");
			img.setAttribute("height", "45");
		    img.setAttribute("alt", "Pang");
		   	h.appendChild(img);
		}
	}
}
updateHtml(characterArr);


document.getElementById("pang").addEventListener("click", clickCharacter);


//click character 
function clickCharacter(event){

	if(running) {
		changePang(characterArr);
		check(characterArr);
		updateHtml(characterArr);
	} else {
		return;
	}
}


//store first click
var key = {x: -1, y:-1};
//store second click
var pos = {x: -1, y:-1};

//처음 클릭한 값과 두번째 클릭한(상하좌우)값 체인지
function changePang(arr){

	count++;
	console.log("count",count);
	//first click, save key
	if(count % 2 == 1){
		var k = getPosition(event);
		key.x = k[0];
		key.y = k[1];

		//console.log("key",key);
		document.getElementById("n"+key.x+key.y).style.border = "1px dotted #ef5285";
		document.getElementById("n"+key.x+key.y).style.boxShadow = "0 0 35px #888888";

		//skill
		if(arr[key.x][key.y] == 7){
			itemSkillCol(arr, 0, key.y); 
			itemSkillRow(arr, 6, 0);				
			var r = Math.floor(Math.random() * numArr.length);
			arr[key.x + 1][key.y] = numArr[r];
			document.getElementById("n"+key.x+key.y).style.border = "none";
			document.getElementById("n"+key.x+key.y).style.boxShadow = "none";
							
			count = 0;
		}

	} else if(count % 2 == 0){ 
		//second click
		var p  = getPosition(event);	
		pos.x = p[0];
		pos.y = p[1];
		//console.log("pos",pos);
		document.getElementById("n"+key.x+key.y).style.border = "none";
		document.getElementById("n"+key.x+key.y).style.boxShadow = "none";

		//ableToChange(arr, key.x, key.y, pos.x, pos.y);
	

		if(key.x == pos.x && Math.abs(key.y - pos.y) === 1) {
				move = true;
		}
		if (key.y == pos.y && Math.abs(key.x - pos.x) === 1) {
				move = true;
		}

		if (move) {
			characterSwap(arr, key.x, key.y, pos.x, pos.y);
			check(arr);
		} else {
			console.log("못바꿈");
		}
		count = 0;
	}
}


function ableToChange(arr, keyx, keyy, posx, posy){

	console.log("ableTo arr[keyx][keyy] = " + arr[keyx][keyy]);
	console.log("ableTo arr[posx][posy - 1] = " + arr[posx][posy - 1]);
	console.log("ableTo arr[posx][posy - 2] = " + arr[posx][posy - 2]);
	console.log("ableTo arr[keyx][keyy] == arr[keyx][keyx - 1] " + (arr[keyx][keyy] == arr[posx][posy - 1]));	
	

	//left 
	if(arr[keyx][keyy] == arr[posx][posy - 1] && arr[keyx][keyy] == arr[posx][posy - 2]) {
		console.log("left left 바꿀수있음");
		move = true;
	}
	if(arr[keyx][keyy] == arr[posx - 1][posy] && arr[keyx][keyy] == arr[posx - 2][posy]) {
		console.log("left up 바꿀수있음");
		move = true;
	}
	if(arr[keyx][keyy] == arr[posx + 1][posy] && arr[keyx][keyy] == arr[posx + 2][posy]) {
		console.log("left down 바꿀수있음");
		move = true;
	}
	if(arr[keyx][keyy] == arr[posx - 1][posy] && arr[keyx][keyy] == arr[posx + 1][posy]) {
		console.log("left between 바꿀수있음");
		move = true;
	}	

	//right
	if(arr[keyx][keyy] == arr[posx][posy + 1] && arr[keyx][keyy] == arr[posx][posy + 2]) {
		console.log("right right 바꿀수있음");
		move = true;
	}
	if(arr[keyx][keyy] == arr[posx - 1][posy] && arr[keyx][keyy] == arr[posx - 2][posy]) {
		console.log("right up 바꿀수있음");
		move = true;
	}
	if(arr[keyx][keyy] == arr[posx + 1][posy] && arr[keyx][keyy] == arr[posx + 2][posy]) {
		console.log("right down 바꿀수있음");
		move = true;
	}
	if(arr[keyx][keyy] == arr[posx - 1][posy] && arr[keyx][keyy] == arr[posx + 1][posy]) {
		console.log("right between 바꿀수있음");
		move = true;
	}	

	//up
	if(arr[keyx][keyy] == arr[posx][posy + 1] && arr[keyx][keyy] == arr[posx][posy + 2]) {
		console.log("up right 바꿀수있음");
		move = true;
	}
	if(arr[keyx][keyy] == arr[posx - 1][posy] && arr[keyx][keyy] == arr[posx - 2][posy]) {
		console.log("up up 바꿀수있음");
		move = true;
	}
	if(arr[keyx][keyy] == arr[posx][posy - 1] && arr[keyx][keyy] == arr[posx][posy - 2]) {
		console.log("up left 바꿀수있음");
		move = true;
	}
	if(arr[keyx][keyy] == arr[posx][posy - 1] && arr[keyx][keyy] == arr[posx][posy + 1]) {
		console.log("up between 바꿀수있음");
		move = true;
	}	

	//down
	if(arr[keyx][keyy] == arr[posx][posy + 1] && arr[keyx][keyy] == arr[posx][posy + 2]) {
		console.log("down right바꿀수있음");
		move = true;
	}
	if(arr[keyx][keyy] == arr[posx + 1][posy] && arr[keyx][keyy] == arr[posx + 2][posy]) {
		console.log("down down바꿀수있음");
		move = true;
	}
	if(arr[keyx][keyy] == arr[posx][posy - 1] && arr[keyx][keyy] == arr[posx][posy - 2]) {
		console.log("down left 바꿀수있음");
		move = true;
	}
	if(arr[keyx][keyy] == arr[posx][posy - 1] && arr[keyx][keyy] == arr[posx][posy + 1]) {
		console.log("down between 바꿀수있음");
		move = true;
	}	
}



//캐릭터 스왑
function characterSwap(arr, x1, y1, x2, y2) {
	var temp = arr[x1][y1];
	arr[x1][y1] = arr[x2][y2];
	arr[x2][y2] = temp;
}


//클릭이벤트 함수
function getPosition(event){
	var id = event.target.id;
	var arrId = id.split("").map(Number);
	arrId.shift();

	return arrId;

}

//같은 캐릭이 있는 행 카운트
function countRow(arr, i, j) {
	var x = arr[i][j]
	var countX = 0;
	while(j < 7) {	
		if (arr[i][j] == x) {
			countX++;
		} else {
			break;
		}
		j++;
	}
	return countX;
}

//같은 캐릭이 있는 열 카운트
function countCol(arr, i, j){
	var y = arr[i][j];
	var countY = 0;
	while(i < 7){
		if(arr[i][j] == y){
			countY++;
		} else {
			break;
		}
		i++;
	}
	return countY;
}



//열 행 카운트한 값을 체크
function check(arr){
	for(var i = 0; i < 7; i++){
		for(var j = 0; j < 5; j++){
			var pangX = countRow(arr, i, j);
			if (pangX >= 3) {
				console.log("줄 지워!", i, j, pangX);	
				eraseRow(arr, i, j, pangX);
				score += pangX * 5;
				document.getElementById("score").innerHTML = score;
			}
		}
	}

	for(var j = 0; j < 7; j++){
		for(var i = 0; i < 5; i++){
			var pangY = countCol(arr, i, j);
			if (pangY >= 3) {
				console.log("열 지워!", i, j, pangY);			
				eraseCol(arr, i, j, pangY);
				score += pangY * 5;
				document.getElementById("score").innerHTML = score;
			} 
		}
	}			
}




/*     지우기      */

//행을 지우는 함수
//arr:캐릭배열 x:idx0 y:idx1 n:중복값 개수
function eraseRow(arr, x, y, n){

	for(var i = x; i >= 0; i--){
		for(var j = 0; j < n; j++){
			if(i == 0){
				var r = Math.floor(Math.random() * numArr.length);
				arr[i][y + j] = numArr[r];
			} else {
				// var delay;
				// for(var k = 0; k < n; k++){
 			//   		delay = document.getElementById('n'+x+(y+k));
 			//   		delay.style.backgroundColor='#000';					
				// }			
				arr[i][y + j] = arr[i - 1][y + j];
			}			
		}
	}
}


//열을 지우는 함수
//arr:캐릭배열 x:idx0 y:idx1 n:중복값 개수
function eraseCol(arr, x, y, n){

	for(var i = 0; i < n; i++){
		if((x + i) - n < 0){
			var r = Math.floor(Math.random() * numArr.length);
			arr[x + i][y] = numArr[r];
		} else {
			arr[x + i][y] = arr[(x + i) - n][y];
			var r = Math.floor(Math.random() * numArr.length);
			arr[(x + i) - n][y] = numArr[r];			
		}
	}
}


/*     스킬      */
//아이템 스킬 클릭시 마지막 열 0~6까지 값 지움
function itemSkillRow(arr, x, y){

	for(var i = x; i >= 0; i--){
		for(var j = 0; j < 7; j++){
			if(i == 0){
				var r = Math.floor(Math.random() * numArr.length);
				arr[i][y + j] = numArr[r];
			} else {
				arr[i][y + j] = arr[i - 1][y + j];
			}			
		}
	}
	score += 50;
	document.getElementById("score").innerHTML = score;
}
//아이템 스킬 클릭시 해당 열 0~6까지 값 지움
function itemSkillCol(arr, x, y){
	for(var i = 0; i < 7; i++){
		var r = Math.floor(Math.random() * numArr.length);
		arr[i][y] = numArr[r];	

	}
}


/*     시간      */
var sec = 60;
var click = 0;
var intervalSec;
function startBtn(){
	document.getElementById("startbtn").style.color = "#60c5ba";
	document.getElementById("startbtn").style.backgroundColor = "#ef5285";
	document.getElementById("startbtn").disabled = true;
	score = 0;
	sec = 60;
	running = true;
	check(characterArr);
	updateHtml(characterArr);
	document.getElementById("score").innerHTML = score;
	intervalSec = setInterval("countSec()", 1000); 

}

//게임시간  1분 카운트하는 함수
function countSec(){ 
	sec -= 1;
	document.getElementById("second").innerHTML = sec; 

	if(sec == 0){
		alert( "score : " + score + ".");
		document.getElementById("startbtn").style.color = "#ef5285";
		document.getElementById("startbtn").style.backgroundColor = "#60c5ba";
		document.getElementById("startbtn").disabled = false;
		running = false;
		clearInterval(intervalSec);
	}

}

function resetBtn(){
	generateArr(characterArr);
	updateHtml(characterArr);
}






