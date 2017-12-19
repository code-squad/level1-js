var rsum = function(a, b) {
    if (a >= b) {
        return a;
    }
    //return b + rsum(a, b - 1);
    return a + rsum(a + 1, b);
};

console.log(rsum(1,1) === 1); 
console.log(rsum(1,-1) === 1);
console.log(rsum(1,10) === 55); 

function fibo(n) {
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(0) === 0);
console.log(fibo(1) === 1);
console.log(fibo(2) === 1);
console.log(fibo(3) === 2);
console.log(fibo(4) === 3);
console.log(fibo(5) === 5);


function time(n) {
    var s = new Date();
    var ret = fibo(n);
    console.log("걸린 시간:", new Date() -s);
    return ret;
}

function fibo2(n) {
   var arr = [0, 1];
   for (var i = 2; i <= n; i++) {
       arr[i] = arr[i - 1] + arr[i - 2];
   }
   return arr[n];
}

var arr =[0, 1];
function fibo3(n) {
    if(arr[n] == undefined) {
        arr[n] = fibo3(n - 1) + fibo3(n - 2);
        
        console.log(n, arr);
    }
    return arr[n];
}