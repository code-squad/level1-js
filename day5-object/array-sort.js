var arr = [1, 3, 21, 11, 1111, 34, 34, 3456, 54];

console.log("src: ", arr);

arr.sort(function(a, b) {
	return a - b;
});

console.log("After sort1: ",arr);

arr.sort(function(a, b) {
	return b - a;
});

console.log("After sort2: ",arr);
