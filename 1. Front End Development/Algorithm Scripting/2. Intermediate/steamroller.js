/*
  INSTRUCTIONS
    Flatten a nested array. You must account for varying levels of nesting.

  HELPFUL HINTS
    Array.isArray()

  EXPECTED RESULTS
    steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
    steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
    steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
    steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/

function steamrollArray(arr) {
    var pancake = [];

    function smush(val) {
        if (Array.isArray(val)) {
            for( v of val ) {
                smush(v);
            }
        } else {
            pancake.push(val);
        }
    }

    arr.forEach( (a) => smush(a) );
    return pancake;
