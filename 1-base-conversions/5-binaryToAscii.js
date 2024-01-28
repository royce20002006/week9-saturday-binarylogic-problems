// Translate the binary sequences in the
// console.logs below to 8-bit ASCII strings:

/******************************************************************************/

// Helper function to convert a binary string into an array of 8-bit strings
const binaryStringToArray = str => {
  let binary8bitStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    binary8bitStr += str[i];
    count++;
    if (count % 8 === 0) {
      if (!str[i + 1]) break;
      binary8bitStr += ',';
    }
  }
  return binary8bitStr.split(',');
};
// get the binary code by passing in the string to the helper function
  // then set a empty string as a variable
    // loop through the arr and add it to the string variable by using from char code and passing in parseInt to turn it into decimal
//return the string.
const binaryToAscii = str => {
  let arr = binaryStringToArray(str);
  let changed = '';
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    changed += String.fromCharCode(parseInt(el, 2));
    
  }
  return changed;
};

/******************************************************************************/

console.log(binaryToAscii('011000010110001001100011'));
// 'abc'

console.log(binaryToAscii('010000010100001001000011'));
// 'ABC'

console.log(binaryToAscii('010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'));
// 'Hello, world'
