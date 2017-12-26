//1-n까지 정수가 들어있는 배열을 생성한다.
//length: 생성될 배열의 길이
//return: 배열
function genArray(length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = i + 1;
    }
    return arr;
}

//knuth shuffle
function shuffle(arr) {
    for(var i = arr.length - 1; i > 0; i--) {
        var imax = i + 1;
        var ridx = Math.floor(Math.random() * imax);
        var temp = arr[i];
        arr[i] = arr[ridx];
        arr[ridx] = temp; 
    }
}

function arraySwap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var idx = i;
        var min = arr[i];
        for (var j = i; j < arr.length; j++) {
            if (arr[j] < min) {
                idx = j;
                min = arr[j];
            }
        }
        var temp = arr[i];
        arr[i] = arr[idx];
        arr[idx] = temp;
    }
}

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var temp = arr[i];
        for( var j = i - 1; j >= 0; j--) {
            if (temp >= arr[j]) {
                break;
            }
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
}

function checkSorted(arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

//for test 
var test = {
    length: 20
};
test.start = function() {
    this.s = new Date();
};

test.end = function() {
    var now = new Date();
    this.time = now - this.s;
};

//main function
(function() {

    console.log("=============Sort Test Init=======");
    test.length = 100 * 1000; //100T
    var testArray = genArray(test.length);
    shuffle(testArray);

    console.log("=============Selection Sort=======");
    test.start();
    selectionSort(testArray);
    test.end();
    console.log("selection sort with random: ", test.time, checkSorted(testArray));

    arraySwap(testArray, 0, testArray.length - 1);
    test.start();
    selectionSort(testArray);
    test.end();
    console.log("selection sort with ordered: ", test.time, checkSorted(testArray));
    
    //now we start insertion sort! 
    console.log("=============Insertion Sort=======");
    shuffle(testArray);
    test.start();
    insertionSort(testArray);
    test.end();
    console.log("insertion sort with random: ", test.time, checkSorted(testArray));

    arraySwap(testArray, 0, testArray.length - 1);
    test.start();
    insertionSort(testArray);
    test.end();
    console.log("insertion sort with ordered: ", test.time, checkSorted(testArray));


    console.log("=================js sort=================");
    shuffle(testArray);
    test.start();
    testArray.sort((a, b) => (a - b));
    test.end();
    console.log("js sort with random: ", test.time, checkSorted(testArray));
    arraySwap(testArray, 0, testArray.length - 1);
    test.start();
    testArray.sort((a, b) => (a - b));
    test.end();
    console.log("js sort with ordered: ", test.time, checkSorted(testArray));
})();
