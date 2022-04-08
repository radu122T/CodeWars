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