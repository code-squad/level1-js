var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeRect(0, 0, 640, 480);

var bgImage = new Image();
bgImage.onload = function () {
  ctx.drawImage(bgImage, 30, 30);

};
bgImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3-KMhBbHMcaWYpKdRpcaLSqIsCohg3dSNvsQnhd5-B5cIP2-Dg";

//얼굴 동그라미
ctx.beginPath();
ctx.fillStyle = "GoldenRod"
ctx.lineWidth = 3;
ctx.arc(320,140,80,0,Math.PI * 2,false);
ctx.fill();
ctx.stroke();

//오른쪽 귀
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(365, 73);
ctx.arc(360,70,15,Math.PI * 1/5,Math.PI * 8/7,true);
ctx.fill();
ctx.stroke();
//왼쪽 귀
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(275, 75);
ctx.arc(275,70,15,Math.PI * 23/12,Math.PI * 5/7,true);
ctx.fill();
ctx.stroke();

//왼쪽 눈썹
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(270, 120);
ctx.lineTo(300,120);
ctx.moveTo(270, 122);
ctx.lineTo(300,122);
ctx.stroke();
//오른쪽 눈썹
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(340, 120);
ctx.lineTo(370, 120);
ctx.moveTo(340, 122);
ctx.lineTo(370, 122);
ctx.stroke();
//왼쪽 눈
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(290, 140);
ctx.arc(290,140,3,0,Math.PI * 2,false);
ctx.stroke();
//오른쪽 눈
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(350, 140);
ctx.arc(350,140,3,0,Math.PI * 2,false);
ctx.stroke();
//코
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(320, 155);
ctx.arc(320,155,3,0,Math.PI * 2,false);
ctx.stroke();
//코 밑 왼쪽 호
ctx.beginPath();
ctx.lineWidth = 3;
ctx.fillStyle = "White"
ctx.moveTo(320, 165);
ctx.arc(310,165,10,0,Math.PI * 3/2,false);
ctx.fill();
ctx.stroke();
//코 밑 오른쪽 호
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(330, 155);
ctx.arc(330,165,10,Math.PI * 3/2,Math.PI,false);
ctx.fill();
ctx.stroke();
//코 밑 양쪽 호 연결선
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(310, 155);
ctx.lineTo(330, 155);
ctx.fill();
ctx.stroke();
