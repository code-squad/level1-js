var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var game = {
    w: canvas.width,
    h: canvas.height,
}

ctx.fillColor = "Red";
ctx.fillRect(0, 0, game.w, game.h);