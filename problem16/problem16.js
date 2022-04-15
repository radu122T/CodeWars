// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
    let regex = /\d+/g
    let positionOfNumber = strng.search(regex)
    
    // for empty string case
    if (positionOfNumber===-1)
        return strng+"1"

    let numberInString = strng.substr(positionOfNumber,strng.length-positionOfNumber)
    let numberInStringWithoutZeros = (Number(parseInt(numberInString,10))+1).toString() 
    let arrWithNumbers = numberInString.split('')

    //for 000 at the end of the string case
    if (arrWithNumbers.every(element => element==0))
        return strng.slice(0,-1) +"1"

    // for 99 case
    if (numberInString.length < numberInStringWithoutZeros.length)
         return strng.replace(regex,numberInStringWithoutZeros)
       
    let finalString = strng.replace(strng.substr(strng.length-numberInStringWithoutZeros.length,strng.length),numberInStringWithoutZeros)
    return finalString
  }

  console.log(incrementString("foobar99"))