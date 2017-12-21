function myParseInt(str) {
	var sum = 0;
	for (i = 0; i < str.length; i++) {
		sum = sum * 10;
		sum += str.charCodeAt(i) - '0'.charCodeAt(0);
	}
	return sum;
}

function myBinToDec(bin) {
	var sum = 0;
	for (i = 0; i < bin.length; i++) {
		sum = sum * 2;
		if (bin[i] == '1') {
			sum += 1;
		}
	}
	return sum;
}

function decToBin(n) {
	var arr = [];
	while(true) {
		var r = n % 2;
		//n = Math.floor(n / 2);
		n  = n >> 1; //bit shift 
		arr.unshift(r);
		if (n == 0) {
			break;
		}
	}
	return arr.join("");
}

function test() {
console.log(myParseInt('100') === 100);
console.log(myParseInt('345') === 345);
console.log(myParseInt('6070') === 6070);
console.log(myBinToDec('1101') === 13);
console.log(myBinToDec('1010') === 10);
console.log(myBinToDec('11') === 3);
console.log(myBinToDec('100') === 4);
console.log(decToBin(2) === '10', decToBin(2));
console.log(decToBin(6) === '110');
console.log(decToBin(15) === '1111');
console.log(decToBin(10) === '1010');
}

test();
