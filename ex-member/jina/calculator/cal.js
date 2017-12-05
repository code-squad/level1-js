

//디스플레이
var displayId = document.getElementById('display');
//텍스트 저장
var textTotal = "";
//연산숫자 저장
var numTotal = 0;
var firstNum = 0;
var secNum = 0;
//숫자 입력값 카운트
var inputCnt = 0;
//연산자 저장
var opr = "";

//리셋
function reset() {
	displayId.innerHTML = 0;
	numTotal = 0;
	textTotal = "";
	firstNum = 0;
	secNum = 0;
	inputCnt = 0;
	opr = "";
}

//버튼 클릭시
function clickNum(n){
	//alert("입력:"+n);
	//입력값이 연산자일경우
	if (n === '+' || n === '-' || n === '*' || n === '/') {
		//alert("연산자");
		if(opr === ""){
			opr = n;
			inputCnt = 1;
		}
		// 연산자 넣기
		textTotal += n; 
	//입력값이 =일경우	
	}else if(n === '='){
		//alert("난 는");
		//연산
		if(opr === '+'){
			numTotal = Number(firstNum) + Number(secNum);
		}else if(opr === '-'){
			numTotal = Number(firstNum) - Number(secNum);
		}else if(opr === '*'){
			numTotal = Number(firstNum) * Number(secNum);
		}else if(opr === '/'){
			numTotal = Number(firstNum) / Number(secNum);
		}
		//alert("연산완료:"+numTotal);
		textTotal = numTotal.toFixed(2);
	}else{ // 숫자일경우
		//alert("숫자");
		//입력횟수 확인
		if(inputCnt === 0){
			//입력값이 처음일경우
			if(firstNum == 0){
				firstNum = n;
			}else{
				firstNum = firstNum + "" + n;
			}
			
			//alert("firstNum : "+firstNum);
		}else{
			//입력값이 두번째일경우
			if(secNum == 0){
				secNum = n;
			}else{
				secNum = secNum + "" + n;
			}
			//alert("secNum : "+secNum);
		}
		textTotal = textTotal + "" + n;
	}
	//텍스트 저장
	displayId.innerHTML = textTotal;
}

// 입력한 숫자 뒤에서 부터 지우기
// function erase() {
// 	if (textTotal.length - 1 === '+') { //마지막 인덱스가 연산자면
// 		opr = ""; //연산자를 비워준다	
// 	} else if (textTotal.indexof() === firstNum && opr) { //textTotal이 연산자+숫자면
// 		secNum.slice(0,-1); //secNum의 값을 한자씩 지운다.

// 	} else if ( textTotal.indexof() === firstNum) { //textTotal이 숫자만 있으면) 
// 		firstNum.slice(0,-1); //firstNum의 숫자를 하나씩 지운ㄷㅏ.
// 	}
	
// 	//textTotal = textTotal.slice(0,-1);
	
// 	displayId.innerHTML = textTotal;
	
// }