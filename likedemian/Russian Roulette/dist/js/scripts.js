function startGame(revolver) {
  var revolver = 6;
  document.onclick = function () {
    if (revolver === 0 || (Math.random()*100 < (100 / revolver))) {
      revolver = 6;
      document.documentElement.style.backgroundColor = '#F0F'
      document.getElementById('message').innerText = 'YOU DEAD'
      document.getElementById('value').innerText = "당신은 죽었습니다.";
    } else {
      revolver--;    
      document.documentElement.style.backgroundColor = '#2AF'
      document.getElementById('message').innerText = 'YOU ALIVE'
      document.getElementById('value').innerText = revolver +"발 남았습니다.";
    }
  }
}

(function () {
  startGame(length);
})();