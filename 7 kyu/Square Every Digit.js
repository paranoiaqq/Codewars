function squareDigits(num) {
  num = num.toString();
  var str = "";
  for (let i = 0; i < num.length; i++) {
    let n = num[i];
    n = parseInt(n, 10);
    n = n * n;
    str += n.toString();
  }
  str = parseInt(str, 10);
  return str;
}
