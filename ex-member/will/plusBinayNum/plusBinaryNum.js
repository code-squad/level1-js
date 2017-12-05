function makeTestCase(n) {
  var a = [];
  for(var i = 0; i < n * 2; i++) {
    a[i] = prompt((i + 1) + "번째 이진수를 입력하세요");
  }
  return a;
}

function multiplyTwo(n) {
  if (n == 0) {
    return 1;
  } else {
    return 2 * multiplyTwo(n - 1);
  }
}

function multiplyTwo2(n) {
  var a = 1;
  for(var i = 0; i < n; i++) {
    a *= 2;
  }
  return a;
}

function makeDecimal(inputNum) {
  var str1 = inputNum + "";
  var sum = 0;
  for (var i = 0; i < str1.length; i++) {
    sum += parseInt(str1.charAt(i)) * multiplyTwo(str1.length - i - 1);
  }
  return parseInt(sum);
}

var result = 0;
function makeBinary(inputNum) {
  if (inputNum < 2) {
    result = inputNum;
    return result + "";
  } else {
    makeBinary(Math.floor(inputNum / 2));
    result += inputNum % 2 + "";
  }
  return parseInt(result);
}

var testCase = prompt("테스트 케이스를 입력하세요");
var arr = makeTestCase(testCase);
for(var i = 0; i < testCase * 2; i = i + 2) {
  var a = makeDecimal(arr[i]) + makeDecimal(arr[i + 1]);
  console.log(makeBinary(a));
}

// input
// 3
// 1001101 10010
// 1001001 11001
// 1000111 1010110

// output
// 1011111
// 1100010
// 10011101
