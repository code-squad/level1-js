//layout
var divLife = document.getElementById('life');
var divMesg = document.getElementById('message');
var keys = document.getElementById('keys');
var showButton = document.getElementById('hint_button');
var hintMessage = document.getElementById('hint_msg');


var hintToggle = false;

showButton.onclick = function() {
  if (!hintToggle) {
    hintMessage.innerHTML = game.hint;
    hintToggle = true;
  } else {
    hintMessage.innerHTML = "";
    hintToggle = false;
  }
}

for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++ ) {
  var str = String.fromCharCode(i);
  var button = document.createElement('button');
  button.innerHTML = str;
  button.className += "alphabet";
  keys.appendChild(button);
  if (str === 'm') {
    keys.appendChild(document.createElement("br"));
  }
}

keys.onclick = function(event) {
  //outside button
  if (!!event.target.id) {
    console.log("outside");
    return;
  }
  var x = event.target.innerHTML;
  console.log(x);
  game.checkWords(x);
  game.updateDisplay();
}



//Initialize Game
var game = {life: 5, count: 0};

game.init = function() {
  var f = "apple red;banana yellow;kiwy green;watermelon blue;strawberry red";
  var farr = f.split(";");

  var idx = Math.floor(Math.random() * farr.length);
  [this.answer, this.hint] = farr[idx].split(" ");
  this.guess = [];
  for (var i = 0; i < this.answer.length; i++) {
    this.guess.push('_');
  }
};
game.init();
console.log(game);


game.checkWords = function(letter) {
  var find = false;
  var ans = this.answer;
  for (var i = 0; i < ans.length; i++) {
    //맞췄다.
    if (ans[i] === letter) {
      game.count++;
      game.guess[i] = letter;
      find = true;
    }
  }
  //못 찾았다면
  if (!find) {
    game.life--;
  }
};

game.showResult = function() {
  return game.guess.join(" ");
}

game.updateDisplay = function() {
  updateLife();
  updateMesg();
  if (this.life === 0) {
    this.gameOver();
  }
  if (this.count === this.answer.length) {
    this.clear();
  }
};

var updateLife = function() {
  divLife.innerHTML = game.life;
};
var updateMesg = function() {
  divMesg.innerHTML = game.showResult();
};

var showHint = function() {
  alert("Hint:" + answer.hint);
}

game.clear = function() {
  keys.innerHTML = "Cogratulation!";
  document.body.style.backgroundColor = "yellow";
  document.getElementById('hint').remove();
}

game.gameOver = function() {
  alert("다음 기회에");
  keys.innerHTML = "Game Over";
  document.getElementById('hint').remove();
}

game.updateDisplay();
