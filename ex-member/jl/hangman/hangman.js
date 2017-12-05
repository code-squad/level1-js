var msg_div = document.getElementById("msg");
msg_div.innerHTML = "Let's get the game started!";

var words = ["watermelon", "orange", "grapefruit", "raspberry", "dragonfruit", 
                  "shallot", "sweetpea", "persimmon", "eggplant", "radish"];

// generate a random word
var ranword = words[Math.floor(Math.random() * words.length)];
console.log(ranword);

// generate an empty array and fill it with _s
var answerarr = [];
for (var i = 0; i < ranword.length; i++) {
    answerarr[i] = "_ ";  
}

// the number of underscores would be subtracted when the player gets a right letter 
var remainingLetters = ranword.length;
var life = 5;

// function starts to have the game started  
function doGame(ch) {

    // let the player know the current status
    var str = "";
    var find = false;

    // store the letter entered by the player 
    if (!ch) { 
        msg_div.innerHTML = "Please enter one letter.";
         return;
     } else if (ch.length > 1) {
         msg_div.innerHTML = "Please enter a single letter only.";
         return;
     } else {
         for (var j = 0; j < ranword.length; j++) {
             if (ranword[j] === ch) {
                 answerarr[j] = ch;
                 remainingLetters--;
                 find = true;    
             }
         }
     }

     // 
     if(!find) {
         life--;
     }

     if(life < 1 ) {
              msg_div.innerHTML = "You lost :( ";
              return;
     }
    if(remainingLetters == 0) {
         msg_div.innerHTML = "Congrats! You won!";
         return;
   } 
    str = answerarr.join("");
    str += "<br>\n";
    str += "Remaining Letters: " + remainingLetters + " Life: " + life; 
    msg_div.innerHTML = str;
};

// get the inputbox value and store it and then clear it on the document page
function submitLetter() {
    var inputbox = document.getElementById("inputbox");
    // get the value from the inputbox 
    var ch = inputbox.value; 
    // log the input value
    console.log(ch);
    // clear the inputbox
    document.getElementById("inputbox").value="";
    // call the game function
    doGame(ch);
}