var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

//고양이 그림 부르기
var catImage = [];
catImage[0] = new Image();
catImage[1] = new Image();
catImage[0].src = "cat1.png";
catImage[1].src = "cat2.png";
//배경 부르기
var bg = new Image();
bg.src = 'bg.png';

//장애물 변수
var objW = 50;
var objH = 50;

//배경 변수
var sizeX = 550;
var sizeY = 350;
var speed = 10;
var yy = 0;
var ddx = - 0.75;
var xx = 0;
//배경그리기
function drawbg() {
 	ctx.clearRect(0,0,canvas.width,canvas.height);
	
	ctx.drawImage(bg,xx - canvas.width,yy,canvas.width,canvas.height);

 		if (xx > sizeX) { xx = sizeX - canvas.width}
 		if (xx < sizeX + canvas.width) {
 			ctx.drawImage(bg,xx + canvas.width,yy,canvas.width,canvas.height);
 		}

 	ctx.drawImage(bg,xx,yy,canvas.width,canvas.height);

 	xx += ddx;
}
setInterval(drawbg, speed);

//장애물 그리기
function drawobj() {
	ctx.beginPath();
	ctx.rect(400,265,objW,objH);
	ctx.fillStyle = "purple";
	ctx.fill();
	ctx.closePath();
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

//점프 실행 함수
function jump() {
	dy = -7;
}

//뛰는 고양이 그리기
var count = 0;
var idx = 0;
var delay = 10;

function drawcat() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawbg();
	drawobj();

	catX += dx;
	dy = dy + g;
	catY += + dy;

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
	requestAnimationFrame(drawcat);
}

requestAnimationFrame(drawcat);
