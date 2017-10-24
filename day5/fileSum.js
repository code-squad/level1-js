var fs = require('fs');

var data = fs.readFileSync('data.txt','utf8');
//console.log("data = %s", data);
var arr = data.split("\n");
//console.log("arr = %s", arr);

var sum = 0;
for (var i = 0; i < arr.length; i++) {
	var n = parseInt(arr[i]);
	if (!!n) {
		sum += n;
	} else {
		console.log("이상한게 들었 있어요?! " + n);
	}
}

console.log(sum);
