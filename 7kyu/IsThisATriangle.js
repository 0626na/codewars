function isTriangle(a, b, c) {
  const secondLonger = a > b ? a : b;
  const first = secondLonger >= b ? a : b;
  const longest = c >= secondLonger ? c : secondLonger;

  return longest < first + secondLonger;
}
