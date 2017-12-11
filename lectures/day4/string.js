var str = "";
var repeat = 30 * 1000 * 1000;

start = new Date();
var arr = [];
for (var i = 0; i < repeat; i++) {
  arr.push("a");
}

end = new Date();
var str = arr.join("");
console.log(str.length, end -start , "ms");
