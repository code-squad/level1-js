//file:///C:/Users/somed/proj/practice/breakout.html
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//bgimage start
var bgImage = new Image();
var bgload = false;
bgImage.onload = function() {
  bgload = true;
};
var drawBackground = function() {
  ctx.drawImage(bgImage, 0, 0);
};
bgImage.src = "https://eoimages.gsfc.nasa.gov/images/imagerecords/51000/51969/EarthMoon_juno_2011238_lrg.jpg";
var drawBackground = function() {
  ctx.drawImage(bgImage, 0, 0);
};
//bgimage end
//ball start
var ball = {
  x: 50,
  y: 50,
  dx: 0,
  dy: 0,
  radius: 20,
  color: "red",
  move: function() {
      this.x += this.dx;
      this.y += this.dy;
  },
  setSpeed: function(x, y) {
    this.dx = x;
    this.dy = y;
  },
  check: function() {
    if (this.x < this.radius || this.x > 640 - this.radius) {
      this.dx *= (-1.2);  //
    }
    if (this.y < this.radius) {
      this.dy *= (-1.2);
    }
    if (this.y > 480 - this.radius) {
      alert("game over");
      clearInterval(x);
      console.log(x);
    }
  }
};
ctx.drawBall = function() {
  this.beginPath();
  this.fillStyle = ball.color;
  this.ellipse(ball.x, ball.y, ball.radius, ball.radius, 0, 0, 2 * Math.PI);
  this.fill();
};
//ball end
//paddle start
var rightPressed = false;
var leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
var paddle = {
  h: 10,
  w: 75,
  x: (canvas.width - 75) / 2,
  color : "blue",
  draw : function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.rect(this.x, canvas.height-paddle.h, paddle.w, paddle.h);
    ctx.fill();
    ctx.closePath();
  },
  move: function() {
      if (rightPressed) {
        if (paddle.x < 640 - paddle.w) {
          paddle.x += 9;
        }
      } else if (leftPressed) {
        if (paddle.x > 0) {
          paddle.x -= 9;
        }
      }
  },
  check : function() {
    if(ball.y + ball.radius > canvas.height-paddle.h) {
            ball.dy *= (-1);
    }
  }
};
//paddle end
//main start
ball.setSpeed(5, 5);
var drawAll = function() {
  if (bgload) {
    drawBackground();
  }
  ball.check();
  ball.move();
  ctx.drawBall();
  paddle.check();
  paddle.draw();
  paddle.move();
};
var x = setInterval(drawAll, 25);
//main end
//벽 객체 생성, 배열(2차원) 에 넣기.
