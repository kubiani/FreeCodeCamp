/*
  INSTRUCTIONS
    Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
    The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
    As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

  HELPFUL HINTS
    Remainder

  EXPECTED RESULTS
    sumFibs(1) should return a number.
    sumFibs(1000) should return 1785.
    sumFibs(4000000) should return 4613732.
    sumFibs(4) should return 5.
    sumFibs(75024) should return 60696.
    sumFibs(75025) should return 135721.
*/

function sumFibs(num) {
    var fib = [1, 1], cFib = 0, sum = 2;
    while ( cFib <= num) {
        cFib = fib[fib.length-2] + fib[fib.length-1];
        if (cFib <= num) { fib.push(cFib); };
    }

    var odds = fib.filter( function(a) { return a % 2 !== 0; });

    return odds.reduce( function(a, b) { return a + b; });
}
