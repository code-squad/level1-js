const PIECE_COLOR = '#323939';
var blank = 0;
var board = [[1,2,3],[4,5,6],[7,8,0]];
var swapcheck = true;

var swap = {
    Up: function (m,n) {
        if (board[m - 1][n] === blank) {
            board[m - 1][n] = board[m][n];
            makeBlank(m,n);
            document.getElementById('piece'+(m-1)+n).style.cssText = "background-color:"+PIECE_COLOR+";";

        }
        return [m-1,n];

    },

    Down: function (m,n) {
        if (board[m + 1][n] === blank) {
            board[m + 1][n] = board[m][n];
            makeBlank(m,n);
            document.getElementById('piece'+(m+1)+n).style.cssText = "background-color:"+PIECE_COLOR+";";
        }
        return [m+1,n];
    },

    Right: function (m,n) {
        if (board[m][n + 1] === blank) {
            board[m][n + 1] = board[m][n];
            makeBlank(m,n);
            document.getElementById('piece'+m+(n+1)).style.cssText = "background-color:"+PIECE_COLOR+";";
        }
        return [m,n+1];
    },

    Left: function (m,n) {
        if (board[m][n - 1] === blank) {
            board[m][n - 1] = board[m][n];
            makeBlank(m,n);
            document.getElementById('piece'+m+(n-1)).style.cssText = "background-color:"+PIECE_COLOR+";";
        }
        return [m,n-1];
    }
};


function makeBlank(m,n) {
    board[m][n] = blank;
    document.getElementById('piece'+m+n).style.cssText = "background-color:gray; color:gray;";
    document.getElementById('piece'+m+n).innerHTML=" ";
}


function shufflePiece() {
    //맨 처음, (2,2)에 있는 빈 배열만 둘 중 랜덤 한곳으로 옮겨줌
    var move = ['Up', 'Left'];
    var num = Math.floor(Math.random() * 2);
    var order = move[num];
    var currPosArr = swap[order](2, 2);
    console.log(currPosArr);

    var count = 0;
    while(count<500) {
        var orderArray = [];
        if (currPosArr[0] === 0) {
            orderArray.push('Down');
        }
        if (currPosArr[0] === 1) {
            orderArray.push('Down', 'Up');
        }
        if (currPosArr[0] === 2) {
            orderArray.push('Up');
        }
        if (currPosArr[1] === 0) {
            orderArray.push('Right');
        }
        if (currPosArr[1] === 1) {
            orderArray.push('Right', 'Left');
        }
        if (currPosArr[1] === 2) {
            orderArray.push('Left');
        }

        for (var i = 2; i <= 4; i++) {
            if (orderArray.length === i) {
                var s = Math.floor(Math.random()*i);
                swap[orderArray[s]](currPosArr[0], currPosArr[1]);
                currPosArr = swap[orderArray[s]](currPosArr[0], currPosArr[1]);
            }
        }
        count++;
    }


}


function drawBoard(){
    for(var i=0;  i<3; i++){
        for(var j=0; j<3; j++){
            document.getElementById('piece'+i+j).innerHTML = board[i][j];
        }
    }
}


for(var i=0;  i<3; i++){
    for(var j=0; j<3; j++){
        (function(m,n){
            var piece = document.getElementById('piece'+m+n);
            piece.onclick = function () {
                if(!swapcheck) return;
                swapPiece(m, n);
                drawBoard(m, n);
                gameComplete();
        }})(i,j);
    }
}



function swapPiece(m,n) {
    console.log(m);
    if(m===0){
        swap.Down(m,n);
    }
    if(m===1){
        swap.Up(m,n);
        swap.Down(m,n);
    }

    if(m===2){
        swap.Up(m,n);
    }

    if(n===0){
        swap.Right(m,n);
    }

    if(n===1){
        swap.Left(m,n);
        swap.Right(m,n);
    }

    if(n===2){
        swap.Left(m,n);
    }
}


function gameComplete() {
    var comnum=[[1,2,3],[4,5,6],[7,8,0]];
    var check = true;

    for(var i=0; i<board.length; i++){
        for(var j=0; j<3; j++){
            if(board[i][j] !== comnum[i][j]) {
                check = false;
                break;

            }
        }
        if(!check)break;
    }
    if(check) {
        swapcheck = false;
        var rebtn = document.getElementById('refresh');
        rebtn.style.cssText="backgroud-color:#e1db4f; box-shadow: rgb(76, 85, 29) 0px 0px 20px;";
        var p00 = document.getElementById('piece00');
        p00.style.cssText = "background-color:#f5b8b3; color:gray";

        var p21 = document.getElementById('piece21');
        p21.style.cssText = "background-color:#f5b8b3; color:gray";
        var p02 = document.getElementById('piece02');
        p02.style.cssText = "background-color:#cccde1; color:gray";
        var p10 = document.getElementById('piece10');
        p10.style.cssText = "background-color:#cccde1; color:gray";
        var p01 = document.getElementById('piece01');
        p01.style.cssText = "background-color:#b5d77f; color:gray";
        var p11 = document.getElementById('piece11');
        p11.style.cssText = "background-color:#b8d8e7; color:gray";
        var p12 = document.getElementById('piece12');
        p12.style.cssText = "background-color:#b5d77f; color:gray";
        var p20 = document.getElementById('piece20');
        p20.style.cssText = "background-color:#b8d8e7; color:gray";


    }
}

shufflePiece();
drawBoard();


var ref = document.getElementById('refresh');
ref.onclick = function () {
    swapcheck = true;
    board = [[1,2,3],[4,5,6],[7,8,0]];
    shufflePiece();
    drawBoard();
    for(var i=0;  i<3; i++){
        for(var j=0; j<3; j++){
            (function(m,n){
                var piece = document.getElementById('piece'+m+n);
                piece.onclick = function () {
                    swapPiece(m, n);
                    drawBoard(m, n);
                    gameComplete();
                }})(i,j);
        }
    }
};
