/*
  INSTRUCTIONS
    Sum all the prime numbers up to and including the provided number.
    A prime number is defined as having only two divisors, 1 and itself.
        For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.
    The provided number may not be a prime.

  HELPFUL HINTS
    For Loops
    Array.push()

  EXPECTED RESULTS
    sumPrimes(10) should return a number.
    sumPrimes(10) should return 17.
    sumPrimes(977) should return 73156.
*/

function sumPrimes(num) {

    // create an array of primes
    var primes = [];
    for (i=0; i<=num; i++) {
        if ( isPrime(i) ) { primes.push(i); }
    }

    // use reduce to sum into a single value
    return primes.reduce( function(a, b) { return a + b; } );
}

function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
    if (n%2===0) return (n==2);
    if (n%3===0) return (n==3);
    for (var i=5; i<=Math.sqrt(n); i+=6) {
        if (n%i===0)     return false;
        if (n%(i+2)===0) return false;
    }
    return true;
}
