document.getElementsByTagName("h1")[0].style.fontSize = "40px";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeRect(0, 0, 640, 480);

ctx.beginPath();
// Outer circle
ctx.lineWidth = 0.1;
ctx.fillStyle = "#542c01";
ctx.arc(320, 240, 100, 0, Math.PI * 2, true);
// Left ear (clockwise)
ctx.moveTo(285, 148);
ctx.arc(270, 148, 15, 0, Math.PI * 2, true);
// Right ear
ctx.moveTo(385, 148);
ctx.arc(370, 148, 15, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();
// Nose
ctx.beginPath();
ctx.fillStyle = "#edc9a6";
ctx.moveTo(338, 260);
ctx.ellipse(320, 260, 18, 25, 0, 0, 2 * Math.PI);
// Nose1
ctx.lineWidth = 2;
ctx.moveTo(320, 250);
ctx.lineTo(320, 263);
// Nose2
ctx.moveTo(320, 263);
ctx.lineTo(314, 275);
// Nose3
ctx.moveTo(320, 263);
ctx.lineTo(326, 272);
ctx.fill();
ctx.stroke();
// Left eye
ctx.beginPath();
ctx.fillStyle = "black";
// Nose4
ctx.moveTo(324, 245);
ctx.lineTo(316, 245);
ctx.lineTo(320, 250);
ctx.lineTo(327, 245);
ctx.moveTo(310, 230);
ctx.arc(304, 230, 6, 0, Math.PI * 2, true);
// Right eye
ctx.moveTo(342, 230);
ctx.arc(336, 230, 6, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();