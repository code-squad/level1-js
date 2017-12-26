var board = document.getElementById('board');

board.onclick = function(event) {
    if(event.target.id !=="board") {
        var location = event.target.id;
        console.log("버튼 클릭 ", location);
        game.play(location);
    }
}

var display = document.getElementById('display');
display.innerHTML = "TURN:0 O의 차례";

var game = { arr: [] };

game.init = function() {
    //init array
    for (var i = 0; i < 3; i++) {
        this.arr[i]  = [];
        for (var j = 0; j < 3; j++) {
            this.arr[i][j] = 0;
        }
    }
    this.turn = 0;
    this.now = "X";
    this.next = "O";
};
game.init();

game.progress = function() {
    this.turn++;
    var t = this.now;
    this.now = this.next;
    this.next = t;
};

game.update = function(location) {
    var i, j;
    [i, j] = location.split("").map(Number);

    if(this.arr[i][j]=== 0) {
        this.progress();        
        this.arr[i][j] = this.now;
        return true;
    } else {
        return false;
    }
};

game.updateDisplay = function(location) {
    var str = "TURN: " + this.turn +" | ";
    str += this.next + "의 차례";
    display.innerHTML = str;
    document.getElementById(location).innerHTML = this.now;
};

game.play = function(location) {
    var ok = this.update(location);
    if (ok) {
        this.updateDisplay(location);
        this.winner();
    } else {
        var error = document.getElementById("error");
        error.innerHTML = "둘 수 없는 곳입니다. 다시 두세요";
    }
};

game.winner = function() {
    if (this.arr[0][0] == this.arr[0][1] && this.arr[0][2]) {
        console.log(this.arr[0][0], "이 이김");
    }
}