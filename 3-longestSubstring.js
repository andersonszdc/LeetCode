const lengthOfLongestSubstring = (s) => {
  const stringSeparated = s.split("");
  let finalSubstring = [];

  for (let i = 0; i < stringSeparated.length; i++) {
    let partialSubstring = [stringSeparated[i]];
    for (let j = i + 1; j < stringSeparated.length; j++) {
      if (!stringSeparated) break;
      if (partialSubstring.every((element) => element !== stringSeparated[j])) {
        partialSubstring.push(stringSeparated[j]);
        continue;
      }
      break;
    }
    if (partialSubstring.length > finalSubstring.length) {
      finalSubstring = partialSubstring;
    }
  }
  return finalSubstring.join("").length;
};

console.log(lengthOfLongestSubstring("abcbc"));
