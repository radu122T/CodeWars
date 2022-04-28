// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    let checkIfzero = (num) => num===0
    
    if((input === null || input === [] || input.every(checkIfzero) ) )
        return []

    let poz=0
    let neg=0
    newArr=[]
    
    for (let i=0 ;i<input.length; i++)
        if (input[i]<=0) 
            neg+=input[i]
        else
            poz++
    newArr.push(poz,neg)
    return newArr
}

console.log(countPositivesSumNegatives([0,0]))