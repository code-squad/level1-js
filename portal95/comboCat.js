//comboCat(fix)
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//
var speed = 15;
var highScore = 0;
var g = -30;//variable for enemy drop
var a = 25;//variable for jumper
var b = 10;//variable for me.hurt
var f = 10;//variable for flyer
var fly = 0;//variable for flying motion
var e = 5;//variable for evader
var alpha = 100;//transparency for vanisher
var basicRunner = 0;//basic motion
var armorPierce = 0;
//----------------------------------------------------------
function reset(){
  g = -30;
  a = 25;
  b = 10;
  attack = false;
  me.y = 0;
  me.hp = 5;
  me.hit = false;
  me.miss = false;
  me.hurt = false;
  me.hurtCount = 0;
  me.swing = 0;
  enemy.type = "Basic";
  enemy.hit = false;
  enemy.x = 710;
  enemy.y = 390;
  combo.count = 0;
  combo.showType = "none";
  combo.showTime = 0;
}
//Image load
var backGround = new Image();
backGround.src = "backGround.png";

var comboCat = [];
var flyer = [];
var punch = [];
var basic = [];
var armor = [];
var hp;
var title;
var gameOver;
comboCat[0] = new Image();
comboCat[1] = new Image();
comboCat[2] = new Image();
comboCat[3] = new Image();
comboCat[4] = new Image();
flyer[0] = new Image();
flyer[1] = new Image();
flyer[2] = new Image();
flyer[3] = new Image();
flyer[4] = new Image();
punch[0] = new Image();
punch[1] = new Image();
punch[2] = new Image();
basic[0] = new Image();
basic[1] = new Image();
basic[2] = new Image();
basic[3] = new Image();
basic[4] = new Image();
basic[5] = new Image();
basic[6] = new Image();
basic[7] = new Image();
armor[0] = new Image();
armor[1] = new Image();
armor[2] = new Image();
hp = new Image();
title = new Image();
gameOver = new Image();

comboCat[0].src = "comboCatBasic.png";
comboCat[1].src = "attack1.png";
comboCat[2].src = "attack2.png";
comboCat[3].src = "attack3.png";
comboCat[4].src = "hurt.png";
flyer[0].src = "flyer1.png";
flyer[1].src = "flyer2.png";
flyer[2].src = "flyer3.png";
flyer[3].src = "flyer4.png";
flyer[4].src = "flyerDeath.png";
punch[0].src = "punch1.png";
punch[1].src = "punch2.png";
punch[2].src = "punch3.png";
basic[0].src = "basic1.png";
basic[1].src = "basic2.png";
basic[2].src = "basic3.png";
basic[3].src = "basic4.png";
basic[4].src = "basicTurn1.png";
basic[5].src = "basicTurn2.png";
basic[6].src = "basicTurn3.png";
basic[7].src = "basicTurn4.png";
// armor[0].src = "armor1.png";
// armor[1].src = "armor2.png";
// armor[2].src = "armor3.png";
hp.src = "hp.png";
title.src = "catEars.png";
gameOver.src = "BG.jpg";

//----------------------------------------------------------
//key event handlers
addEventListener('keydown',keyDownHandler,false);
addEventListener('keyup',keyUpHandler,false);

function keyDownHandler(e) {
  var code = e.keyCode;
  switch(code) {
    case 32://space
      if(gameStart){
        attack = true;
      }
      if(enemy.hit && !me.hurt){
        armorPierce++;
      }
      gameStart = true;
      break;
  }
}

function keyUpHandler(e) {
}

var btn = document.getElementById("space");
btn.onclick = function() {
  if(gameStart){
    attack = true;
  }
  gameStart = true;
}

//Keys
var attack = false;
var gameStart = false;
//----------------------------------------------------------
//objects
var me = {
  y: 0,
  hp: 5,
  hit: false,
  miss: false,
  hurt: false,
  hurtCount: 0,
  swing: 0,
  attack: function(){
    if(attack) {
      if ((enemy.x > 250) && (me.hit === false)) {
        me.miss = true;
      } else if ((enemy.x <= 250) && (enemy.x >= 170) && (enemy.y > 280) && (me.hit === false)){
        me.hit = true;
        combo.count++;
      }
      attack = false;
      me.swing = 1;
    }
    if((me.swing >= 1) && (me.hurt === false)){
      if(me.swing === 1){
        ctx.drawImage(comboCat[0], 0, 0);
      } else if(me.swing === 2){
        ctx.drawImage(comboCat[1], 0, 0);
      } else if(me.swing === 3){
        ctx.drawImage(comboCat[2], 0, 0);
      } else if(me.swing === 4){
        ctx.drawImage(comboCat[3], 0, 0);
      } else if(me.swing === 5){
        ctx.drawImage(comboCat[3], 0, 0);
      } else if(me.swing === 6){
        ctx.drawImage(comboCat[2], 0, 0);
      } else if(me.swing === 7){
        ctx.drawImage(comboCat[1], 0, 0);
      } else {
        ctx.drawImage(comboCat[0], 0, 0);
      }
      me.swing++;
      if(me.swing === 8){
        me.swing = 0;
      }
    }
  },
  draw: function(){
    if(enemy.x === 170){
      me.hurt = true;
      me.hp --;
    }
    if(me.hurtCount === 35){
      me.hurt = false;
      me.y = 0;
      b = 10;
      me.hurtCount = 0;
    }
    if(me.hurt === true){
      ctx.drawImage(comboCat[4], 0, me.y);
      me.y -= b;
      b -= 2 / 3
      me.hurtCount ++;
    }
    if((me.swing === 0) && (me.hurt === false)){
      ctx.drawImage(comboCat[0], 0, 0);
    }
  }
};
var enemy = {
  type:"Basic",
  hit: false,
  x:710,
  y:390,
  change: function(){
    var n = Math.floor(5 * Math.random())
    switch(n) {
      case 0://space
        enemy.type = "Basic";
        break;
      case 1:
        enemy.type = "Jumper"
        break;
      case 2:
        enemy.type = "Flyer"
        enemy.y = 100;
        break;
      case 3:
        enemy.type = "Evader"
        break;
      case 4:
        enemy.type = "Vanisher"
        break;
      // case 5:
      //   enemy.type = "Armored"
    }
  },
  draw: function(){
    switch(enemy.type){
      case "Basic":
        drawBasic();
        break;
      case "Jumper":
        drawJumper();
        break;
      case "Flyer":
        drawFlyer();
        break;
      case "Evader":
        drawEvader();
        break;
      case "Vanisher":
        drawVanisher();
        break;
      // case "Armored":
      //   drawArmored();
    };
  }
};

function drawBasic() {
  if(me.hit){
    enemy.hit = true;
  }
  ctx.drawImage(basic[Math.floor(basicRunner % 4)], enemy.x - 280, enemy.y - 250);
  basicRunner += 0.25;
  if(enemy.x > 710 || enemy.x <= -100){
    enemy.hit = false;
    enemy.x = 710;
    enemy.y = 390;
    g = -30;
    enemy.change();
  }
  if(enemy.hit){
    enemy.x += 10;
    enemy.y += g;
    g += 5;
  } else {
    enemy.x -= 5;
  }
}
var jump = false;
function drawJumper() {
  if(me.hit){
    enemy.hit = true;
  }
  if(enemy.x === 440){
    jump = true;
  }
  if(enemy.x === 170){
    jump = false;
  }
  if(!jump){
    ctx.drawImage(basic[Math.floor(basicRunner % 4)], enemy.x - 280, enemy.y - 250);
    basicRunner += 0.25;
  } else {
    ctx.drawImage(basic[Math.floor(basicRunner % 4) + 4], enemy.x - 280, enemy.y - 250);
    basicRunner += 1;
  }

  if(enemy.x > 710 || enemy.x <= -100){
    enemy.hit = false;
    enemy.x = 710;
    enemy.y = 390;
    jump = false;
    g = -30;
    a = 25;
    enemy.change();
  }
  if(enemy.hit === true){
    enemy.x += 10;
    enemy.y += g;
    g += 5;
  } else {
    enemy.x -= 5;
    if ((enemy.x < 450) && (a !== -26)){
      enemy.y -= a;
      a -= 1;
    }
  }
}
function drawFlyer() {
  if(me.hit){
    enemy.hit = true;
  }
  if(enemy.hit === false){
    ctx.drawImage(flyer[Math.floor(fly)], enemy.x - 320, enemy.y - 240);
  } else {
    ctx.drawImage(flyer[4], enemy.x - 320, enemy.y - 240);
  }
  if(enemy.x > 710 || enemy.x <= -100){
    enemy.hit = false;
    enemy.x = 710;
    enemy.y = 390;
    g = -30;
    f = 10;
    enemy.change();
  }
  if(enemy.hit === true){
    enemy.x += 10;
    enemy.y += g;
    g += 5;
  } else {
    enemy.y += f;
    enemy.x -= 5;
    f -= 1;
  }
  if (enemy.x === 350){
    f = 20;
  } else if ((enemy.x > 350) && (enemy.y <= 100)){
    f = 10;
  }
  fly += 1 / 3;
  fly = fly % 4;
}
function drawEvader(){
  if(me.hit){
    enemy.hit = true;
  }
  ctx.drawImage(basic[Math.floor(basicRunner % 4)], enemy.x - 280, enemy.y - 250);
  basicRunner += 0.25;

  if(enemy.x > 710 || enemy.x <= -100){
    enemy.hit = false;
    enemy.x = 710;
    enemy.y = 390;
    g = -30;
    e = 5;
    enemy.change();
  }
  if(enemy.hit === true){
    enemy.x += 10;
    enemy.y += g;
    g += 5;
  } else {
    enemy.x -= e;
  }
  if((enemy.x === 250) && (e === 5)){
    e = -20;
  } else if((e === -20) && (enemy.x === 410)){
    e = 10;
  }
  if(enemy.x <= 360){
    ctx.font = "Bold 80px Comic Sans MS";
    ctx.fillStyle = "Red";
    ctx.textAlign = "center";
    ctx.fillText("!", enemy.x + 20, enemy.y - 40)
  }
}
function drawVanisher(){
  if(me.hit){
    enemy.hit = true;
  }
  ctx.globalAlpha = 1;
  if(enemy.hit === false && me.hurt === false){
    ctx.globalAlpha = alpha / 100;
  }
  ctx.drawImage(basic[Math.floor(basicRunner % 4)], enemy.x - 280, enemy.y - 250);
  basicRunner += 0.25;
  if(alpha !== 0){
    alpha -= 2;
  }
  ctx.globalAlpha = 1;

  if(enemy.x > 710 || enemy.x <= -100){
    enemy.hit = false;
    enemy.x = 710;
    enemy.y = 390;
    g = -30;
    alpha = 100;
    enemy.change();
  }
  if(enemy.hit === true){
    enemy.x += 10;
    enemy.y += g;
    g += 5;
  } else {
    enemy.x -= 5;
  }
}
// function drawArmored(){
//   if(me.hit){
//     enemy.hit = true;
//   }
//   ctx.drawImage(basic[Math.floor(basicRunner % 4)], enemy.x - 280, enemy.y - 250);
//   basicRunner += 0.25;
//   // switch(armorPierce){
//   //   case 0:
//   //     ctx.drawImage(armor[0], enemy.x - 280, enemy.y - 250);
//   //     break;
//   //   case 1:
//   //     ctx.drawImage(armor[1], enemy.x - 280, enemy.y - 250);
//   //     break;
//   //   case 2:
//   //     ctx.drawImage(armor[2], enemy.x - 280, enemy.y - 250);
//   // }
//   if(enemy.x > 710 || enemy.x <= -100){
//     enemy.hit = false;
//     enemy.x = 710;
//     enemy.y = 390;
//     g = -30;
//     armorPierce = 0;
//     enemy.change();
//   }
//   if(armorPierce >= 2){
//     enemy.x += 10;
//     enemy.y += g;
//     g += 5;
//   } else {
//     enemy.x -= 2.5;
//   }
// }

function hpBar(){
  for(var i = 0; i < me.hp; i++){
    ctx.drawImage(hp,i * 60 + 75,- 35);
  }
  ctx.font = "Bold 30px Comic Sans MS";
  ctx.fillStyle = "Red";
  ctx.fillText("Life:", 40, 30);
}

var combo = {
  count: 0,
  showType:"none",
  showTime:0,
  draw: function(){
    if(enemy.x === 170){
      me.miss = true;
    }
    if(me.miss){
      combo.count = 0;
      combo.showType = "miss";
      me.miss = false;
    }
    if(combo.showType === "miss"){
      ctx.font = "50px Comic Sans MS";
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText("MISS", canvas.width/2, canvas.height/2)
      combo.showTime++;
      if(combo.showTime === 10) {
        combo.showTime = 0;
        combo.showType = "none"
      }
    }
    if(me.hit){
      combo.showType = "hit";
      me.hit = false;
    }
    if(combo.showType === "hit"){
      ctx.font = "50px Comic Sans MS";
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText("COMBO " + combo.count + " !!!", canvas.width/2, canvas.height/2)
      combo.showTime++;
      if(combo.showTime === 35) {
        combo.showTime = 0;
        combo.showType = "none"
      }
    }
    if(highScore < combo.count){
      highScore = combo.count;
    }
    ctx.font = "40px Comic Sans MS";
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.fillText("Record", 560, 30);
    ctx.font = "Bold 60px Elephant";
    ctx.fillStyle = "Red";
    ctx.textAlign = "center";
    ctx.fillText(highScore, 560, 90);
  }
};
//-------------------------------------------------
function clear() {
  ctx.drawImage(backGround, 0, 0);
}
function gameOverScreen(){
  ctx.drawImage(gameOver,0,0,640,480);
}

function punchMotion() {
  if(enemy.hit && (enemy.x < 310)){
    if(me.swing >= 2){
      ctx.drawImage(punch[0],-50,0);
    } else if(me.swing >= 1){
      ctx.drawImage(punch[1],-50,0);
    } else {
      ctx.drawImage(punch[2],-50,0);
    }
  }
}
//-------------------------------------------------
function game() {
  clear();
  ctx.font = "Bold 35px Elephant";
  ctx.fillStyle = "Black";
  ctx.textAlign = "center";
  ctx.fillText("-PRESS SPACE TO START-", canvas.width/2, canvas.height/3 * 2)
  ctx.font = "Bold 80px Bungee";
  ctx.fillStyle = "Black";
  ctx.textAlign = "center";
  ctx.fillText("ComboCat", canvas.width/2, canvas.height/3 + 20)
  ctx.drawImage(title,160,30,320,240);

  if(gameStart){
    if (me.hp === 0){
      reset();
    }
    clear();
    hpBar();
    me.draw();
    me.attack();
    enemy.draw();
    combo.draw();
    punchMotion();
  }
  if(me.hp === 0){
    gameStart = false;
    gameOverScreen();
    ctx.font = "Bold 50px Elephant";
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER... replay?", canvas.width/2, canvas.height/2-50);
    ctx.font = "Bold 30px Elephant";
    ctx.fillStyle = "Red";
    ctx.fillText("your record : " + highScore + " Combo", canvas.width/2, canvas.height/2);
    ctx.font = "Bold 30px Elephant";
    ctx.fillStyle = "Black";
    ctx.fillText("-PRESS SPACE TO RESTART-", canvas.width/2, canvas.height/3 * 2);
    speed = 15;
  }
  speed = 15 - (combo.count / 2);
  setTimeout(game, speed);
}
//13is just right

setTimeout(game, speed);
