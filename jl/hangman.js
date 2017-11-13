// 문제를 낼 단어를 만든다 
var words = ["watermelon", "orange", "gratefruit", "raspberry", "dragonfruit", 
                  "shallot", "sweetpea", "persimmon", "eggplant", "radish"];

// 단어를 고를 준비
// 무작위 단어를 배열에서 골라오기 
var ranword = words[Math.floor(Math.random() * words.length)];


// 빈 배열을 만들어 _를 적용시키기 
var answerarr = [];
for (var i = 0; i < ranword.length; i++) {
	answerarr[i] = "_";  // 루프 돌 때마다 배열에 원소 추가 (_, _, _)
}

// 맞힐 수록 _ 수가 줄어들어야 함 
var remainingLetters = ranword.length;

// 게임의 메인 반복문
while (remainingLetters > 0) {
	// 현재 상태를 플레이어에게 알려준다 
    alert(answerarr.join(" "));

// 플레이어가 입력한 글자를 저장하기
var guess = prompt("Enter a letter. If you click the cancel button, the game will be stopped.");
if (guess === null) { 
 	// 메인 반복문 빠져나간다
 	break;
 	} else if (guess.length !== 1) {
 		alert("Please enter one letter only.");
 	} else {
 		for (var j = 0; j < ranword.length; j++) {
 			if (ranword[j] === guess) {
 				answerarr[j] = guess;
 				remainingLetters--;
 			}
 		}
 	}
}

alert(answerarr.join(" "));
alert("Good job! The answer is " + ranword + "!");
