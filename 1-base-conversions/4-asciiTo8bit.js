const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  // for changing ascii to 8 bit first you need to make a empty string var
    // then you need to loop through all the characters 
    // first you change it to a decimal
    // then you will have to add more zeros by using a helper function.
    
  let chars = '';
  for (let i = 0; i < str.length; i++) {
     decimal = str.charCodeAt(i);
     chars += addZeros(decimal.toString(2), 8)
  }
  
  return chars;
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
