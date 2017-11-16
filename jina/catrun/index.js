var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

//고양이 그림 부르기
var catImage = [];
catImage[0] = new Image();
catImage[1] = new Image();
catImage[0].src = "cat1.png";
catImage[1].src = "cat2.png";
	
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

//배경그리기	
function drawbg() {
	ctx.fillStyle = "lavender";
	ctx.fillRect(10,10,canvas.width,canvas.height);
}


//뛰는 고양이 그리기
var count = 0;
var idx = 0;
var delay = 10;

function drawcat() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawbg();
	
	catX += dx;
	dy = dy + g;
	catY += + dy;

	if (catX >= 500 || catX <= 0) {
		dx = -dx;
	}
	if(catY >= 200) {
		catY = 200;
	}

	count++;
	if (count >= delay) {
		idx++;
		if (idx > 1) {
			idx = 0;
		}
	count = 0;
	}

	if (catY != 200) {
		ctx.drawImage(catImage[0],catX,catY,catwidth,catheight);	
	} else {
		ctx.drawImage(catImage[idx],catX,catY,catwidth,catheight);	

	}
	requestAnimationFrame(drawcat);
	
}

requestAnimationFrame(drawcat);
