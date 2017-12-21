var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var game = {
  w : canvas.width,
  h : canvas.height,
}

ctx.fillColor = 'Red';
ctx.fillRect(100, 100, game.w, game.h);
