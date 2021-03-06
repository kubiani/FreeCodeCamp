/*  
  INSTRUCTIONS 
    You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
    Remove all elements from the initial array that are of the same value as these arguments.

  HELPFUL HINTS
    Arguments object
    Array.filter()

  EXPECTED RESULTS
    destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
    destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
    destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
    destroyer([2, 3, 2, 3], 2, 3) should return [].
    destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
*/

function destroyer(arr) {

    for (i=1; i<arguments.length; i++) {
        arr = arr.filter(match.bind(null, arguments[i]));
    }
    return arr;
}

function match(arg, val, idx, arr) {
    return val !== arg;
}
