/*  
  INSTRUCTIONS 
    Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
        For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
    Calling this returned function with a single argument will then return the sum:
        var sumTwoAnd = addTogether(2);
        sumTwoAnd(3) returns 5.
    If either argument isn't a valid number, return undefined.

  HELPFUL HINTS
    Closures
    Arguments object
    
  EXPECTED RESULTS
    addTogether(2, 3) should return 5.
    addTogether(2)(3) should return 5.
    addTogether("http://bit.ly/IqT6zt") should return undefined.
    addTogether(2, "3") should return undefined.
    addTogether(2)([3]) should return undefined.
*/

function addTogether() {

    if ( invalidArgs(arguments) ) {
        return undefined;
    }

    if (arguments.length == 1) {
        var n1 = arguments[0];
        return function (a) {
            if ( invalidArgs(arguments) ) {
                return undefined;
            }
            return a + n1; };

    } else {
        return arguments[0] + arguments[1];
    }
    return false;
}

function invalidArgs(args) {
    for (v of args) {
        if (typeof v !== 'number') {
            return true;
        }
    }
    return false;
}

