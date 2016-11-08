/*
  INSTRUCTIONS
    Find the missing letter in the passed letter range and return it.
    If all letters are present in the range, return undefined.

  HELPFUL HINTS
    String.charCodeAt()
    String.fromCharCode()

  EXPECTED RESULTS
    fearNotLetter("abce") should return "d".
    fearNotLetter("abcdefghjklmno") should return "i".
    fearNotLetter("bcd") should return undefined.
    fearNotLetter("yz") should return undefined.
*/

function fearNotLetter(str) {

    var cc = str.split("").map( (a) => a.charCodeAt(a) );         // turn string into charCodes
    var val = cc.find( (v, i, a) => v + 1 !== a[i + 1] );         // find where cc sequence breaks

    var res = undefined;
    if (val < cc[cc.length-1]) {                                  // pos is before last char in orig string
        res = String.fromCharCode(val + 1);
    }

    return res;
}
