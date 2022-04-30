// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)
// FUNDAMENTALS

function vowelIndices(word){
    let k= []
    let o = word.split("")
    for (const [index, element] of o.entries())
        {if (element.match(/[a,e,i,o,u,y,A,E,I,O,U,Y]/))
            k.push(index+1)}
    return k
}


console.log(vowelIndices("lkqo"))