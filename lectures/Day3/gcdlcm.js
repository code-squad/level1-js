function divisor(n) {
  var ret = [];
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      ret.push(i);
    }
  }
  return ret;
}

function gcd(a, b) {
  var ads = divisor(a);
  var bds = divisor(b);

  var max = ads[0];
  for (var i = 1; i < ads.length; i++) {
    if (bds.indexOf(ads[i]) !== -1) {
      max = ads[i];
    }
  }
  return max;
}

function gcdlcm(a ,b) {
  var ret = [];
  var n1 = gcd(a,b);
  return [n1, a * b / n1];
}
console.log(gcdlcm(3,12));
console.log(gcdlcm(44,20));
