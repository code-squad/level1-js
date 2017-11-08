var canvas = document.getElementById("lion");
var ctx = canvas.getContext("2d");
ctx.lineWidth = "3";
ctx.beginPath();
ctx.arc(100, 140, 30, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fillStyle = "#DAA520";
ctx.fill();
// left ear

ctx.beginPath();
ctx.arc(260, 140, 30, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fillStyle = "#DAA520";
ctx.fill();
// right ear 

ctx.beginPath();
ctx.arc(180, 200, 100, 0, Math.PI * 2, true);
ctx.fillStyle = "#DAA520";
ctx.fill();
ctx.stroke();
// head

ctx.beginPath();
ctx.moveTo(120,170);
ctx.lineTo(160,170);
ctx.stroke();
ctx.moveTo(200,170);
ctx.lineTo(240,170);
ctx.stroke();
// eyebrows

ctx.beginPath();
ctx.arc(220, 190, 5, 0, Math.PI * 2, true);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();
// right eye

ctx.beginPath();
ctx.arc(140, 190, 5, 0, Math.PI * 2, true);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();
// left eye

ctx.beginPath();
ctx.arc(190, 220, 15, 0, Math.PI * 2, true);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
// right part of nose

ctx.beginPath();
ctx.arc(170, 220, 15, -1, Math.PI/4, true);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
// left part of nose

ctx.beginPath();
ctx.arc(180, 210, 5, 0, Math.PI * 2, true);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();
// nose 