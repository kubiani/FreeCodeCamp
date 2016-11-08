/*
  INSTRUCTIONS
    Translate the provided string to pig latin.
    Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
    If a word begins with a vowel you just add "way" to the end.

  HELPFUL HINTS
    Array.indexOf()
    Array.push()
    Array.join()
    String.substr()
    String.split()

  EXPECTED RESULTS
    translatePigLatin("california") should return "aliforniacay".
    translatePigLatin("paragraphs") should return "aragraphspay".
    translatePigLatin("glove") should return "oveglay".
    translatePigLatin("algorithm") should return "algorithmway".
    translatePigLatin("eight") should return "eightway".
*/



function translatePigLatin(str) {

    var idx = str.search(/[aeiou]/);     // first vowel location
    var nStr = "";

    if ( idx === 0 ) {
        nStr = str + "way";
    } else {
        nStr = str.substr(idx) + str.substr(0, idx) + "ay";
    }

    return nStr;

}

translatePigLatin("consonant");
