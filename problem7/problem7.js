//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    numberOfZeros = 0
    for (let i=0 ; i<=arr.length-1; i++) 
        if (arr[i] === 0) 
        numberOfZeros++
    
    let filteredArr = arr.filter(value => value !== 0)
    
    for (let i=0; i<numberOfZeros; i++) 
        filteredArr.push(0)
    
    return filteredArr        

}


console.log(moveZeros([false,0,5,3,7,0,1,4,2]))