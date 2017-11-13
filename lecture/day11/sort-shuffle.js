//honux shuffle
Array.prototype.shuffle = function() {
	for(var i = 0; i < this.length * 5; i++) {
		var idx1 = Math.floor(Math.random() * this.length);
		var idx2 = Math.floor(Math.random() * this.length);
		var temp = this[idx1];
		this[idx1] = this[idx2];
		this[idx2] = temp;
	}
};

//Will shuffle
Array.prototype.shuffle3 = function() {
	var x;
	for(var i = 0; i < this.length * 5; i++) {
		var idx = Math.floor(Math.random() * this.length);
		[x] = this.splice(idx, 1);
		this.push(x);
	}
};

//knuth shuffle
Array.prototype.shuffle2 = function() {
	for(var i = this.length - 1; i >= 0; i--) {
		var idx1 = Math.floor(Math.random() * i);
		var temp = this[idx1];
		this[idx1] = this[i];
		this[i] = temp;
	}
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.shuffle();
console.log(arr);
arr.shuffle2();
console.log(arr);
arr.shuffle3();
console.log(arr);

function selectionSort(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		var min = arr[i];
		var pos = i;
		for(var j = i + 1; j < arr.length; j++) {
			if (arr[j] < min) {
				min = arr[j];
				pos = j;
			}
		}
		arr[pos] = arr[i];
		arr[i] = min;
	}
}

selectionSort(arr);
console.log(arr);
