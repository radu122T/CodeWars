// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.




function bingo(a) {
    let alphabet =[2,9,7,14,15]
    const isIna = (element) => a.indexOf(element) !== -1 
    if(alphabet.every(isIna))
        return "WIN"
    return "LOSE"
}


console.log(bingo([25,3,6,7,46,7,2,45,7,1,4,3,7,8,14,5,15,2,9,7,14,15]))