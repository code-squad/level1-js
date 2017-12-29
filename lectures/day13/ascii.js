function getAllChar() {
    var ret = "";
    for (var i = 0; i <= 255; i++) {
        ret += String.fromCharCode(i) + " ";
        if (i % 16 === 0) {
            ret += "\n";
        }
    }
    return ret;
}


//main
(function() {
    var asc = getAllChar();
    console.log(asc);
})();