var p = document.getElementById('main');
p.innerHTML = "Hello World";

function myTest(char) {
    switch(char) {
        case "a":
        console.log("아아아아아");
        return "a가 들어왔어요."
        break;
        case "b":
        console.log("바바바바바");
        return "b가 들어왔어요."
        break;
        default:
        console.log("라라라라라");
        return "배고파요."
    }
}

var input = document.getElementById('input1');
var btn = document.getElementById('btn1');

btn.onclick = function(event) {
    var str = input.value;
    var test = myTest(str);
    p.innerHTML = test;
}