var enemy = document.getElementById("enemyZone");
var drawE = enemy.getContext("2d");

var myself = document.getElementById("myZone");
var drawM = myself.getContext("2d");

//pokemon 생성자
function makePokemon(name, totalHp, hp, power, src) {
  this.name = name;
  this.totalHp = totalHp;
  this.hp = hp;
  this.power = power;
  this.critical = power * 2;
  this.weak = power * 0.5;
  this.miss = 0;
  this.src = src;
  this.attack = function(target) {
    var ran = Math.ceil(Math.random() * 4 - 1);
    if (ran === 3) {
      document.getElementById("message").innerHTML = this.name + " 의 공격!";
      target.hp -= this.critical;
      setTimeout(attackAlert3, 1000);
    }else if (ran === 2) {
      document.getElementById("message").innerHTML = this.name + " 의 공격!";
      target.hp -= this.power;
      setTimeout(attackAlert2, 1000);
    }else if (ran === 1) {
      document.getElementById("message").innerHTML = this.name + " 의 공격!";
      target.hp -= this.weak;
      setTimeout(attackAlert1, 1000);
    }else if (ran === 0) {
      document.getElementById("message").innerHTML = this.name + " 의 공격!";
      target.hp -= this.miss;
      setTimeout(attackAlert0, 1000);
    }
  };
}

function attackAlert3() {
  document.getElementById("message").innerHTML = "효과는 굉장했다!!";
}
function attackAlert2() {
  document.getElementById("message").innerHTML = "효과는 적당했다!!";
}
function attackAlert1() {
  document.getElementById("message").innerHTML = "효과는 미비했다!!";
}
function attackAlert0() {
  document.getElementById("message").innerHTML = "맞지 않았다!!";
}

//generate enemyTrainer, enemy pokemon, my pokemon
function generateArray(enemy, enemyPkm, myPkm) {
  enemy[0] = "JK";
  enemy[1] = "CRONG";
  enemy[2] = "POBI";
  enemy[3] = "HONUX";

  var mon0 = new makePokemon("캐터피", 50, 50, 10, "Caterpie.gif");
  var mon1 = new makePokemon("이브이", 150, 150, 60, "Eevee.gif");
  var mon2 = new makePokemon("꼬부기", 200, 200, 60, "Squirtle.gif");
  var mon3 = new makePokemon("이상해씨", 220, 220, 60, "Bulbasaur.gif");
  var mon4 = new makePokemon("파이리", 250, 250, 60, "Charmander.gif");
  var mon5 = new makePokemon("고라파덕", 50, 50, 300, "Psyduck.gif");
  var mon6 = new makePokemon("피카츄", 300, 300, 100, "pikachu.gif");
  var mon7 = new makePokemon("우츠보트", 500, 500, 150, "uchboat.gif");
  var mon8 = new makePokemon("잠만보", 1000, 1000, 100, "zambo.png");
  var mon9 = new makePokemon("[보스]", 1500, 1500, 400, "gara.png");

  var myMon0 = new makePokemon("피카츄", 300, 300, 120, "pikachuBack.png");
  var myMon1 = new makePokemon("파이리", 100, 100, 100, "charmanderBack.png");
  var myMon2 = new makePokemon("꼬부기", 300, 300, 100, "squirtleBack.png");
  var myMon3 = new makePokemon("이상해씨", 300, 300, 100, "bulbasaurBack.png");
  var myMon4 = new makePokemon("짱짱보스", 3000, 3000, 2000, "boss.png");

  enemyPkm[0] = mon0;
  enemyPkm[1] = mon1;
  enemyPkm[2] = mon2;
  enemyPkm[3] = mon3;
  enemyPkm[4] = mon4;
  enemyPkm[5] = mon5;
  enemyPkm[6] = mon6;
  enemyPkm[7] = mon7;
  enemyPkm[8] = mon8;
  enemyPkm[9] = mon9;

  myPkm[0] = myMon0;
  myPkm[1] = myMon1;
  myPkm[2] = myMon2;
  myPkm[3] = myMon3;
  myPkm[4] = myMon4;
}

//draw enemy coming zone
function drawEnemyzone() {
  drawE.beginPath();
  drawE.fillStyle="#CFD8DC";
  drawE.strokeStyle="#CFD8DC";
  drawE.ellipse(150,130, 20, 85, Math.PI * 1/2, 0, 2 * Math.PI);
  drawE.fill();
  drawE.stroke();
  drawE.closePath();
}

//draw enemy status
function drawEnemyStatus(arr, num) {
  document.getElementById("enemyName").innerHTML = arr[num].name;
  document.getElementById("enemyHP").innerHTML = "HP : " + arr[num].hp;
  document.getElementById("enemyPower").innerHTML = "POWER : " + arr[num].power;
}

function drawMyStatus(arr, num) {
  document.getElementById("myName").innerHTML = arr[num].name;
  document.getElementById("myHP").innerHTML = "HP : " + arr[num].hp;
  document.getElementById("myPower").innerHTML = "POWER : " + arr[num].power;
}

//draw enemy pokemon. no return. just draw.
function drawEnemy(arr, pos, monNum) {
  if (pos[1] > 50) {
    drawE.clearRect(0, 0, 350, 200);
    pos[1] -= 10;
  }

  drawEnemyzone();

  var enemyImage = new Image();
  enemyImage.onload = function () {
    drawE.drawImage(enemyImage, pos[1], -10);
  };
  for (var i = monNum; i < 10; i++) {
    if (arr[i].hp > 0) {
      enemyImage.src = arr[i].src;
      drawEnemyStatus(arr, i);
      return i;
    }else {
      drawE.clearRect(0, 0, 350, 200);
      return -1;
    }
  }
}

//draw my pokemon. no return. just draw.
function drawMe(arr, pos, monNum) {
  if (pos[0] < 70) {
    drawM.clearRect(0, 0, 350, 200);
    pos[0] += 10;
  }

  var pkm2Image = new Image();
  pkm2Image.onload = function () {
    drawM.drawImage(pkm2Image, pos[0], 10);
  };
  for (var i = monNum; i < 5; i++) {
    if (arr[i].hp > 0) {
      pkm2Image.src = arr[i].src;
      drawMyStatus(arr, i);
      return i;
    }else {
      drawM.clearRect(0, 0, 350, 200);
      return -1;
    }
  }
}

//draw enemy pokemon HP
function drawEnemyHp(enemyArr, num) {
  var enemyHp = document.getElementById("enemyHpZone");
  var drawEnemyHp = enemyHp.getContext("2d");

  drawEnemyHp.beginPath();
  drawEnemyHp.clearRect(0, 0, 300, 150);
  drawEnemyHp.fillStyle="red";
  drawEnemyHp.fillRect(0, 0, (enemyArr[num].hp / enemyArr[num].totalHp) * 300, 150);
  drawEnemyHp.closePath();
}

//draw my pokemon HP
function drawMyHp(myArr, num) {
  var myHp = document.getElementById("hpZone");
  var drawMyHp = myHp.getContext("2d");
  drawMyHp.beginPath();
  drawMyHp.clearRect(0, 0, 300, 150);
  drawMyHp.fillStyle="red";
  drawMyHp.fillRect(0, 0, (myArr[num].hp / myArr[num].totalHp) * 300, 150);
  drawMyHp.closePath();
}

//if pokemon dead, change to next pokemon
//give first position data. if pokemon dead, next position is first position
function isCome() {
  var isDie = drawMe(myPokemon, xPos, myPokeNum[0]);
  if (isDie === -1) {
    myPokeNum[0] += 1;
    xPos[0] = -30;
  }
  var isDie2 = drawEnemy(enemyPokemon, xPos, pokeNum[0]);
  if (isDie2 === -1) {
    pokeNum[0] += 1;
    xPos[1] = 140;
  }
}

//when you click ATTACK button, fight is starting
function attackEnemy(myArr, myNum, enemyArr, enemyNum) {
  myArr[myNum].attack(enemyArr[enemyNum]);
  if(enemyArr[enemyNum].hp <= 0) {
    enemyArr[enemyNum].hp = 0;
    setTimeout(function() {
      document.getElementById("message").innerHTML =
              enemyArr[enemyNum - 1].name + ".. 죽였다!";
    }, 1000);
    return 0;
  }

  setTimeout(function() {enemyArr[enemyNum].attack(myArr[myNum]);}, 2000);
  if(myArr[myNum].hp <= 0) {
    myArr[myNum].hp = 0;
    setTimeout(function() {
      document.getElementById("message").innerHTML =
                                            myArr[myNum - 1].name + ".. 죽었다.";
    }, 1000);
    return 0;
  }
}

//when you click REST button, you will take random hp
function takeRest(myPokemon, myPokeNum, enemyArr, enemyNum) {
  var ran = Math.ceil(Math.random() * 50);
  myPokemon[myPokeNum].hp += ran;
  document.getElementById("message").innerHTML =
                      "꿀 휴식으로 체력을 " + ran + " 만큼 회복했다!!";
  setTimeout(function() {enemyArr[enemyNum].attack(myPokemon[myPokeNum]);}, 1000);
  if(myPokemon[myPokeNum].hp <= 0) {
    myPokemon[myPokeNum].hp = 0;
    setTimeout(function() {
      document.getElementById("message").innerHTML =
                                    myPokemon[myPokeNum - 1].name + ".. 죽었다.";
    }, 1000);
    return 0;
  }
}

//when you click RUNAWAY button, game will be over. you lose.
function theEnd() {
  clearInterval(y);
  clearInterval(x);
  alert("GAME OVER");
}
//-------------------MAIN START--------------------
var trainer = [];
var myPokemon = [];
var enemyPokemon = [];
generateArray(trainer, enemyPokemon, myPokemon);

var trainerNum = 0;
var spacePressed = false;
var xPos = [-30, 140];

var pokeNum = [0];
var myPokeNum = [0];

document.getElementById("message").innerHTML = "결투를 시작하자.";

function drawHP() {
  drawEnemyHp(enemyPokemon, pokeNum[0]);
  drawMyHp(myPokemon, myPokeNum[0]);
}

var x = setInterval(isCome, 200);
var y = setInterval(drawHP, 100);
