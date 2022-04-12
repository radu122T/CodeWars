// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
//The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
  text = text.toLowerCase()
  let textInSet = new Set(text)
  let arrWithOneOfAKind= Array.from(textInSet)
  let arrWithText = Array.from(text)
  for (let i=0 ; i<arrWithOneOfAKind.length; i++)
    arrWithText.splice(arrWithText.indexOf(arrWithOneOfAKind[i]),1)
  numberOfDuplicates = new Set(arrWithText)
  return numberOfDuplicates.size
}

console.log(duplicateCount("Indivisibilities" ))