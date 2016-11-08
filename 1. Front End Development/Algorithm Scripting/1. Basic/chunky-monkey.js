/*  
  INSTRUCTIONS 
    Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
    
  HELPFUL HINTS
    Array.push()
    Array.slice()
    
  EXPECTED RESULTS
    chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
*/

function chunkArrayInGroups(arr, size) {

    var nArr = [];
    var tArr = [];

    for (i=0; i<arr.length; i++) {
        tArr.push(arr[i]);

        if ( (i + 1) % size === 0 || i == arr.length - 1 ) {
            nArr.push(tArr);
            tArr = [];
        }

    }

    return nArr;
}
