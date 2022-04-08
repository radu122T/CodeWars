//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
//You can guarantee that input is non-negative.

var countBits = function(n) {
    let binaryNumber = n.toString(2).toString()
    let numberOfOnes = 0
    for (let i = 0 ; i<= binaryNumber.length ; i++) {
        if (binaryNumber[i] === "1") {
            numberOfOnes++
        }
    }
    return numberOfOnes
  };

console.log(countBits(134))