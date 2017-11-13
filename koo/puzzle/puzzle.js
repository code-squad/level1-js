//Generate array and give value in each puzzle. (with innerHTML value)
function generateArray(arr) {
  for (var i = 0; i < 4; i++) {
    arr[i] = [];
    for (var j = 0; j < 4; j++) {
      if (i === 3 && j === 3) {   //At first, arr[3][3] is "X"
        document.getElementById('n'+i+j).value = "X";
        arr[i][j] = document.getElementById('n'+i+j);
        document.getElementById('n'+i+j).innerHTML = document.getElementById('n'+i+j).value;
        break;
      }else {
        document.getElementById('n'+i+j).value = i * 4 + j + 1;
        arr[i][j] = document.getElementById('n'+i+j);
        document.getElementById('n'+i+j).innerHTML = document.getElementById('n'+i+j).value;
      }
    }
    console.log(arr[i]);
  }
}

//If user click puzzle,
function click(arr) {
  // arr.onclick = repeat;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      arr[i][j].onclick = search;
    }
  }
}

//Search up, down, left, right.
//If value "X" is in there, It will be suffled by function swapX/swapY
//And change its style by makeXcolor
function search() {
  var temp;
  var sliceName= [];
  sliceName = this.id.split("");
  console.log(sliceName);
  var x = parseInt(sliceName[1]);
  var y = parseInt(sliceName[2]);
  if (x > 0 && arr[x-1][y].innerHTML === "X"){    //up
    swapX(x, y, x - 1);
    makeXcolor();
  }else if (x < 3 && arr[x+1][y].innerHTML === "X") {   //down
    swapX(x, y, x + 1);
    makeXcolor();
  }else if (y > 0 && arr[x][y-1].innerHTML === "X") {   //left
    swapY(x, y, y - 1);
    makeXcolor();
  }else if (y < 3 && arr[x][y+1].innerHTML === "X"){    //right
    swapY(x, y, y + 1);
    makeXcolor();
  }
}

//This is up & down swap function
function swapX(x, y, x2) {
  var temp = arr[x][y].value;
  arr[x][y].value = arr[x2][y].value;
  arr[x2][y].value = temp;
  arr[x][y].innerHTML = arr[x][y].value;
  arr[x2][y].innerHTML = arr[x2][y].value;
  countNum += 1;
  document.getElementById("moveNum").innerHTML = countNum;
}
//This is left & right swap function
function swapY(x, y, y2) {
  var temp = arr[x][y].value;
  arr[x][y].value = arr[x][y2].value;
  arr[x][y2].value = temp;
  arr[x][y].innerHTML = arr[x][y].value;
  arr[x][y2].innerHTML = arr[x][y2].value;
  countNum += 1;
  document.getElementById("moveNum").innerHTML = countNum;
}
//Change style
//if value is "X", its color is same as back-ground-color
function makeXcolor() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (document.getElementById('n'+i+j).value === 'X') {
        document.getElementById('n'+i+j).style.background = '#2979FF';
        document.getElementById('n'+i+j).style.color = '#2979FF';
        document.getElementById('n'+i+j).style.border = 'dotted';
      }else {
        document.getElementById('n'+i+j).style.background = 'orange';
        document.getElementById('n'+i+j).style.color = 'black';
        document.getElementById('n'+i+j).style.border = 'solid';
      }
    }
  }
}
//First swap to make a question
function randomSwap(arr, x, y, count) {
  if (count <= 0) {
    return;
  }else {
    var nextPos = chooseSwapPos(x, y);

    if (nextPos === 0) {
      randomSwap(arr, x, y, count - 1);
    }else if (nextPos === 1) {
      randomSwap(arr, x - 1, y, count - 1);
    }else if (nextPos === 2) {
      randomSwap(arr, x + 1, y, count - 1);
    }else if (nextPos === 3) {
      randomSwap(arr, x, y - 1, count - 1);
    }else if (nextPos === 4) {
      randomSwap(arr, x, y + 1, count - 1);
    }
  }
}
//Choose direction to swap
function chooseSwapPos(x, y) {
  var posNum = parseInt(Math.ceil(Math.random() * 4));
  if (posNum === 1) {   //UP
    if (x - 1 < 0) {
      return 0;
    }
    swapX(x, y, x - 1);
    return 1;
  }else if (posNum === 2) {   //DOWN
    if (x + 1 > 3) {
      return 0;
    }
    swapX(x, y, x + 1);
    return 2;
  }else if (posNum === 3) {   //LEFT
    if (y - 1 < 0) {
      return 0;
    }
    swapY(x, y, y - 1);
    return 3;
  }else if (posNum === 4) {   //RIGHT
    if (y + 1 > 3) {
      return 0;
    }
    swapY(x, y, y + 1);
    return 4;
  }
}

//-------------------MAIN START----------------------
var arr = [];

generateArray(arr);

var countNum;
resultStr = countNum;

randomSwap(arr, 3, 3, 100);
countNum = 0;
document.getElementById("moveNum").innerHTML = countNum;
click(arr);
makeXcolor();
