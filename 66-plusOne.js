const plusOne = (digits) => {
  digits[digits.length - 1] += 1;
  let n = 1;
  while (digits[digits.length - n] === 10) {
    digits[digits.length - n] = 0;
    if (digits.length - (n + 1) === -1) {
      digits.unshift(1);
    } else {
      digits[digits.length - (n + 1)] += 1;
    }
    n++;
  }
  return digits;
};

console.log(plusOne([9]));
