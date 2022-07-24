function rot13(message) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result = "";
  for (let i = 0; i < message.length; i++) {
    let letterPosition = alphabet.indexOf(message[i].toLowerCase());
    if (letterPosition == -1) {
      result += message[i];
      continue;
    }
    if (letterPosition <= 12) {
      if (message[i] == message[i].toUpperCase()) {
        result += alphabet[letterPosition + 13].toUpperCase();
      } else {
        result += alphabet[letterPosition + 13];
      }
    } else {
      if (message[i] == message[i].toUpperCase()) {
        result += alphabet[letterPosition - 13].toUpperCase();
      } else {
        result += alphabet[letterPosition - 13];
      }
    }
  }
  return result;
}
