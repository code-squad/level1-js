var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



ctx.beginPath();
ctx.arc(39, 39, 10, 10, Math.PI, true); // Outer circle
ctx.fillStyle = "#CC8622";
ctx.fill();
ctx.strokeStyle = "#000";
ctx.lineWidth = 3;
ctx.stroke();
ctx.beginPath();
ctx.arc(105, 35, 10, 1, Math.PI, true); // Outer circle
ctx.fillStyle = "#CC8622";
ctx.fill();
ctx.strokeStyle = "#000";
ctx.lineWidth = 3;
ctx.stroke();
ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
ctx.fillStyle = "#CC8622";
ctx.fill();
ctx.strokeStyle = "#000";
ctx.lineWidth = 3;
ctx.stroke();
ctx.beginPath();
ctx.arc(55, 65, 4, 0, Math.PI * 2, true);  // Left eye
ctx.fillStyle = "#000";
ctx.fill();
ctx.beginPath();
ctx.arc(95, 65, 4, 0, Math.PI * 2, true);  // Right eye
ctx.fillStyle = "#000";
ctx.fill();

ctx.beginPath();
ctx.arc(68, 88, 10, 7, Math.PI*2, false); // Outer circle
ctx.fillStyle = "#fff";
ctx.fill();
ctx.strokeStyle = "#000";
ctx.lineWidth = 3;
ctx.stroke();
ctx.beginPath();
ctx.arc(83, 88, 10, 4, Math.PI, false); // Outer circle
ctx.fillStyle = "#fff";
ctx.fill();
ctx.strokeStyle = "#000";
ctx.lineWidth = 3;
ctx.stroke();
ctx.beginPath();
ctx.arc(75, 80, 4, 0, Math.PI * 2, true);  // nose
ctx.fillStyle = "#000";
ctx.fill();


ctx.strokeStyle = "#000";
ctx.beginPath();
ctx.moveTo(45, 55);
ctx.lineTo(65, 55);
ctx.stroke();

ctx.strokeStyle = "#000";
ctx.beginPath();
ctx.moveTo(85, 55);
ctx.lineTo(105, 55);
ctx.stroke();

var bgImage = new Image();
bgImage.onload = function () {
  ctx.drawImage(bgImage, 300, 0);

};
bgImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3-KMhBbHMcaWYpKdRpcaLSqIsCohg3dSNvsQnhd5-B5cIP2-Dg";