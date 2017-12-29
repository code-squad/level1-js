var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = new Image();

function ryanHead() {
  ctx.beginPath();
  ctx.fillStyle = "#DD9B25"
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#000";
  ctx.ellipse(113, 146, 39, 42, 90 * Math.PI / 180, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

function ryanLeftEar() {
  ctx.beginPath();
  ctx.fillStyle = "#DD9B25"
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#000";
  ctx.ellipse(90.2, 113, 9, 9, 90 * Math.PI / 180, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

function ryanRigthEar() {
  ctx.beginPath();
  ctx.fillStyle = "#DD9B25"
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#000";
  ctx.ellipse(136, 113, 9, 9, 90 * Math.PI / 180, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}


function ryanLeftEyelash() {
  ctx.beginPath();
  ctx.lineWidth = 3.3;
  ctx.strokeStyle = "#000";
  ctx.lineCap = "round";
  ctx.moveTo(89, 133);
  ctx.lineTo(103, 133);
  ctx.stroke();
}


function ryanRigthEyelash() {
  ctx.beginPath();
  ctx.lineWidth = 3.3;
  ctx.strokeStyle = "#000";
  ctx.lineCap = "round";
  ctx.moveTo(124, 133);
  ctx.lineTo(139, 133);
  ctx.stroke();
}



function ryanLeftEye() {
  ctx.beginPath();
  ctx.fillStyle = "#000"
  ctx.ellipse(96, 143.6, 3, 3, 90 * Math.PI / 180, 0, 2 * Math.PI);
  ctx.fill();
}




function ryanRightEye() {
  ctx.beginPath();
  ctx.fillStyle = "#000"
  ctx.ellipse(130.6, 143.4, 3, 3, 90 * Math.PI / 180, 0, 2 * Math.PI);
  ctx.fill();

}


function ryanNose() {
  ctx.beginPath();
  ctx.fillStyle = "#000"
  ctx.ellipse(112.6, 152.5, 4, 4, 90 * Math.PI / 180, 0, 2 * Math.PI);
  ctx.fill();
}


function ryanNoseDetail_1() {
  ctx.beginPath();
  ctx.fillStyle = "#FFF"
  ctx.lineWidth = 2.7;
  ctx.strokeStyle = "#000";
  ctx.ellipse(107.6, 157.1, 5, 6, 90 * Math.PI / 180, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}


function ryanNoseDetail_2() {
  ctx.beginPath();
  ctx.fillStyle = "#FFF"
  ctx.lineWidth = 2.7;
  ctx.strokeStyle = "#000";
  ctx.ellipse(118.6, 157.1, 5, 6, 90 * Math.PI / 180, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function ryanNoseDetail_3() {
  ctx.beginPath();
  ctx.fillStyle = "#FFF"
  ctx.strokeStyle = "#FFF";
  ctx.fillRect(110, 155.1, 5, 3)
  ctx.fill();
  ctx.stroke();
}



function draw() {
  ryanLeftEar();
  ryanRigthEar();
  ryanHead();
  ryanLeftEyelash();
  ryanRigthEyelash();
  ryanLeftEye();
  ryanRightEye();
  ryanNoseDetail_1();
  ryanNoseDetail_2();
  ryanNoseDetail_3();
  ryanNose();
  ctx.fillText("내가 그린 라이언 그림",200,175);
};

draw();