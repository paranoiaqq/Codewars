function dirReduc(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (arr[i] == "NORTH" && arr[i + 1] == "SOUTH") {
      console.log(arr[i] + " " + arr[i + 1] + " " + i);
      arr.splice(i, 2);
      console.log(arr.length);
      i = -1;
    }
    if (arr[i] == "SOUTH" && arr[i + 1] == "NORTH") {
      console.log(arr[i] + " " + arr[i + 1] + " " + i);
      arr.splice(i, 2);
      console.log(arr.length);
      i = -1;
    }
    if (arr[i] == "EAST" && arr[i + 1] == "WEST") {
      console.log(arr[i] + " " + arr[i + 1] + " " + i);
      arr.splice(i, 2);
      console.log(arr.length);
      i = -1;
    }
    if (arr[i] == "WEST" && arr[i + 1] == "EAST") {
      console.log(arr[i] + " " + arr[i + 1] + " " + i);
      arr.splice(i, 2);
      console.log(arr.length);
      i = -1;
    }
  }
  console.log(arr);
  return arr;
}
