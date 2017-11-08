var makeAnswerList = function() {
  var answerList = ["apple", "grape", "watermelon",
                    "korea", "japan", "canada", "germany",
                    "soccer", "basketball", "marathone",
                    "desk", "teacher", "student", "uniform",
                    "suit", "jean", "jacket", "innerwear"];

  return answerList;
};

var makeHintList = function() {
  var hintList = ["fruits", "nation", "sports", "school", "clothes"];

  return hintList;
};

var drawResult = function(resultNum) {
  var showingList = [];
  for (var i = 0; i < answerList[resultNum].length; i++) {
    showingList[i] = "_";
  }
  return showingList;
};

var giveHint = function() {
  if (resultNum < 3) {
    document.getElementById('hint').innerHTML = "HINT IS : " + hintList[0];
  }else if (resultNum >= 3 && resultNum < 7) {
    document.getElementById('hint').innerHTML = "HINT IS : " + hintList[1];
  }else if (resultNum >= 7 && resultNum < 10) {
    document.getElementById('hint').innerHTML = "HINT IS : " + hintList[2];
  }else if (resultNum >= 10 && resultNum < 14) {
    document.getElementById('hint').innerHTML = "HINT IS : " + hintList[3];
  }else {
    document.getElementById('hint').innerHTML = "HINT IS : " + hintList[4];
  }
};

var compare = function(alpabet) {
  var find = false;
  for (var i = 0; i < answerList[resultNum].length; i++) {
    if (answerList[resultNum][i] === alpabet) {
      showingList[i] = alpabet;
      document.getElementById('result').innerHTML = "RESULT IS : " + showingList.join(" ");
      document.getElementById('life').innerHTML = "YOUR LIFE : [ " + gameStatus.life + " ]";
      find = true;
      gameStatus.correct += 1;
    }
  }

  if (!find) {
    gameStatus.life -= 1;
    document.getElementById('life').innerHTML = "YOUR LIFE : [ " + gameStatus.life + " ]";
  }
};

var check = function(value) {
  if (gameStatus.life !== 0) {
    compare(value);
    drawImg(gameStatus.life);
    if (gameStatus.life === 0) {
      document.getElementById('msg').innerHTML = "GAME OVER. YOU DIE.";
    }else if (gameStatus.correct == answerList[resultNum].length) {
      document.getElementById('msg').innerHTML = "YOU WIN. YOU SAVE LIFE.";
    }
  }
};

var drawImg = function(num) {
  if (num == 10) {

  }else if (num == 9) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(50, 430);
    ctx.lineTo(300,430);
    ctx.stroke();
    ctx.closePath();
  }else if (num == 8) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(100, 430);
    ctx.lineTo(100,100);
    ctx.stroke();
    ctx.closePath();
  }else if (num == 7) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(100, 100);
    ctx.lineTo(300,100);
    ctx.moveTo(100, 150);
    ctx.lineTo(150, 100);
    ctx.stroke();
    ctx.closePath();
  }else if (num == 6) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(300, 100);
    ctx.lineTo(300,130);
    ctx.stroke();
    ctx.closePath();
  }else if (num == 5) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.arc(300,160,30,0,Math.PI * 2,true);
    ctx.stroke();
    ctx.closePath();
  }else if (num == 4) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(300, 190);
    ctx.lineTo(300,300);
    ctx.stroke();
    ctx.closePath();
  }else if (num == 3) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(250, 210);
    ctx.lineTo(300,210);
    ctx.stroke();
    ctx.closePath();
  }else if (num == 2) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(350, 210);
    ctx.lineTo(300,210);
    ctx.stroke();
    ctx.closePath();
  }else if (num == 1) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(300, 300);
    ctx.lineTo(250,380);
    ctx.stroke();
    ctx.closePath();
  }else if (num == 0) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(300, 300);
    ctx.lineTo(350,380);
    ctx.moveTo(280, 175);
    ctx.lineTo(295,170);
    ctx.moveTo(320, 175);
    ctx.lineTo(305,170);
    ctx.stroke();
    ctx.closePath();
  }
};
//--------------------------------MAIN---------------------------------
var canvas = document.getElementById("img");
var ctx = canvas.getContext("2d");
ctx.strokeRect(0, 0, 440, 480);

var answerList = makeAnswerList();
var hintList = makeHintList();

var gameStatus = {
  life: 10,
  correct: 0
};

var resultNum = Math.ceil(17 * Math.random());
var showingList = drawResult(resultNum);
console.log(answerList[resultNum]);

document.getElementById('life').innerHTML = "YOUR LIFE : [ " + gameStatus.life + " ]";
document.getElementById('result').innerHTML = "RESULT IS : " + showingList.join(" ");
