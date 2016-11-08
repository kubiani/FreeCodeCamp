/*
  INSTRUCTIONS
    Convert the given number into a roman numeral.
    All roman numerals answers should be provided in upper-case.

  HELPFUL HINTS
    Roman Numerals
    Array.splice()
    Array.indexOf()
    Array.join()

  EXPECTED RESULTS
    convertToRoman(2) should return "II".
    convertToRoman(3) should return "III".
    convertToRoman(4) should return "IV".
    convertToRoman(5) should return "V".
    convertToRoman(9) should return "IX".
    convertToRoman(12) should return "XII".
    convertToRoman(16) should return "XVI".
    convertToRoman(29) should return "XXIX".
    convertToRoman(44) should return "XLIV".
    convertToRoman(45) should return "XLV"
    convertToRoman(68) should return "LXVIII"
    convertToRoman(83) should return "LXXXIII"
    convertToRoman(97) should return "XCVII"
    convertToRoman(99) should return "XCIX"
    convertToRoman(500) should return "D"
    convertToRoman(501) should return "DI"
    convertToRoman(649) should return "DCXLIX"
    convertToRoman(798) should return "DCCXCVIII"
    convertToRoman(891) should return "DCCCXCI"
    convertToRoman(1000) should return "M"
    convertToRoman(1004) should return "MIV"
    convertToRoman(1006) should return "MVI"
    convertToRoman(1023) should return "MXXIII"
    convertToRoman(2014) should return "MMXIV"
    convertToRoman(3999) should return "MMMCMXCIX"
*/

function convertToRoman(num) {

    // courtesy of stevenlevithan
    // comments added to help understand how it all works so succinctly
    if (!+num) { return false; }

    // split the number into it's digits
    var d = String(+num).split("");

    // process < 1000 (first 3 digits at end of d array (d.pop())
    // uses k array to lookup corresponding roman numeral
    var k = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
        "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
        "","I","II","III","IV","V","VI","VII","VIII","IX"];
    var r = "", i = 3;
    while (i--) {
        r = (k[+d.pop() + (i * 10)] || "") + r;
    }

    // process >= 1000 and return
    // creates empty array and uses separator => (value + 1)
    return Array(+d.join("") + 1).join("M") + r;

}
