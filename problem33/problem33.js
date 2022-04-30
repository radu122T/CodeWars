// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function sameCase(a, b){
    console.log((a.toString().match(/[A-Za-z]/g)))
    if ((a.toString().match(/[^A-Za-z]/g) || (b.toString().match(/[^A-Za-z]/g) )))
        return -1
    else if ( ((a+b).toUpperCase() === a+b) || ((a+b).toLowerCase() === a+b) )
        return 1
    
    return 0
  }

console.log(sameCase('C', 'B'))
console.log(sameCase('b', 'a'))
console.log(sameCase('d', 'd'))
console.log(sameCase('A', 's'))

console.log(sameCase('c', 'B'))
console.log(sameCase('b', 'Z'))
console.log(sameCase('\t', 'Z'))
console.log(sameCase(':', '4'))
