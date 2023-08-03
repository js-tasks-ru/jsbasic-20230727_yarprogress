function factorial(n) {
  if (n == 0) return 1;
  let i = n - 1;
  while (i > 0) {
    n = n * i--;
  } 
  return n;
}
