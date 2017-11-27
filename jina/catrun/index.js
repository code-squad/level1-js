var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

//고양이 그림 부르기
var catImage = [];
catImage[0] = new Image();
catImage[1] = new Image();
catImage[0].src = "cat1.png";
catImage[1].src = "cat2.png";
//배경 그림 부르기
var bg = new Image();
var bgLoad = false;
bg.onload = function() {
	bgLoad = true;
}
bg.src = 'bg.png';

//장애물  그림 부르기
var objImage = new Image();
objImage.src = "obj.png";
//장애물 변수
var crab = {
	"sx":35,
	"sy":460,
	"w":225,
	"h":300,
	"x":600,
	"y":250,
	"width":70,
	"height":70
};
// function crab(x,width,height) {
// 	this.sx = 35;
// 	this.sy = 460;
// 	this.w = 225;
// 	this.h = 300;
// 	this.x = 600;
// 	this.y = 250;
// 	this.width = 70;
// 	this.height = 70;
// }
// crab.prototype.drawobj = function() {
// 	ctx.drawImage(objImage,this.sx,this.sy,this.w,this.h
// 		,this.x,this.y,this.width,this.height);
// 		this.x -= 3;
// }
// function newobj(n) {
// 	var width = random(30) + 20;
// 	var x = new crab(650,60,60)
// }
//장애물 그리기
function drawobj() {
	ctx.drawImage(objImage,crab.sx,crab.sy,crab.w,crab.h
		,crab.x,crab.y,crab.width,crab.height);
		crab.x -= 3;
}

//장애물 충돌감지
function collision() {

	if (crab.x > catX-15 && crab.x < catX+catwidth-15
	&& crab.y > catY-15 && crab.y < catY+catheight-15) {
				debugger;
				// alert("GAME OVER");
				document.location.reload();
	}
}
//점수 계산
var score = 0;
function checkScore() {
	score++;
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.font = "20px Verdana";
	ctx.fillText("Score: " + score, 15, 30);

}

//배경 변수
var sizeX = 550;
var sizeY = 350;
var ddx = - 0.75;
var bgX = 0;
var i = 0;
//배경그리기
function drawbg() {
	i=i+2;
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(bg,0 - i,0,sizeX, sizeY);
	ctx.drawImage(bg,0 - i + sizeX,0,sizeX, sizeY);

	if (i == sizeX ) {
		i = 0;
	}
}

//고양이 사이즈와 초기좌표
var catwidth = 90;
var catheight = 90;
var catX = 100;
var catY = 220;
//고양이 움직임
var dx = 0;
var dy = -7;
//고양이 중력
var g = 0.2;
//고양이 그리기
var count = 0;
var idx = 0;
var delay = 10;
function drawcat() {
	catX += dx;
	dy = dy + g;
	catY += dy;

	if (catX >= 500 || catX <= 0) {
		dx = -dx;
	}
	if(catY >= 230) {
		catY = 230;
	}

	count++;
	if (count >= delay) {
		idx++;
	if (idx > 1) {
		idx = 0;
	}
		count = 0;
	}

	if (catY != 230) {
		ctx.drawImage(catImage[0],catX,catY,catwidth,catheight);
	} else {
		ctx.drawImage(catImage[idx],catX,catY,catwidth,catheight);
	}
}

//키보드 조작
document.addEventListener("keypress", jump);
//점프 실행 함수
function jump() {
	if (event.keyCode == 32) {
		if (catY > canvas.height / 2){
			dy = -8;
		}
	}
}

//그리기

function drawAll() {

	ctx.clearRect(0,0,canvas.width,canvas.height);

	drawbg();
	drawobj();
	collision();
	drawcat();
	checkScore();

	requestAnimationFrame(drawAll);
}
requestAnimationFrame(drawAll);
