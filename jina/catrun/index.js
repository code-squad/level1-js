var cat = document.getElementById('cat1');
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");


var catImage = ["cat1.png","cat2.png"];
var imgidx = 0;
var catX = canvas.width / 2

function drawbg() {
	ctx.fillStyle = "lavender";
	ctx.fillRect(10,10,500,500);
}
drawbg();

function runcat() {
	cat.setAttribute("src",catImage[imgidx]);
	imgidx++;
	if (imgidx >= catImage.length) {
		imgidx = 0;
	}
}
setInterval(runcat,700);