var cards = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] ];
//console.log(cards);
var player = [2,4];
var banker = [4,3];
var sum_player = 0
var sum_banker = 0

var receive_the_card = function(n) {
  var player = [];
  for (var i = 0; i < n; i++){
    player.push(cards[Math.floor(Math.random()*3)][Math.floor(Math.random()*12)])
  }
  console.log(player);
  console.log(cards);
}
receive_the_card(2);

var check_the_natural = function (player, banker) {
  for (var i of player) {
    sum_player += i;
    //console.log("first sum_player is %d i is %d", sum_player, i);
    if (sum_player === 8 || sum_player === 9) {
      console.log("sum of player is %d, Natural", sum_player);
    }
  }
  for (var j of banker) {
    sum_banker += j;
    //console.log("first sum_banker is %d i is %d", sum_banker, j);
    if (sum_banker === 8 || sum_banker === 9) {
      console.log("sum of banker is %d, Natural", sum_banker);
      }
    }
    if (sum_banker < sum_player) {
      console.log("player is win");
    } else {
      console.log("banker is win");
    }
  }
 check_the_natural(player, banker);

var player_turn = function(player, banker) {
  if (sum_player !== 8 && sum_player !== 9 && sum_banker !== 8 && sum_banker !== 9) {
    if (sum_player === 6 || sum_player === 7) {
      console.log("stand");
    } else if (sum_player >= 0 || sum_player <= 5) {
      console.log("plus one card");
    }
  }
}
player_turn(player, banker);
