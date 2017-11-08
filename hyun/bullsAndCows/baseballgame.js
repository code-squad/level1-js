
//랜덤값을 담을 배열
var resultArr = [];
var innings = 0;
var strike = 0;
var ball = 0;

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



//입력받은 값을 닫을 배열
var inputArr = [];

document.getElementById("delBtn");
document.getElementById("first");
document.getElementById("second");
document.getElementById("third");


function displayText() {
    document.getElementById("output").innerHTML = "click";

}

//버튼을 클릭했을때
function myBtnClick(num) {

	//document.getElementById("output").innerHTML = num;
	for(var i = 0; i < 3; i++){
			if(i >= 3){
				alert("숫자는 3개까지 입력가능")
			}else if(i == 0){
				inputArr.push(num);
				document.getElementById("first").innerHTML = inputArr[0];
				document.getElementById("second").innerHTML = inputArr[1];
				document.getElementById("third").innerHTML = inputArr[2];
			}

	}


}



function startBtnClick(){


	console.log(inputArr);

	check();
	console.log("strike",strike);
	console.log("ball",ball);


	gameEnd();

}






//같은수가 같은 자리에 있으면 스트라이크, 다른자리에 있으면 볼, 같은 수가 없으면 낫싱	
function check(){


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


/*	
	for (var j = 0; j < 4; j++) {
  		for (var k = 0; k < 4; k++) {
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
*/

	
};

function noting(){
	for(var i = 0; i < resultArr; i++){
		//resultArr != inputArr
	}
	
}



function gameEnd(){
	for(var i = 0; i < resultArr.length; i++){
		if(resultArr[0] == inputArr[0]){
			if(resultArr[1] == inputArr[1]){
				if(resultArr[2] == inputArr[2]){
					document.getElementById("output").innerHTML = "홈런";
				}
			}			
		}
	}

};






