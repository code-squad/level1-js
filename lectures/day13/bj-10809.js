var input = require('fs').readFileSync('/dev/stdin').toString();
var output;

var abc = "";
for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    abc += String.fromCharCode(i);
}

var ans = [];

function findIndex(str, c) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === c) {
            return i;
        }
    }
    return -1;
}

for (var i = 0; i < abc.length; i++) {
    //var loc = input.indexOf(abc[i]);
    loc = findIndex(input, abc[i]);
    ans.push(loc); 
}

output = ans.join(" ");

//console.log(input === "baekjoon");
console.log(output);
// console.log(output ===
//      "1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1");

