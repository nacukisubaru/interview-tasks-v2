// https://chatgpt.com/c/69c8e58d-03c4-832c-9a24-8fadf5b14397
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const palindromsList = new Map();

    function reverseStr(str) {
        return str.split('').reverse().join('');
    }

    if (s === reverseStr(s)) {
      palindromsList.set(s.length, s);
    }

    let left = 0;
    let right = 0;

    for (let i = 1; i < s.length; i++) {
      left = i - 1;
      right = i + 1;

      const str = `${s[left]}${s[i]}${s[right]}`;

      const reversedStr = reverseStr(str);

      if (reversedStr === str) {
        palindromsList.set(Math.max(str.length), str);
      }

      if (s[i] === s[i + 1]) {
        palindromsList.set(2, `${s[i]}${s[i + 1]}`);
      }
    }

    const maxPalindromeLength = Math.max(...palindromsList.keys());
    const longestPalindrome = palindromsList.get(maxPalindromeLength);

    return longestPalindrome;
};

console.log(longestPalindrome('babad')); // "aba" or "bab"
console.log(longestPalindrome('cbbd')); // "bb"

console.log(longestPalindrome('racecar'));

console.log(longestPalindrome('abba'));