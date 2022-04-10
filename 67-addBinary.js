const addBinary = (a, b) => {
  const a2 = a.split("");
  const b2 = b.split("");
  const newNumber = [];

  for (let x = 1; x <= a2.length || x <= b2.length; x++) {
    const digitOfTheA = a2.length - x <= -1 ? 0 : parseInt(a2[a2.length - x]);
    const digitOfTheB = b2.length - x <= -1 ? 0 : parseInt(b2[b2.length - x]);
    newNumber.unshift(digitOfTheA + digitOfTheB);
  }

  for (let x = 1; x < newNumber.length + 1; x++) {
    if (newNumber[newNumber.length - x] === 2) {
      newNumber[newNumber.length - x] = 0;

      if (newNumber.length - (x + 1) < 0) {
        newNumber.unshift(1);
      } else {
        newNumber[newNumber.length - (x + 1)] += 1;
      }
    }

    if (newNumber[newNumber.length - x] === 3) {
      newNumber[newNumber.length - x] = 1;

      if (newNumber.length - (x + 1) < 0) {
        newNumber.unshift(1);
      } else {
        newNumber[newNumber.length - (x + 1)] += 1;
      }
    }
  }

  return newNumber;
};

console.log(addBinary("1010", "1011"));
