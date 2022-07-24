// complete the function
function solution(string) {
  console.log(string);
  console.log(string.length);
  console.log(typeof string[0]);
  let result = "";
  for (let i = 0; i < string.length; i++) {
    console.log(i);
    console.log(string.length);
    if (string[i] == string[i].toUpperCase() || i == string.length - 1) {
      if (string[i] == string[i].toUpperCase()) {
        result += string.slice(0, i);
        result += " ";
      }
      if (i == string.length - 1) {
        result += string.slice(0, i + 1);
      }
      string = string.substring(i, string.length);
      console.log(string);
      i = 0;
    }
  }
  return result;
}
