var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//canvas end
var h = document.getElementById("h1");
h.innerHTML = "Snake patterned CodeSquad Game";
var btn = document.getElementById("btn");
btn.innerHTML = "REPLAY!";
var score = document.getElementById("score");
var dpscore = "";
score.innerHTML = "Current sentence";
var sentence = document.getElementById("sentence");
sentence.innerHTML = "CODE" + dpscore;
function drawBoarder () {
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(0, 0, 400, 10); //
  ctx.fillRect(0, 390, 400, 10);
  ctx.fillRect(0, 0, 10, 400);
  ctx.fillRect(390, 0, 10, 400);
}
//display end
function gameOver() {
  clearInterval(x);
}
function replay() {
  location.reload();
}
//gameover end
var Block = function(col, row) {
  this.col = col;
  this.row = row;
};
var dpsentence = ["S","Q","U","A","D ","M","A","S","T","E","R ","& ","M","E","M","B","E",
"R ","F","I","G","H","T","I","N","G!"];
Block.prototype.drawSquare = function (i) {
  var x = this.col * 10;
  var y = this.row * 10;
  var arr1 = ["C","O","D","E","S","Q","U","A","D"];
  var arr2 = ["M","A","S","T","E","R","&","M","E","M","B","E","R"];
  var arr3 = ["F","I","G","H","T","I","N","G"];

  if (i < 9) {
    ctx.font = "13px Verdana";
    ctx.fillStyle = "blue";
    ctx.fillText(arr1[i], x, y);
  } else if (i >= 9 && i < 22) {
    ctx.font = "13px Verdana";
    ctx.fillStyle = "purple";
    ctx.fillText(arr2[i - 9], x, y);
  } else {
    if (i === 29) {
      ctx.font="13px Verdana";
      ctx.fillStyle = "red";
      ctx.fillText(arr3[i - 22], x, y);
      gameOver();
      score.innerHTML = "FINISH!!";
      sentence.innerHTML = "CodeSquad Master & Member Fighting!";
      return;
    }
  ctx.font="13px Verdana";
  ctx.fillStyle = "red";
  ctx.fillText(arr3[i - 22], x, y);
  }
};
Block.prototype.equal = function(otherBlock) {
  return this.col === otherBlock.col && this.row === otherBlock.row;
};
Block.prototype.drawFood = function(color) {
  var x1 = this.col * 10;
  var y1 = this.row * 10 - 10;
  ctx.fillStyle = color;
  ctx.fillRect(x1, y1, 10, 10);
};
//block end
var snake = {
    segments : [new Block(7,5),
                new Block(6,5),
                new Block(5,5),
                new Block(4,5)],
    direction : "right",
    nextDirection : "right",
    color: "blue",
    draw : function() {
      for (var i = 0; i < this.segments.length; i++) {
        this.segments[i].drawSquare(i);
      }
    },
    move : function() {
      var head = this.segments[0];
      var newHead;

      this.direction = this.nextDirection;
      if (this.direction === "right") {
        newHead = new Block(head.col + 1, head.row);
      } else if (this.direction === "left") {
        newHead = new Block(head.col - 1, head.row);
      } else if (this.direction === "up") {
        newHead = new Block(head.col, head.row - 1);
      } else if (this.direction === "down") {
        newHead = new Block(head.col, head.row + 1);
      }

      if(this.checkCollision(newHead)) {
        gameOver();
        return;
      }

      this.segments.unshift(newHead);
      if(newHead.equal(coffee.position)) {
        coffee.move();
        dpscore += dpsentence[0];
        dpsentence.shift();
        sentence.innerHTML =  "CODE" + dpscore;
      } else {
        this.segments.pop();
      }
    },
    checkCollision: function(head) {
      var leftCollision = (head.col === 0);
      var topCollision = (head.row === 0 + 1);
      var rightCollision = (head.col === 40 - 1);
      var bottomCollision = (head.row === 40);

      var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

      var selfCollision = false;
      for (var i = 0; i < this.segments.length; i++) {
        if (head.equal(this.segments[i])) {
          selfCollision = true;
        }
      }
      return wallCollision || selfCollision;
    },
    setDirection : function(newDirection) {
      if (this.direction === "up" && newDirection === "down") {
        return;
      } else if (this.direction === "right" && newDirection === "left") {
        return;
      } else if (this.direction === "down" && newDirection === "up") {
        return;
      } else if (this.direction === "left" && newDirection === "right") {
        return;
      }
      this.nextDirection = newDirection;
    }
};
//snake end
var coffee = {
  position : new Block(10,10),
  move : function() {
    var rx = Math.floor(Math.random() * 37) + 2;
    var ry = Math.floor(Math.random() * 38) + 2;
    this.position = new Block(rx, ry);
  },
  draw : function() {
    this.position.drawFood("Green");
  }
};
//coffee end
var directions = {
  37 : "left",
  38 : "up",
  39 : "right",
  40 : "down"
};
var isKeyDown = [];
window.addEventListener("keydown",onKeyDown,false);
window.addEventListener("keyup",onKeyUp,false);
function onKeyDown(e){
  var newDirection = directions[e.keyCode];
    if(newDirection !== undefined) {
      snake.setDirection(newDirection);
    }
}
function onKeyUp(e){
  isKeyDown[e.keyCode] = false;
}
//keyboard end
//main start
var drawAll = function() {
  ctx.clearRect(0,0,400,400);
  snake.move();
  snake.draw();
  coffee.draw();
  drawBoarder();
};
var x = setInterval(drawAll, 90);
//main end
