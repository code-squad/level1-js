var a = [];
var n = 5;
var m = 10;

//var x = 0;
for (var i = 0; i < n; i++) {
	a[i] = [];
	for (var j = 0; j < m; j++) {
		//x++;
		a[i][j] =  i * m + j + 1;
	}
}


console.log(a);

var b =[]
//var x = 0;
for (var i = 0; i < n; i++) {
	for (var j = 0; j < m; j++) {
		//x++;
		b[i* m + j] = a[i][j];
	}
}

console.log(b);
