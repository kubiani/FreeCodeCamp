/*  
  INSTRUCTIONS
    Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

  HELPFUL HINTS
    RegExp
    HTML Entities
    
  EXPECTED RESULTS
    convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
    convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
    convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
    convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
    convertHTML("Shindler's List") should return Shindler&​apos;s List.
    convertHTML("<>") should return &​lt;&​gt;.
    convertHTML("abc") should return abc.
*/

function convertHTML(rawStr) {

    var sArr = rawStr.split("");

    for (i in sArr) {
        switch ( sArr[i] ) {
            case '&':
                sArr[i] = '&amp;'; break;
            case '<':
                sArr[i] = '&lt;'; break;
            case '>':
                sArr[i] = '&gt;'; break;
            case '"':
                sArr[i] = '&quot;'; break;
            case "'":
                sArr[i] = '&apos;'; break;
        }
    }

    return sArr.join("");
}