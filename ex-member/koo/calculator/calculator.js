//버튼을 눌렀을 때, 버튼의 값을 받아오는 함수
var getFunc = function(value) {
  //var v = this.innerHTML;   호눅스가 사용해보라고 한 방법 -> 불필요한 파라메터 전달을 없앨 수 있다. 추 후 구현
  if (value === "C") {    //만약 clear가 입력되었을 때, clear을 위한 함수로 이동
    clear();
  }else if (value === "=") {    //만약 =이 입력되면, 결과값 출력을 위한 함수로 이동
    getOperator();
  }
  else {    //나머지 일반 숫자 값이나 연산자가 입력 되었을 때, 문자열에 받아둔다.
    document.getElementById('buttonresult').innerHTML += value;
  }
};

//결과값 출력 창을 clear 시켜주는 함수
var clear = function(value) {
  document.getElementById('buttonresult').innerHTML = "";
  document.getElementById('totalResult').innerHTML = "";
};

//총 받아놓은 문자열을 수식으로 바꾸어 계산해주는 함수
var getOperator = function(value) {   //입력된 수식이 없는 상태에선 'no data' 출력해주기
  if (document.getElementById('buttonresult').innerHTML === "") {
    document.getElementById('buttonresult').innerHTML = "no data";
    document.getElementById('totalResult').innerHTML = "no data";
  }else {   //값이 입력되어 있다면, 계산
    var result = eval(document.getElementById('buttonresult').innerHTML);
    document.getElementById('buttonresult').innerHTML = result;
    document.getElementById('totalResult').innerHTML = result;
  }
};
