/*  
  INSTRUCTIONS 
    Check if a string (first argument, str) ends with the given target string (second argument, target).

    Remember to use Read-Search-Ask if you get stuck. Write your own code.
    
  HELPFUL HINTS
    String.substr()
    
  EXPECTED RESULTS
    confirmEnding("Bastian", "n") should return true.
    confirmEnding("Connor", "n") should return false.
    confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
    confirmEnding("He has to give me a new name", "name") should return true.
    confirmEnding("He has to give me a new name", "me") should return true.
    confirmEnding("He has to give me a new name", "na") should return false.
    confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
*/

function confirmEnding(str, target) {
    return str.endsWith(target);
    //return str.substr( -1 * target.length) == target ;
}