var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillRect(0,0, 640, 480);
ctx.fillStyle="Red";

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," +  g  +"," + b + ")";
}

function draw() {
	for (var i = 10; i < 640; i+= 63) {
		for (var j = 10; j < 480; j+= 47) {
			ctx.fillStyle = randomColor();
			ctx.fillRect(i, j, 53, 37);
		}
	}
}

var image = new Image();
var start = new Date();
console.log("draw start");
image.onload = function() {
	var end = new Date();
	ctx.drawImage(image, 100, 100);
	console.log("time(ms)", end - start);
};
//image.src = "http://codesquad.kr/img/company/codesquad2.png"
image.src = "./bg.jpg";
console.log("draw end");
draw();

/*
function foo() {
	ctx.drawImage(image, 100, 100);
}

setTimeout(foo, 2000);
*/

//var id = setInterval(draw, 200);
