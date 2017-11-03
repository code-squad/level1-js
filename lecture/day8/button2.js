var p = document.getElementById('main');
var p2 = document.getElementById('output');

p.innerHTML = "버튼 26개를 추가합니다<br>";

for(var i = 1; i<= 26; i++){
	var button = document.createElement('button');
	button.id="button"+i;
	button.innerHTML = i;

	button.onclick = function () {
		p2.innerHTML = "버튼" + this.innerHTML  + "클릭";
	};
	p.appendChild(button);
}
