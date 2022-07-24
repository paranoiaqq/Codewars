function openOrSenior(data) {
  let output = new Array();
  data.forEach((e) => {
    if (e[0] >= 55 && e[1] > 7) {
      output.push("Senior");
      console.log("Senior");
    } else {
      output.push("Open");
      console.log("Open");
    }
  });
  return output;
}
