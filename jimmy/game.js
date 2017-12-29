// Decks

function Game() {
  this.currentTurnIndex = 0;
  this.deck = new Deck();
}

function Deck() {
  this.cards = [];
  this.cardsDrawn = 0;
  var shapes = ['spades', 'diamonds','hearts','clubs'];
  var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  for (var shape in shapes) {
    for (var number of numbers) {
      this.cards.push(new Card(numbers[number],shapes[shape]));
    }
  }
}

Deck.prototype.getCard = function () {
  if (this.cards.length === this.cardsDrawn) {
    return null;
    // 아직 카드 안받을때
  }
  var random = Math.floor(Math.random() * (this.cards.length - this.cardsDrawn));
  var temp = this.cards[random];

  this.cards[random] = this.cards[this.cards.length - this.cardsDrawn - 1];
  this.cards[this.cards.length - this.cardsDrawn - 1] = temp;
  this.cardsDrawn++;

  return temp;
}

function Card(number, shape) {
  this.number = number;
  this.shape = shape;
}

Card.prototype.value = function() {
  if (this.number == "J" || "Q" || "K") {
    return [0];
  } else if (this.number = "A") {
    return [1];
  } else {
    return Number(this.number, 10);
  }
};

function Player() {
  this.cards = [];
}

Player.prototype.addCard = function () {
  this.cards.push(deck.getCard());
};

var deck = new Deck();
var card = new Card();
console.log(deck);
