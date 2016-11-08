/*
  INSTRUCTIONS
    We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
    The lowest number will not always come first.

  HELPFUL HINTS
    Math.max()
    Math.min()
    Array.reduce

  EXPECTED RESULTS
    sumAll([1, 4]) should return a number.
    sumAll([1, 4]) should return 10.
    sumAll([4, 1]) should return 10.
    sumAll([5, 10]) should return 45.
    sumAll([10, 5]) should return 45.
*/

function sumAll(arr) {

    var sum = 0;
    var sorted = arr.sort( (a, b) => a - b );
    for (i = sorted[0]; i <= sorted[1]; i++ ) {
        sum += i;
    }

    /*
     var min = Math.min.apply(null, arr);
     var max = Math.max.apply(null, arr);

     var sum = 0;
     for (var i = min; i <= max; i++ ) {
     sum += i;
     }*/

    return sum;
}
