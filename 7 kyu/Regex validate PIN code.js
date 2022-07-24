function validatePIN(pin) {
  const digitSet = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  var flag = true;
  console.log(pin);
  console.log(pin.length);
  if (pin.length == 4 || pin.length == 6) {
    flag = true;
  } else {
    return false;
  }
  console.log(flag);
  for (let i = 0; i < pin.length; i++) {
    if (!digitSet.has(pin[i])) {
      flag = false;
    }
  }
  console.log(flag);
  return flag;
}
