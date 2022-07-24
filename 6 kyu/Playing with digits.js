function digPow(n, p) {
  let str = n.toString().split("");
  let sum = 0;
  console.log(n);
  console.log(p);
  for (let i = 0; i < str.length; i++) {
    sum += Math.pow(str[i], p);
    p++;
  }
  console.log(sum);
  console.log(p);
  console.log(sum / n);
  if (sum % n == 0) {
    return sum / n;
  } else {
    return -1;
  }
}
