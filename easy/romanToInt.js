// 13. Roman to Integer

/**
 * Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanSymbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    const len = s.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        if (i === len - 1) {
            sum += romanSymbols[s[i]]
            break
        }
        if (romanSymbols[s[i]] < romanSymbols[s[i + 1]]) {
            sum += romanSymbols[s[i]]
        }
        else {
            sum += romanSymbols[s[i + 1]] - romanSymbols[s[i]];
            i++
        }
    }
    return sum;
};
const sum = romanToInt("MMCDXXV");
console.log(sum)
