// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).delay(2000).hide();
//     });
// });

var firstVal = 0;
var secondVal = 0;


function button_click(n) {
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
