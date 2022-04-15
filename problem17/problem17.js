// //Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

function unusedDigits(...newsa) {
    let deconstructedNumbers=newsa.join("").split("")
    finalArr=[]
    for (i=0 ; i<10; i++) {
        if (!deconstructedNumbers.includes(i.toString()))
        finalArr.push(i)
    }
    return finalArr.join("")
  }

console.log(unusedDigits(3,74,4,2))

