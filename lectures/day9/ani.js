var canvas = document.getElementById('ani');
var ctx = canvas.getContext("2d");
var bgImage = new Image();

//bgimage
var bgload = false;
bgImage.onload = function () {
  bgload = true;
};
bgImage.src = "https://i.imgur.com/M9Wm9Ai.jpg";

//score
var score = document.getElementById('score');

//draw background image
var drawBackground = function() {
  ctx.drawImage(bgImage, 0, 0);
}

var ball = {
  x: 50,
  y: 50,
  dx: 0,
  dy: 0,
  radius: 10,
  color: "red",
  move: function() {
    this.x += this.dx;
    this.y += this.dy;
  },
  setLocation: function(x, y) {
    this.x = x;
    this.y = y;
  },
  setSpeed: function(x, y) {
    this.dx = x;
    this.dy = y;
  },
  check: function() {
    if (this.x < this.radius || this.x > 640 - this.radius) {
      this.dx *= -1.1;
    }

    if (this.y < this.radius || this.y > 360 - this.radius) {
      this.dy *= -1.1;
    }
  }
};

var drawBall = function() {
  ctx.beginPath();
  ctx.fillStyle = ball.color;
  ctx.ellipse(ball.x, ball.y, ball.radius, ball.radius,
     0, 0, 2 * Math.PI);
  ctx.fill();
};


ball.setSpeed(Math.random() * 5, Math.random() * 5);

var drawAll = function() {
  if (bgload) {
    drawBackground();
  }

  score.innerHTML = parseInt(score.innerHTML) + 1;
  ball.check();
  ball.move();
  drawBall();
};

var x= setInterval(drawAll, 30);

var stop = document.getElementById('stop');

/******
* UI
*******/
stop.onclick = function() {
  if(ball.dx != 0 && ball.dy != 0) {
    ball.setLocation(320, 240);
    ball.setSpeed(0, 0);
    this.innerHTML = "Go";
  } else {
    ball.setSpeed(Math.random() * 5, Math.random() * 5);
    this.innerHTML = "Stop";
  }
}
