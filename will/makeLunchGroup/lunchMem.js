// for(var i = 0; i < 7; i++){
//     var newP = document.createElement("p");
//     bar1.appendChild(newP);
//     newP.innerHTML = "";
// }

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
  var separatingNum = Math.floor(memNum / groupMemNum);
  for(var i = 0; i < memNum; i = i + groupMemNum) {
    var str = "";
    var newP = document.createElement("p");
    bar1.appendChild(newP);
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
