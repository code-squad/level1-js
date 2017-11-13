//file:///Users/jack/proj/practice/mkNumPuzzle.html
/*
4. 추가 구현
  - 다 정리했으면 성공! 메세지 출력!
 */
//display start
var h = document.getElementById('h1');
h.innerHTML = "Jack's first 15Puzzle";
var mix = document.getElementById('mix');
mix.innerHTML = "Mix!";
mix.onclick = function() { shuffleTile(); };
//display end
//moves start
var moves = 0;
var textMoves;
textMoves = document.getElementById('textMoves');
textMoves.innerHTML = "moves : " + moves;
function resetMoves() {
  moves = 0;
  textMoves.innerHTML = "moves : " + moves;
}
function updateMoves() {
  moves++;
  textMoves.innerHTML = "moves : " + moves;
}
//moves end
//variables start
var n_00, n_01, n_02, n_03,
    n_10, n_11, n_12, n_13,
    n_20, n_21, n_22, n_23,
    n_30, n_31, n_32, n_33;
var nArray = [[n_00, n_01, n_02, n_03],
              [n_10, n_11, n_12, n_13],
              [n_20, n_21, n_22, n_23],
              [n_30, n_31, n_32, n_33]];
var numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
var colum = 4;
//varatibales end
//tile start
function mkTile() {
  var idx = 0;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      nArray[i][j] = document.getElementById("n" + i + j);
      nArray[i][j].innerHTML = numArray[idx];
      idx++;
      (function(m,n) {
      nArray[i][j].onclick = function() {
        clickTile(m, n);
      };
    })(i,j);
    }
  }
  nArray[3][3].style.color = "white";
}
function shuffleTile() {
  mkTile();
  for(var i = 0; i < 500; i++) {
    clickTile(Math.floor(Math.random() * 4), Math.floor(Math.random() * 4));
  }
  resetMoves();
}
function zeroTowhite(x1, y1, x2, y2) {
  nArray[x1][y1].style.color ="white";
  nArray[x2][y2].style.color = "orange";
}
function clickTile(x1, y1) {
    if (x1 > 0 && nArray[x1 - 1][y1].innerHTML === '0') {  //up
    tileSwap(nArray, x1, y1, x1 - 1, y1);
    zeroTowhite(x1, y1, x1 - 1, y1);
    updateMoves();
    return true;
  } else if ( y1 > 0 && nArray[x1][y1 - 1].innerHTML === '0') { //left
    tileSwap(nArray, x1, y1, x1, y1 - 1);
    zeroTowhite(x1, y1, x1,  y1 - 1);
    updateMoves();
    return true;
  } else if (y1 < 3 && nArray[x1][y1 + 1].innerHTML === '0') { //right
    tileSwap(nArray, x1, y1, x1, y1 + 1);
    zeroTowhite(x1, y1, x1,  y1 + 1);
    updateMoves();
    return true;
  } else if (x1 < 3 && nArray[x1 + 1][y1].innerHTML === '0') { //down
    tileSwap(nArray, x1, y1, x1 + 1, y1);
    zeroTowhite(x1, y1, x1 + 1, y1);
    updateMoves();
    return true;
  } else {
    return false;
  }
}
function tileSwap(arr, x1, y1, x2, y2) {
  var temp;
  temp = arr[x1][y1].innerHTML;
  arr[x1][y1].innerHTML = arr[x2][y2].innerHTML;
  arr[x2][y2].innerHTML = temp;
}
//tile end
//main start
mkTile();
//main end
