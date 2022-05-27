const longestPalindrome = (s) => {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    let len;
    if (len1[2] > len2[2]) {
      len = len1;
    } else {
      len = len2;
    }

    if (len[2] > end - start) {
      start = len[0];
      end = len[1];
    }
  }

  return s.substring(start, end + 1);
};

const expandAroundCenter = (s, left, right) => {
  if (s[left] != s[right]) return [0, 0, 0];
  let L = left;
  let R = right;
  while (L >= 0 && R < s.length && s[L] == s[R]) {
    L--;
    R++;
  }
  if (R - 1 - (L + 1) === 0) return [0, 0, 0];
  return [L + 1, R - 1, R - 1 - (L + 1)];
};

// TEST

const input = "acbcdcbd";

console.log(longestPalindrome(input));
// longestPalindrome(input);
