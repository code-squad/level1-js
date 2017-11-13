var names = "JL hannah jina hyun will jack koo"
var narr = names.split(" ");

while (narr.length != 0) {
	var idx = Math.floor(Math.random() * narr.length);
	console.log(narr[idx]);
	narr.splice(idx, 1);
}
