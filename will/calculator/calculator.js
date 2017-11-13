var a = [".", "+", "-", "/", "*", "=", ""];

function button_click(n) {
  var str = test.screen.value;
  for(var i = 0; i < 6; i++) {
    if(str[0] === a[i + 1]) {
      test.screen.value = "";
      test.output.value = "";
    }
    for(var j = 0; j < 6; j++) {
      if(str.indexOf(a[i] + a[j]) !== -1) {
        test.screen.value = str.substring(0,str.length - 2) + str.substring(str.length - 1);
        test.output.value = str.substring(0,str.length - 2) + str.substring(str.length - 1);;
      }
    }
  }

  if(str.length === 23) {
    return;
  }

  if(str[0] === ".") {
    test.screen.value = "0.";
    test.output.value = "0.";
  }

  test.screen.value += n;
  test.output.value += n;
  }

function eraseNum() {
  var str = test.screen.value;
  test.screen.value = str.slice(0, -1);
  test.output.value = str.slice(0, -1);
}

function clearNum() {
  test.screen.value = "";
  test.output.value = "";
}

function answer() {
        try{
            test.output.value = eval(document.test.output.value);
        }catch(e){
          alert('저는 아직 부족한 계산기라서 정확히 입력해주셔야 해요 ^ㅡ^ㅡ^');
        }
}
