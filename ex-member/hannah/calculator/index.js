/**
 * Created by hannahch on 2017-10-31.
 */

var numArray = [];
var catArray = [];


function checkNum(button) {
    var x = button;

    if((typeof x === 'number' || x === '.')&&numArray.length<8){
        if(numArray.length===0){
            numArray.push(x);
            document.getElementById('windownum').innerHTML = x;
        }
        else if(numArray.length<7){
            numArray.push(x);
            var showArray = numArray.slice();
            var show = showArray.join('');
            document.getElementById('windownum').innerHTML = show;
        }
        else{
            stopButton();
            document.getElementById('windownum').innerHTML = '';
        }
    }

    else{
        var cat = parseFloat(numArray.join(''));
        catArray.push(cat);
        catArray.push(x);
        numArray = [];

    }



}



function resultNum() {
    stopButton();

    if (numArray.length === 0) {
        document.getElementById('windownum').innerHTML = "";
    }
    else {
        var cat = parseFloat(numArray.join(''));
        catArray.push(cat);
        numArray = [];

        var sum = catArray[0];

        var calculator = {
            '+': function (num) {
                sum += num
            },

            '-': function (num) {
                sum -= num
            },

            'x': function (num) {
                sum = sum * num
            },

            '/': function (num) {
                sum = sum / num

            }
        };

        for (var i = 1; i < catArray.length; i += 2) {
            var sign = catArray[i];
            calculator[sign](catArray[i + 1]);
        }
        console.log(sum);
        sum = restrictNum(sum);
        console.log(sum);
        document.getElementById('windownum').innerHTML = sum;
    }
}

function stopButton() {
    document.getElementById('ver').style.cssText="background-color:rgba(115, 145, 165, 0.23); color:rgba(115, 145, 165, 0.23);";
    document.getElementById('zerobtn').style.cssText="background-color:rgba(115, 145, 165, 0.23); color:rgba(115, 145, 165, 0.23);";
    document.getElementById('clearbtn').style.cssText="box-shadow:rgba(22, 36, 105, 0.53) 0px 0px 15px";
    var sinbtn = document.getElementsByClassName('btn-single');
    for(var i=0; i<sinbtn.length; i++){
        sinbtn[i].style = "background-color:rgba(115, 145, 165, 0.23); color:rgba(115, 145, 165, 0.23);"
    }
}

function restrictNum(num) {
    num = num.toString();
    if(num.length>8) {
        var arr = num.split('', 8);
        num = parseFloat(arr.join(''));
    }
    else{
        return num;
        }
        return num;
}

function clearCal() {
    document.getElementById('clearbtn').style.cssText="box-shadow:none";
    document.getElementById('ver').style.cssText="background-color:rgba(255, 187, 0, 0.6); color:#ffffff;";
    document.getElementById('zerobtn').style.cssText="background-color:rgba(115, 145, 165, 0.6); color:#ffffff;";
    var sinbtn = document.getElementsByClassName('btn-single');
    for(var i=0; i<sinbtn.length; i++){
        sinbtn[i].style = "background-color:rgba(115, 145, 165, 0.6); color:#ffffff;"
    }

    document.getElementById('window').style.boxShadow = "1px 1px 2px rgb(115, 131, 145)";
    numArray = [];
    catArray = [];
    document.getElementById('windownum').innerHTML = "";

}

