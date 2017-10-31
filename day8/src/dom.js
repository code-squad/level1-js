var h1 = document.createElement("h1");
h1.innerHTML = "코딩 놀이터";
h1.id = "title";
document.body.appendChild(h1);

var div = document.createElement("div");
div.id = "main";
document.body.appendChild(div);


var p = document.createElement("p");
p.innerHTML = "0000 0000";
p.id = "display<br>";
div.appendChild(p);

var button = document.createElement("button");
button.id = "btn1";
button.innerHTML = "클릭미";
div.appendChild(button);

var button2 = document.createElement("button");
button2.id = "btn2";
button2.innerHTML = "클릭미2";
div.appendChild(button2);

console.log(document.body);
