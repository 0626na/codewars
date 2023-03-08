function sumOfSums(n) {
  const num = n.toString().split("n")[0];
  let sResult = 0;
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      sResult = 1;
    } else sResult += (1 + i) * (i * 0.5);
  }

  return `${(1 + sResult) * (sResult * 0.5)}n`;
}

sumOfSums(169n);
