// function reference() {
//   console.log("실버:", ((24 / 54) * 100).toFixed(0) + "%");
//   console.log("골드:", ((15 / 54) * 100).toFixed(0) + "%");
//   console.log("에메랄드:", ((7 / 54) * 100).toFixed(0) + "%");
//   console.log("다이아:", ((4 / 54) * 100).toFixed(0) + "%");
//   console.log("크리스탈:", ((2 / 54) * 100).toFixed(0) + "%");
//   console.log("조커:", ((1 / 54) * 100).toFixed(0) + "%");
//   console.log("메가:", ((1 / 54) * 100).toFixed(0) + "%");
// }

var roulette = document.getElementById('roulette');
var param = document.getElementById('result');

var bettingMoney = document.getElementById('money');
var bettingArea = document.getElementById('betting-area');

var silver = document.getElementById('silver');
var gold = document.getElementById('gold');
var emerald = document.getElementById('emerald');
var diamond = document.getElementById('diamond');
var crystal = document.getElementById('crystal');
var joker = document.getElementById('joker');
var mega = document.getElementById('mega');

var count = 0;

var user = {
  "name": "카이지",
  "money": 10000
};

  money.innerHTML = user.money;

function betting() {
  var bet = Math.floor(Math.random() * 54);
  if (bet >= 0 && bet < 24) {
    param.innerHTML = "실버";
  } else if (bet >= 24 && bet < 39) {
    param.innerHTML = "골드";
  } else if (bet >= 39 && bet < 46) {
    param.innerHTML = "에메랄드";
  } else if (bet >= 46 && bet < 50) {
    param.innerHTML = "다이아몬드";
  } else if (bet >= 50 && bet < 52) {
    param.innerHTML = "크리스탈";
  } else if (bet >= 52 && bet < 53) {
    param.innerHTML = "조커";
  } else if (bet >= 53 && bet < 54) {
    param.innerHTML = "메가";
  }
}

silver.addEventListener('click', function() {
  console.log("배팅: 실버");
  bettingArea.innerHTML = "실버"
});
gold.addEventListener('click', function() {
  console.log("배팅: 골드");
  bettingArea.innerHTML = "골드"
});
emerald.addEventListener('click', function() {
  console.log("배팅: 에메랄드");
  bettingArea.innerHTML = "에메랄드"
});
diamond.addEventListener('click', function() {
  console.log("배팅: 다이아몬드");
  bettingArea.innerHTML = "다이아몬드"
});
crystal.addEventListener('click', function() {
  console.log("배팅: 크리스탈");
  bettingArea.innerHTML = "크리스탈"
});
joker.addEventListener('click', function() {
  console.log("배팅: 조커");
  bettingArea.innerHTML = "조커"
});
mega.addEventListener('click', function() {
  console.log("배팅: 메가");
  bettingArea.innerHTML = "메가"
});


roulette.addEventListener('click', function() {
  betting();
  count++;
  if (param.innerHTML === bettingArea.innerHTML && param.innerHTML == "실버") {
    user.money += 1000;
  } else if (param.innerHTML === bettingArea.innerHTML && param.innerHTML == "골드") {
    user.money += 2000;
  } else if (param.innerHTML === bettingArea.innerHTML && param.innerHTML == "에메랄드") {
    user.money += 5000;
  } else if (param.innerHTML === bettingArea.innerHTML && param.innerHTML == "다이아몬드") {
    user.money += 10000;
  } else if (param.innerHTML === bettingArea.innerHTML && param.innerHTML == "크리스탈") {
    user.money += 20000;
  } else if (param.innerHTML === bettingArea.innerHTML && param.innerHTML == "조커") {
    user.money += 40000;
  } else if (param.innerHTML === bettingArea.innerHTML && param.innerHTML == "메가") {
    user.money += 40000;
  } else {
    user.money -= 1000;
  }
  if (user.money <= 0) {
    alert('Game Over');
  }
  console.log("결과:", param.innerHTML);
  money.innerHTML = user.money;
})