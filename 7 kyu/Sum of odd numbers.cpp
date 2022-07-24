long long rowSumOddNumbers(unsigned n){
  long long num = n * (n-1) + 1;
  long long sum = 0;
  for (int i = 0; i < n; i++)
    {
    sum += num;
    num += 2;
  }
  return sum;
}