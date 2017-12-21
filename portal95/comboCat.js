var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//clear page
function clear() {
  ctx.fillStyle = "White";
  ctx.fillRect(0, 0, 480, 480);
  ctx.strokeStyle = "Black";
  ctx.strokeRect(0, 0, 480, 480);
}

//draw yourself
function drawMe() {
  ctx.fillStyle = "Green";
  ctx.beginPath();
  //x, y, r, startAngle, endAngle, counterClockWise
  ctx.arc(100, 300, 50, 0, Math.PI * 2);
  ctx.fill();
}
//COMBO board
function combo() {
  missed();
  if(hit === 1){
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("COMBO " + comboCount + " !!!", canvas.width/2, canvas.height/2)
  }
}
var comboCount = 0;
function missed() {
  if(enemyX === 110){
    miss = 1;
  }
  if(miss === 1){
    missInit = 1;
  }
  if(missInit >= 1){
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("MISS", canvas.width/2, canvas.height/2)
    comboCount = 0;
    hit = 0;
    missInit ++;
    if(missInit === 7) {
      missInit = 0;
    }
  }
}
var miss = 0;
var missInit = 0;
//draw enemy
function drawEnemy() {
  ctx.fillStyle = "Blue";
  ctx.beginPath();
  //x, y, r, startAngle, endAngle, counterClockWise
  ctx.arc(enemyX, enemyY, 50, 0, Math.PI * 2);
  ctx.fill();
  if(enemyX >= 550 || enemyX <= -100){
    hit = 0;
    enemyX = 550;
    enemyY = 300;
    a = -30;
  }
  if(hit === 1){
    enemyX += 10;
    enemyY += a;
    a += 5
  } else {
    enemyX -= 5;
  }
}
//***enemy coordinates
var enemyX = 550;
var enemyY = 300;
var a = -30;
var hit = 0;
//attack motion
function attackMotion() {
  if(attack) {
    if ((enemyX > 220) && (hit === 0)) {
      miss = 1;
    } else if ((enemyX <= 220) && (enemyX >= 130) && (hit === 0)){
      hit = 1;
      comboCount++;
    }
    attack = false;
    atkInit = true;
  }
  if(atkInit){
    ctx.strokeStyle = "Red"
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(100, 300, 80, Math.PI * (-1 / 3), Math.PI * (-1 / 3 + swing * 1 / 16));
    ctx.stroke();
    swing++;
    if(swing === 9){
      swing = 1;
      atkInit = false;
    }
  }
}
var atkInit = false;
var swing = 1;


//Key handlers
addEventListener('keydown',keyDownHandler,false);
addEventListener('keyup',keyUpHandler,false);

function keyDownHandler(e) {
  var code = e.keyCode;
  switch(code) {
    case 32://space
      attack = true;
      break;
  }
}

function keyUpHandler(e) {
}

var spacePressed = false;

//Keys
var attack = false;

//Game running
function game() {
  clear();
  drawMe();

  attackMotion();
  drawEnemy();
  combo();
  miss = 0;
}

setInterval(game,10);
