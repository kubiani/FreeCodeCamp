/*  
  INSTRUCTIONS 
    Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.
    
  HELPFUL HINTS
    Global String Object
    
  EXPECTED RESULTS
    repeatStringNumTimes("*", 3) should return "***".
    repeatStringNumTimes("abc", 3) should return "abcabcabc".
    repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
    repeatStringNumTimes("abc", 1) should return "abc".
    repeatStringNumTimes("*", 8) should return "********".
    repeatStringNumTimes("abc", -2) should return "".
*/

function repeatStringNumTimes(str, num) {

    if (num < 0) {
        return "";
    } else {
        return str.repeat(num);
    }
}