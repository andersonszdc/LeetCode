const lengthOfLastWord = (s) => {
  const output = s.split(" ");
  let n = 1;
  while (output[output.length - n] == "") {
    n++;
  }
  return output[output.length - n].length;
};
