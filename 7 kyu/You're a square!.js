var isSquare = function (n) {
  if (Number.isInteger(Math.sqrt(n)) && n >= 0) {
    return true;
  } else {
    return false;
  }
};
