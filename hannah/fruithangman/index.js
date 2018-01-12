/**
 * Created by hannahch on 2017-11-06.
 */
var answer = ['apple','banana','watermelon','grape','cherry','apricot','strawberry','citron','peach','pear'];
var hint = ['red','yellow','green&red','purple','red','beige','red','orange&yellow','pink','beige'];
var answerArr = [];
var currArr = [];
var count = 5;
var answercheck=0;
var x ='';

function selectAnswer() {
    var rannum = parseInt(Math.random()*9);
    currArr.push(rannum);
    var randomAnswer= answer[rannum];
    answerArr = randomAnswer.split('');

}
selectAnswer();

function makeQuestion(answerArr) {
    for(var i=0; i<answerArr.length; i++){
        var div = document.createElement('div');
        div.style.cssText = 'width:40px; height:40px; background-color : beige; float: left; margin-left: 2px; margin-top:10px';
        div.setAttribute('id',"div"+i);
        var que= document.getElementById('question');
        que.appendChild(div);
    }
}makeQuestion(answerArr);


for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++ ) {
    var str = String.fromCharCode(i);
    var button = document.createElement('button');
    button.innerHTML = str;
    var keys = document.getElementById('keywrap');
    keys.appendChild(button);
}

keys.onclick = function(event) {
    x = event.target.innerHTML;
    checkAnswer(x);
};


function checkAnswer(x) {

    var inputLetter = x;
    var find = false;

    for(var i=0; i<answerArr.length; i++){
        if(inputLetter===answerArr[i]){
            document.getElementById('div'+i).innerHTML = inputLetter;
            find = true;
            answercheck ++;
        }
        
    }
    if(!find){
        var rediv = document.getElementById('die'+count);
        rediv.remove();
        count--;
    }

    endGame();

}

function showHint() {
    var curr = currArr[0];
    var currH = hint[curr];
    document.getElementById('hint').innerHTML = currH;

}


function endGame() {
    if(count===0){
        alert("죽엇다 크크 새로고침 눌러랑");
    }
    var exist = true;
    for (var i = 0; i < answerArr.length; i++) {
        var val = document.getElementById('div' + i).innerText;
        if ((val === "")) {
            exist = false;
        }
    }

    if (exist) {
        var childp = document.createElement('h1');
        childp.innerHTML = "축하합니다 정답!";
        childp.style.cssText="clear:both; font-size:20px; margin-top:10px;";
        var parentp = document.getElementById('ending');
        parentp.appendChild(childp);
    }
}




