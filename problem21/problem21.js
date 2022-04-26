// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

// it has to have 3 points
// it has to have only correct numbers
// it has to be between 0 and 255


function isValidIP(str) {
    let k = str.split(".")
    if(!(k.length === 4))
        return false
    else
        {for (let i=0; i < 4; i++ ) {
            if ((k[i].match(/[a-zA-Z.\s_-]+/g)) || (k[i].length>1 && k[i][0] == 0) || (0>k[i]) || (k[i]>255) || k[i].length === 0)
                return false
        }}
    return true
    }
  
  

console.log(isValidIP("0.0.0.0"))
console.log(isValidIP("12.255.56.1"))
console.log(isValidIP("137.255.156.100"))
console.log(isValidIP(''))
console.log(isValidIP('abc.def.ghi.jkl'))
console.log(isValidIP('123.456.789.0'))
console.log(isValidIP('12.34.56'))
console.log(isValidIP('01.02.03.04'))
console.log(isValidIP('256.1.2.3'))
console.log(isValidIP('1.2.3.4.5'))
console.log(isValidIP('123,45,67,89'))
console.log(isValidIP('1e0.1e1.1e2.2e2'))
console.log(isValidIP(' 1.2.3.4'))
console.log(isValidIP('1.2.3.4 '))
console.log(isValidIP('12.34.56.-7'))
console.log(isValidIP('1.2.3.4\n'))
console.log(isValidIP('\n1.2.3.4'))