function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        arr = new Array();
        arr.push(i);
        arr.push(j);
        console.log(arr);
      }
    }
  }
  return arr;
}
