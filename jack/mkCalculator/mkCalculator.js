var h = document.getElementById("h1");
h.innerHTML = "Making a calculator";
var p = document.getElementById("p");
p.innerHTML = "Jack's FirstCal";
var crtNum = '';
var result = '';
var dp = document.getElementById("display");
dp.innerHTML = crtNum;

function pushNum(num) {
crtNum = document.getElementById('btn' + num).value;
dp.innerHTML += crtNum;
}

function clearNum() {
dp.innerHTML = "";
}

function pushOpt(num) {
crtNum = document.getElementById('opt' + num).value;
dp.innerHTML += crtNum;
}

function calNum() {
result = eval(dp.innerHTML);
dp.innerHTML = result;
}
