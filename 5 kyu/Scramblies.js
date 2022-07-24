function scramble(str1, str2) {
  map1 = new Map();
  map2 = new Map();
  flag = true;
  for (let i = 0; i < str1.length; i++) {
    if (map1.has(str1[i])) {
      let temp = map1.get(str1[i]);
      map1.set(str1[i], ++temp);
    } else {
      map1.set(str1[i], 1);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (map2.has(str2[i])) {
      let temp = map2.get(str2[i]);
      map2.set(str2[i], ++temp);
    } else {
      map2.set(str2[i], 1);
    }
  }
  map2.forEach((value, key, map) => {
    if (value > map1.get(key) || map1.has(key) == false) {
      flag = false;
    }
  });
  return flag;
}
