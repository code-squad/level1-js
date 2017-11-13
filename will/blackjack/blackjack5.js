var dealerScore = document.getElementById("dealerScore");
var playerScore = document.getElementById("playerScore");
var message = document.getElementById("message");
var btnHit = document.getElementById("btnHit");
var btnStand = document.getElementById("btnStand");
var btnRegame = document.getElementById("btnNewGame");
var manualMessage = document.getElementById("manualMessage");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#0da2d8";
ctx.lineWidth = 7;
ctx.strokeRect(0, 0, 550, 350);

var dealer = {
  name : "dealer",
  cards : [],
  cardsValue : [],
  scoreSum : 0
}

var player = {
  name : "player",
  cards : [],
  cardsValue : [],
  scoreSum : 0,
  result : ""
}

player.hit = function(shuffledCards) {
  if (this.scoreSum <= 21 && dealer.scoreSum <= 21) {
    this.cards.push(shuffledCards.pop());
    changeStringToNum(this);
    this.scoreSum = sumCardsValue(this);
    console.log(this.cards);
    console.log(this.cardsValue);
    for (i = 0; i < this.cards.length; i++ ){
         renderCard(this, i);
    }
  }
  if (this.scoreSum > 21) {
    dealerScore.innerHTML = dealer.scoreSum;
    playerScore.innerHTML = this.scoreSum;
    message.innerHTML = "player burst. player lose";
    btnHit.disabled = "disabled";
    btnStand.disabled = "disabled";
    for (i = 0; i < dealer.cards.length; i++ ){
         renderCard(dealer, i);
    }
  } else {
    dealerScore.innerHTML = "?";
    playerScore.innerHTML = this.scoreSum;
    message.innerHTML = "hit or stand?";
  }
}

player.stand = function(shuffledCards) {
  while (dealer.scoreSum < 17) {
    var a = dealer.hit(shuffledCards);
  }
  if (a !== "win") {
    dealerScore.innerHTML = "?";
    playerScore.innerHTML = this.scoreSum;
    if (this.scoreSum > dealer.scoreSum) {
      dealerScore.innerHTML = dealer.scoreSum;
      message.innerHTML = "player win";
    } else if (this.scoreSum < dealer.scoreSum) {
      dealerScore.innerHTML = dealer.scoreSum;
      message.innerHTML = "player lose";
    } else {
      dealerScore.innerHTML = dealer.scoreSum;
      message.innerHTML = "draw";
    }
  }
  btnHit.disabled = "disabled";
  btnStand.disabled = "disabled";
  for (i = 0; i < dealer.cards.length; i++ ){
       renderCard(dealer, i);
  }
}

dealer.hit = function(shuffledCards) {
  this.cards.push(shuffledCards.pop());
  changeStringToNum(this);
  this.scoreSum = sumCardsValue(this);
  console.log(this.cards);
  console.log(this.cardsValue);
  if (this.scoreSum > 21) {
    dealerScore.innerHTML = this.scoreSum;
    playerScore.innerHTML = player.scoreSum;
    message.innerHTML = "dealer burst. player win";
    btnHit.disabled = "disabled";
    btnStand.disabled = "disabled";
    return "win";
  }
}

function makeCards() {
  var picName = "";
  var index = 0;
  var numArr = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"];
  var imageFactory = [];
  var shapeArr = ["S", "H", "D", "C"];
  var cardsArr = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 13; j++) {
      cardsArr[i * 13 + j] =  shapeArr[i] + "@" + numArr[j];
      picName = "./images/"+ shapeArr[i] + "@" + numArr[j] + ".png";
    }
  }
  return cardsArr;
}

function shuffleCards(cardsArr) {
  for (var i = cardsArr.length - 1; i >= 0; i--) {
    var idx = Math.floor(Math.random() * i);
    var temp = cardsArr[idx];
    cardsArr[idx] = cardsArr[i];
    cardsArr[i] = temp;
  }
  return cardsArr;
}

function giveCard(cardsArr, target) {
  target.cards.push(cardsArr.pop());

  for (i = 0; i < target.cards.length; i++ ){
       renderCard(target, i);
  }
}

//////////인터넷의 도움으로 해결은 했지만, renderCard() 아직 이해 안된다///////////
function renderCard(target, i) {
  if (target === player) {
    var cardImage = new Image();
    cardImage.onload = (function(value){
        return function(){
            ctx.drawImage(this, 20 + (i * 65), 258, 54, 68);
        }
    })(i);
    cardImage.src = "./images/" + target.cards[i] + ".png"
  } else if(target === dealer){
    var cardImage = new Image();
    cardImage.onload = (function(value){
        return function(){
            ctx.drawImage(this, 476 - (i * 65), 20, 54, 68);
        }
    })(i);
    cardImage.src = "./images/" + target.cards[i] + ".png"
  }
}

function drawBack() {
  var cardImage = new Image();
  cardImage.onload = function() {
    ctx.drawImage(cardImage, 476, 20, 54, 68);
  }
  cardImage.src = "./images/back.png";
}

function changeStringToNum(target) {
    var temp = target.cards[target.cards.length - 1];
    var value = temp.charAt(temp.length - 1);
    if (value === "A") {
      target.cardsValue.push(11);
    } else if (value === "0" || value === "J" || value === "Q" || value === "K") {
      target.cardsValue.push(10);
    } else {
      target.cardsValue.push(parseInt(value));
    }
}

function sumCardsValue(target) {
  var sum = 0;
  for (var i = 0; i < target.cardsValue.length; i++) {
    sum += target.cardsValue[i];
  }
  if (sum > 21 && target.cardsValue.indexOf(11) !== -1) {
    sum = 0;
    target.cardsValue.splice(target.cardsValue.indexOf(11), 1, 1);
    for (var i = 0; i < target.cardsValue.length; i++) {
      sum += target.cardsValue[i];
    }
  }
  target.scoreSum = sum;
  return sum;
}

var cards = makeCards();
var shuffledCards = shuffleCards(cards);

function start() {
  btnHit.disabled = false;
  btnStand.disabled = false;
  giveCard(shuffledCards, dealer);
  changeStringToNum(dealer);
  giveCard(shuffledCards, dealer);
  changeStringToNum(dealer);
  giveCard(shuffledCards, player);
  changeStringToNum(player);
  giveCard(shuffledCards, player);
  changeStringToNum(player);
  sumCardsValue(dealer);
  sumCardsValue(player);
  console.log(dealer.cards);
  console.log(dealer.cardsValue);
  console.log(player.cards);
  console.log(player.cardsValue);
  dealerScore.innerHTML = "?";
  playerScore.innerHTML = player.scoreSum;
  message.innerHTML = "hit or stand?";
  setTimeout(function() { drawBack();}, 10);
}

function newGame() {
  ctx.clearRect(0, 0, 550, 350);
  ctx.strokeStyle = "#0da2d8";
  ctx.lineWidth = 7;
  ctx.strokeRect(0, 0, 550, 350);
  dealer.cards = [];
  dealer.cardsValue = [];
  dealer.scoreSum = 0;
  player.cards = [];
  player.cardsValue = [];
  player.scoreSum = 0;
  player.result = "";
  cards = makeCards();
  shuffledCards = shuffleCards(cards);

  start();
}
////////////////////////////////////////////////////////////////////////////////////
start();
