var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//배경
ctx.fillStyle="LightBlue";
ctx.fillRect(10,10,300,300);

//귀
ctx.lineWidth = 5;
ctx.fillStyle="orange";
ctx.beginPath();
ctx.arc(260,120,30,0,2*Math.PI,true);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(120,130,30,0,2*Math.PI,true);
ctx.stroke();
ctx.fill();

//얼굴
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(200, 200, 100, 0, 2*Math.PI, true);
ctx.stroke();
ctx.fill();

//눈썹
ctx.beginPath();
ctx.strokeStyle = "balck";
ctx.fillStyle = "black";
ctx.fillRect(130,150,50,5);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "balck";
ctx.fillStyle = "black";
ctx.fillRect(220,150,50,5);
ctx.stroke();

//눈
ctx.beginPath();
ctx.strokeStyle = "balck";
ctx.fillStyle = "black";
ctx.arc(155,180,6,0, 2*Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "balck";
ctx.fillStyle = "black";
ctx.arc(245,180,6,0, 2*Math.PI);
ctx.stroke();
ctx.fill();

//흰원
ctx.beginPath();
ctx.strokeStyle = "balck";
ctx.fillStyle = "white";
ctx.arc(220,220,20,0, 2*Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "balck";
ctx.fillStyle = "white";
ctx.arc(190,220,20,-1,Math.PI/4,true);
ctx.stroke();
ctx.fill();

//코
ctx.beginPath();
ctx.strokeStyle = "balck";
ctx.fillStyle = "black";
ctx.arc(205,205,6,0, 2*Math.PI);
ctx.stroke();
ctx.fill();