// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  // use a if statement to check if its binary or hex
    //binary always has a b at index 1
    // hex always has a x at index 1
      // then we return parseInt with a slice of 2 to get rid of the first two numbers
      // we then put what we are changing it from so binary is 2 and hex is 16.
  if (str[1] === 'b') return parseInt(str.slice(2), 2);
  if(str[1] === 'x') return parseInt(str.slice(2), 16);
  
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
