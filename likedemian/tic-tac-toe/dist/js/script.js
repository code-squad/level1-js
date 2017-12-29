function initGame() {
  document.turn = "X";
  message(document.turn + " 차례입니다.");
}



function message(msg) {
  document.getElementById('message').innerText = msg;
}


function nextTurn(matrix) {
  if (matrix.innerText == "") {
    matrix.innerText = document.turn;
    switchTurn();
  } else {
    message("이미 체크된 곳에 둘 수 없습니다.")
  }
}



function switchTurn() {
  if (checkWinner(document.turn)) {
    alert(document.turn + "의 승리입니다");
  } else if (document.turn === "X") {
    document.turn = "O";
    message(document.turn + " 차례입니다.")
  } else {
    document.turn = "X";
    message(document.turn + " 차례입니다.")
  }
}



function checkWinner(move) {
  var result = false;
  if (
    checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)) {
    result = true;
  } 
  return result;
}



function checkRow(a, b, c, move) {
  var result = false;
  if (checkMatrix(a) == move && checkMatrix(b) == move && checkMatrix(c) == move) {
    result = true;
  }
  return result;
}



function checkMatrix(num) {
  return document.getElementById('m' + num).innerText;
}