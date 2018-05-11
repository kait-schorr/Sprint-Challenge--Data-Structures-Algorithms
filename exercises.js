let n = 10;
let sum = 0;
for (i = 0; i < n; i++) {
  for (j = i + 1; j < n; j++) {
    for (k = j + 1; k < n; k++) {
      for (l = k + 1; l < 10 + k; l++) {
        sum++;
      }
    }
  }
}
console.log(sum);
