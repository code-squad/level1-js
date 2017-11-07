var canvas = document.getElementById("drawHm");
var ctx = canvas.getContext("2d");
var crtStr = [];
var h = document.getElementById("h1");
h.innerHTML = "Making a calculator";
var p = document.getElementById("p");
p.innerHTML = "Jack's FirstHangman";
var dp = document.getElementById("display");
dp.innerHTML = crtStr;
var count = document.getElementById('life');
count.innerHTML = 10;
var dpHint = document.getElementById('hint');
dpHint.innerHTML = 'Hint : ';
//hint start
var hint = [ //[i][0] : hint
  ["country", "korea", "america", "china"],
  ["drink", "coffee", "juice", "water"],
  ["color", "blue", "green", "gray"],
  ["fruit", "apple", "orange", "cherry"],
  ["transportation", "car", "train", "bus"],
  ["sports", "soccer", "basketball", "tennis"]
];
var mkHintNum = function() {
  var chHint = Math.floor(Math.random() * 6);
  return chHint;
};
var mkAnswerNum = function() {
  var chAns = Math.floor(Math.random() * 3 + 1);
  return chAns;
};
var prtHint = function(str2) {
  dpHint.innerHTML += str2;
};
//hint end
//quiz start
var mkQuiz = function(num1, num2) {
  var temp = [];
  for (var i = 0; i < (hint[num1][num2]).length; i++) {
    temp.push('_');
  }
  return temp;
};
var prtQuiz = function(str1) {
  dp.innerHTML = str1.join(" ");
};
var checkAnswer = function(char, num1, num2) {
  var arr = hint[num1][num2].split("");
  var find = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == char) {
      crtStr[i] = arr[i];
      console.log(crtStr);
      console.log(arr);
      find = true;
    }
  }
  if (find == false) {
    count.innerHTML -= 1;
  }
  return crtStr;
};
var pushChar = function(num) {
  if (count.innerHTML >= 1) {
    var x = document.getElementById('btn' + num).value;
    crtStr = checkAnswer(x, hintNum, answerNum);
    dp.innerHTML = crtStr.join(" ");
    drawHm(count.innerHTML);
  }

};
//quiz end
//drawing start
var drawHm = function(num) {
  if (num == 9) {
    ctx.beginPath();
    ctx.moveTo(50, 180);
    ctx.lineTo(160, 180);
    ctx.stroke();
    ctx.closePath();
  } else if (num == 8) {
    ctx.beginPath();
    ctx.moveTo(75, 180);
    ctx.lineTo(75, 60);
    ctx.stroke();
    ctx.closePath();
  } else if (num == 7) {
    ctx.beginPath();
    ctx.moveTo(75, 60);
    ctx.lineTo(150, 50);
    ctx.stroke();
    ctx.closePath();
  } else if (num == 6) {
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(150, 70);
    ctx.stroke();
    ctx.closePath();
  } else if (num == 5) {
    ctx.beginPath();
    ctx.moveTo(165, 85);
    ctx.arc(150, 85, 15, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.closePath();
  } else if (num == 4) {
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(150, 140);
    ctx.stroke();
    ctx.closePath();
  } else if (num == 3) {
    ctx.beginPath();
    ctx.moveTo(150, 110);
    ctx.lineTo(120, 110);
    ctx.stroke();
    ctx.closePath();
  } else if (num == 2) {
    ctx.beginPath();
    ctx.moveTo(150, 110);
    ctx.lineTo(180, 110);
    ctx.stroke();
    ctx.closePath();
  } else if (num == 1) {
    ctx.beginPath();
    ctx.moveTo(150, 140);
    ctx.lineTo(120, 160);
    ctx.stroke();
    ctx.closePath();
  } else if (num == 0) {
    ctx.beginPath();
    ctx.moveTo(150, 140);
    ctx.lineTo(180, 160);
    ctx.stroke();
    ctx.closePath();
    dpHint.innerHTML = "Game Over!";
  }
};
//drawing end
//main start
var hintNum = mkHintNum();
var answerNum = mkAnswerNum();
crtStr = mkQuiz(hintNum, answerNum);
prtQuiz(crtStr);
prtHint(hint[hintNum][0]);
// main end
console.log(crtStr);
console.log("힌트 :", hint[hintNum][0]);
console.log(hint[hintNum][answerNum]);

// a.join(); *a.join(""); : 1234, a.join("-"); : 1-2-3-4
// var a = "1, 2, 3, 4";
// a.split(",");
// //결과 : ['1', '2', '3', '4']
