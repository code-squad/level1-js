var n = Number(prompt("숫자를 입력해 주세요"));
var ans = n % 2;
if (ans  === 0) {
	console.log("짝수입니다.");
} else if (ans === 1) {
	console.log("홀수입니다.");
} else {
	console.log(ans);
	console.log("잘 모르겠네요.");
}
