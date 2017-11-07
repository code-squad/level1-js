var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var bgImage = new Image();
bgImage.onload = function () {
  ctx.drawImage(bgImage, 20, 20);
};
bgImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3-KMhBbHMcaWYpKdRpcaLSqIsCohg3dSNvsQnhd5-B5cIP2-Dg";
ctx.beginPath();
ctx.fillStyle = "GoldenRod";
ctx.lineWidth = 4;
ctx.arc(320, 180, 60, 0, 2*Math.PI,false);
ctx.fill();
ctx.stroke();
//얼굴모양

ctx.beginPath();
ctx.moveTo(280, 160);
ctx.lineTo(310, 160);
ctx.fill();
ctx.stroke();
//왼쪽눈썹

ctx.beginPath();
ctx.moveTo(330, 160);
ctx.lineTo(360, 160);
ctx.fill();
ctx.stroke();
//오른쪽눈썹

ctx.beginPath();
ctx.moveTo(295,175);
ctx.arc(295, 175, 2, 0,2*Math.PI,false);
ctx.fill();
ctx.stroke();
//왼쪽 눈

ctx.beginPath();
ctx.moveTo(345, 175);
ctx.arc(345, 175, 2, 0,2*Math.PI,false);
ctx.fill();
ctx.stroke();
//오른쪽 눈

ctx.beginPath();
ctx.moveTo(320, 190);
ctx.arc(320, 190, 2, 0,2*Math.PI,false);
ctx.fill();
ctx.stroke();
//코

ctx.beginPath();
ctx.fillStyle = "White";
ctx.moveTo(310, 190);
ctx.lineTo(330, 190);
ctx.fill();
ctx.stroke();
//코밑 1자

ctx.beginPath();
ctx.moveTo(320, 200);
ctx.arc(310,200,10,0,3/2*Math.PI,false);
ctx.fill();
ctx.stroke();
//코밑 왼쪽 원

ctx.beginPath();
ctx.moveTo(320, 200);
ctx.arc(330,200,10,Math.PI,3/2*Math.PI,true);
ctx.fill();
ctx.stroke();
//코밑 오른쪽 원

ctx.beginPath();
ctx.fillStyle = "GoldenRod";
ctx.moveTo(365,140);
ctx.arc(350, 130, 15, Math.PI/5, Math.PI*(8/7),true);
ctx.fill();
ctx.stroke();
//오른쪽 귀

ctx.beginPath();
ctx.moveTo(300,127);
ctx.arc(285, 130, 15, Math.PI*(23/12),Math.PI*(5/7) ,true);
ctx.fill();
ctx.stroke();
//왼쪽 귀
