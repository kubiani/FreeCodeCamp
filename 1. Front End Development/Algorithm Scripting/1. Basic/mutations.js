/*  
  INSTRUCTIONS 
    Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
    For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
    The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
    Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

  HELPFUL HINTS
    String.indexOf()
    
  EXPECTED RESULTS
    mutation(["hello", "hey"]) should return false.
    mutation(["hello", "Hello"]) should return true.
    mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
    mutation(["Mary", "Army"]) should return true.
    mutation(["Mary", "Aarmy"]) should return true.
    mutation(["Alien", "line"]) should return true.
    mutation(["floor", "for"]) should return true.
    mutation(["hello", "neo"]) should return false.
*/

function mutation(arr) {

    var aStr = arr[0].toLowerCase();         // string to look in
    var bStr = arr[1].toLowerCase();         // string to look for, letters
    var m = 0;

    for (i=0; i<bStr.length; i++) {
        var idx = aStr.indexOf(bStr[i]);
        if (idx >= 0) { m++; }
    }

    return m == bStr.length;
}