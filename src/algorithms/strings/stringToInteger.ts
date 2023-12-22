// Just for fun
// convert string to integer without parseInt
// See https://www.geeksforgeeks.org/convert-string-to-integer-without-using-any-in-built-functions/

const charToInt = (char: string) => char.charCodeAt(0) - 48;

/**
 * Convert a numeric string into the equivalent integer
 * @param intString string representation of an integer
 * @returns
 */
function strToInt(intString: string) {
  var total = 0;
  for (var i = 0; i < intString.length; i++) {
    var char = intString[intString.length - 1 - i];
    total += charToInt(char) * 10 ** i;
  }
  return total;
}

/**
 * Alternate, less efficient implementation of strToInt
 *
 * @param intString
 * @returns
 */
function strToInt2(intString: string) {
  return intString
    .split("")
    .reverse()
    .reduce((total, char, i) => {
      return (total += charToInt(char) * 10 ** i);
    }, 0);
}
