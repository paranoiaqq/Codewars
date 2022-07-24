function digitize(n) {
  var array = new Array();
  var str = String(n).split("");
  str = str.reverse();
  return str.map(Number);
}
