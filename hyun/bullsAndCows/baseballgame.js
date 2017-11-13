//랜덤값을 담을 배열
var resultArr = [];
var innings = 0;
var strike = 0;
var ball = 0;
var count = 0;
var innings = 1;

/*
//1. 중복없이 랜덤수 배열에 담기
resultArr[0] = Math.floor(Math.random()*10);
do{
	resultArr[1] = Math.floor(Math.random()*10);
}while(resultArr[0] === resultArr[1])
do{
	resultArr[2] = Math.floor(Math.random()*10);
}while(resultArr[0] === resultArr[2] || resultArr[1] === resultArr[2])

console.log(resultArr);
*/

//2. 배열에 0~9숫자를 넣고 하나씩 뽑기 
var resultList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(var i = 0; i < 3; i++){
	var select = Math.floor(Math.random() * resultList.length);
	resultArr[i] = resultList.splice(select, 1)[0]; 
}
console.log(resultArr);



var inputArr = [];

document.getElementById("startBtn").disabled = true;


function myBtnClick(num) {

	inputArr.push(num);

	document.getElementById("input"+count).innerHTML = inputArr[count];	
	document.getElementById("btn" + num).disabled = true;
	count++;

	if(count == 3){
		buttonDisAble();
		document.getElementById("startBtn").disabled = false;
	}



}

function startBtnClick(){

		check();
		var p = document.createElement("p");  
		var inn = document.getElementById("history");
		inn.appendChild(p).innerHTML = innings + "회 - strike : " + strike + ", ball : " + ball + ". 입력번호 : " + inputArr;	
		document.getElementById("output").innerHTML = strike + " strike, " + ball + " ball.";
		if(strike == 3){
			gameEnd();
			//document.getElementById("center").remove();
		}else if(strike == 0 && ball == 0){
			document.getElementById("output").innerHTML = "Out";
			clean();
			inputInit();
			buttonAble();
		}else{
			clean();
			inputInit();
			buttonAble();
		}


	if(innings == 9){
		check();
		clean();
		document.getElementById("startBtn").disabled = true;
		document.getElementById("output").innerHTML = "Game Over";
		alert("Game Over");
		for (var i = 0; i < 10; i++ ){
			document.getElementById("btn"+i).disabled = true;
		}	
	}


	innings++;
	gameEnd();
	

}


function clean(){
		strike = 0;
		ball = 0;
		count = 0;
		inputArr = [];
}

function delBtnClick(){
	buttonAble();
	document.getElementById("input0").innerHTML = "-";
	document.getElementById("input1").innerHTML = "-";
	document.getElementById("input2").innerHTML = "-";
	clean();
}



//같은수가 같은 자리에 있으면 스트라이크, 다른자리에 있으면 볼	
function check(){

document.getElementById("startBtn").disabled = true;
	for (var j = 0; j < 3; j++) {
  		for (var k = 0; k < 3; k++) {
    		if (resultArr[j] == inputArr[k]) {
      			if (j === k) {
        			strike++;
      			} else {
        			ball++;
      			}
      			break;
    		}
  		}
	}

/*
	//하드코딩
	var inputNum1 = inputArr[0];
	var inputNum2 = inputArr[1];
	var inputNum3 = inputArr[2];	
	
	if(resultArr[0] == inputNum1){
		strike++;
	} 
	if(resultArr[1] == inputNum1){	
		ball++;		
	}
	if(resultArr[2] == inputNum1){	
		ball++;	
	}	

	if(resultArr[0] == inputNum2){
		ball++;	
	} 
	if(resultArr[1] == inputNum2){	
		strike++;
	}
	if(resultArr[2] == inputNum2){	
		ball++;		
	}	

	if(resultArr[0] == inputNum3){
		ball++;		
	} 
	if(resultArr[1] == inputNum3){	
		ball++;		
	}
	if(resultArr[2] == inputNum3){	
		strike++;
	}
*/
	
};


function gameEnd(){
	for(var i = 0; i < resultArr.length; i++){
		if(resultArr[0] == inputArr[0]){
			if(resultArr[1] == inputArr[1]){
				if(resultArr[2] == inputArr[2]){
					document.getElementById("output").innerHTML = "홈런!!! + _ + 게임끝났고요 Bye~";
					buttonDisAble();
					document.getElementById("startBtn").disabled = true;
					
				}
			}			
		}
	}

};


function inputInit(){
	document.getElementById("input0").innerHTML = "-";
	document.getElementById("input1").innerHTML = "-";
	document.getElementById("input2").innerHTML = "-";
}

function buttonAble(){
	for(var i = 0; i < 10; i ++){
		document.getElementById("btn"+i).disabled = false;
	}
}

function buttonDisAble(){
	for(var i = 0; i < 10; i ++){
		document.getElementById("btn"+i).disabled = true;
	}
}


