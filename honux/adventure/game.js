var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

//image atlas data
var data = [{
"seq": 1,
"sx": 10,
"sy": 70,
"w": 38,
"h": 40},
{
  "seq":2,
  "sx":49,
  "sy":70,
  "w":26,
  "h":40
},{
  "seq" : 3,
  "sx" : 76,
  "sy" : 70,
  "w" : 26,
  "h" : 40},
  { "seq" : 4,
  "sx" : 100,
  "sy" : 70,
  "w" : 32,
  "h" : 45  },
  {
    "seq": 5,
    "sx": 131,
    "sy": 70,
    "w": 38,
    "h": 42
  }];

  var jump = {
    "seq": 9,
    "sx": 155,
    "sy": 227,
    "w": 40,
    "h": 40
  };

  data.push(data[3], data[2], data[1]);

  var bgImage = new Image();
  bgImage.src = "./game_bg.png";
  var image = new Image();
  image.src = "./game.png";

  function draw(d, x, y) {
    ctx.drawImage(image, d.sx, d.sy, d.w, d.h, x, y, d.w * 2.5, d.h * 2.5);
  }

  var delay = 7;
  var current = 0;
  var idx = 0;

  //초기 위치
  var x = 10;
  var y = 300;

  //dx, dy 는 x축, y축의 속도
  var dx = 2;
  var dy = -4;

  //xa, ya는 가속도
  var ya = 0.1;

  function drawAll() {
    ctx.clearRect(0,0, 640, 480);

    //draw background
    ctx.drawImage(bgImage, 0, 0, 640, 480);

    //draw Pin
    x = x + dx;
    dy = dy + ya;
    y = y + dy;

    if (x >= 600 || x <= 0) {
      dx = -dx;
    }
    if (y >= 300) {
      y = 300;
    }

    if (y!= 300) {
      draw(jump, x, y);
    } else {
      draw(data[idx], x, y);
    }

    current++;
    if(current >= delay) {
      idx++;
      current = 0;
    }

    if(idx > 7) {
      idx = 0;
    }
    requestAnimationFrame(drawAll);
  }
  requestAnimationFrame(drawAll);
