import { UV_UDP_REUSEADDR } from 'constants';

var input = require('fs').readFileSync('/dev/stdin').toString();
var output;

var abc = [];
for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    abc.push(String.fromCharCode(i));
}

var ans = [];

var hash = {};
for (var i = 0; i < input.length; i++) {
    if (hash[input[i]] == undefined) {
        hash[input[i]] = i;
    }
}

function findIndex(c) {
    var n = hash[c];
    if (n == undefined) {
        return -1;
    } else {
        return n;
    }
}

for (var i = 0; i < abc.length; i++) {
    //var loc = input.indexOf(abc[i]);
    loc = findIndex(abc[i]);
    ans.push(loc); 
}

output = ans.join(" ");

//console.log(input === "baekjoon");
console.log(output);
// console.log(output ===
//      "1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1");

