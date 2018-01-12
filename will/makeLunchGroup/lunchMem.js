function shuffle(arr, memNum) {
  var n = 0;
  var randomName = [];
  var element = ""
  var nameArr = new Array(memNum);
  for (var i = 0; i < memNum; i++) {
    n = Math.floor(Math.random() * (memNum - i));
    randomName = arr.splice(n, 1);
    element = randomName.join();
    nameArr[i] = element;
  }
  return nameArr;
}

function makeGroup(arr, memNum, groupMemNum) {
  if(document.getElementById("temp2")) {
    document.getElementById("temp2").remove();
  }
  var temp = document.getElementById('temp');
  var newDiv = document.createElement("div");
  newDiv.id = "temp2";
  temp.appendChild(newDiv);
  var separatingNum = Math.floor(memNum / groupMemNum);
  for(var i = 0; i < memNum; i = i + groupMemNum) {
    var str = "";
    var newP = document.createElement("p");
    newDiv.appendChild(newP);
    if(i === separatingNum * groupMemNum) {
      for( var j = 0; j < memNum - separatingNum * groupMemNum; j++) {
        str += arr[i + j] + "　　";
      }
      console.log(str);
      newP.innerHTML = str;
    } else {
      for(var j = 0; j < groupMemNum; j++) {
        str += arr[i + j] + "　　";
      }
      console.log(str);
      newP.innerHTML = str;
    }
  }
}

function start() {
  var memArr = ["b4", "Tram", "JINA", "TIM", "HUE", "jake", "Lemon", "Will", "Hyun",
                "Aliens", "CU", "해나", "ram", "Napster", "R", "Chloe", "luigi", "Jin",
                "JL", "Elly", "AMING", "KOO", "Jack",
                "cow", "Min", "Brian", "훈"];
  var memNum = memArr.length;
  var shuffledArr = shuffle(memArr, memNum);
  makeGroup(shuffledArr, memNum, 4);
}
