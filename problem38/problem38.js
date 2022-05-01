// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
function solve(arr){  
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let listWithListsOfLettersAndIndexes = []
    let listWithListsOfWordsinArrSplitted =[]
    let m = 0
    let final = []
    let dictionaryWithTheAlphabetAndIndexes = {}
    let indexesOfEachLetterIninitialWord = []

    //Creating an dictionaryWithTheAlphabetAndIndexesect with letters of the alphabet as keys and their indexes in the alphabet as keys
    for (const [index,element] of alphabet.entries())
        listWithListsOfLettersAndIndexes.push([index,element])
    for (let i=0 ; i<listWithListsOfLettersAndIndexes.length; i++){
        dictionaryWithTheAlphabetAndIndexes[listWithListsOfLettersAndIndexes[i][1]] = listWithListsOfLettersAndIndexes[i][0]}
    
     //Splitting the words in arr and pushing them as an arr in listWithListsOfWordsinArrSplitted
    for (let i=0 ; i<arr.length ;i++)
        {listWithListsOfWordsinArrSplitted.push(arr[i].split(""))}

    //Creating an array(indexesOfEachLetterIninitialWord) with arrays that have every letter in the words in the initial arr 
    for(let i=0 ; i<listWithListsOfWordsinArrSplitted.length; i++)
        {indexesOfEachLetterIninitialWord[i]=[]
        for (const [index,element] of listWithListsOfWordsinArrSplitted[i].entries()){
            indexesOfEachLetterIninitialWord[i].push([index,element])}}

    //Creating the final array with the numbers needed
    for (let i=0; i<indexesOfEachLetterIninitialWord.length; i++){
        final.push(m)
        m=0
        for(let j=0; j<indexesOfEachLetterIninitialWord[i].length; j++)
            {
                if (dictionaryWithTheAlphabetAndIndexes[indexesOfEachLetterIninitialWord[i][j][1].toLowerCase()] === indexesOfEachLetterIninitialWord[i][j][0])
            m++}}
    final.push(m)
    return final.splice(1)            
    }
    

console.log(solve(["encode","abc","xyzD","ABmD"]))

