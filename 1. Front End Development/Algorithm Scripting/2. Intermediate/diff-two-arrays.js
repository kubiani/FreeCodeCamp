/*
  INSTRUCTIONS
    Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

  HELPFUL HINTS
    Comparison Operators
    Array.slice()
    Array.filter()
    Array.indexOf()
    Array.concat()

  EXPECTED RESULTS
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
    diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return ["pink wool"].
    diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return ["diorite", "pink wool"].
    diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) should return [].
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4].
    diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) should return ["piglet", 4].
    diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) should return ["snuffleupagus", "cookie monster", "elmo"].
    diffArray([1, "calf", 3, "piglet"], [7, "filly"]) should return [1, "calf", 3, "piglet", 7, "filly"].
*/

function diffArray(arr1, arr2) {

    var diff1 = arr1.filter( (x) => arr2.indexOf(x) == -1);
    var diff2 = arr2.filter( (x) => arr1.indexOf(x) == -1);
    return diff1.concat(diff2);
}
