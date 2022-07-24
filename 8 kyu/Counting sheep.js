function countSheeps(arrayOfSheep) {
  count = 0;
  arrayOfSheep.forEach((element) => {
    if (element == true) {
      count = count + 1;
    }
  });
  return count;
}
