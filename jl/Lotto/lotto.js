var myFunction = function() {
	var arr = [];

	// 배열의 길이가 6일때까지 반복 
	while (arr.length != 6) {
		var ran = Math.floor(Math.random() * 45) + 1;
		//    만약 고른 숫자가 배열 안에 없다면 

		if (arr.indexOf(ran) === -1) {
			arr.push(ran);
		}
		arr.sort(function(a,b) {
				return a - b;
				});
	}
	document.getElementById("lotto").innerHTML = arr;
};
