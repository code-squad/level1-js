var cond = false;

while (cond) {
  console.log("1");
}

cond = true;
while (cond) {
  cond = false;
  console.log("2");
}

cond = true;
while (cond) {
  console.log("3");
  cond = false;
}


var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
console.log("last i= %d", i);


i = 0;
while (i < 5) {
  i++;
  console.log(i);
}
console.log("last i= %d", i);

cond = true;
i = 0;
while(true) {
  if (i == 100) {
    break;
  }
  console.log("hi", i);
  i++;
}
