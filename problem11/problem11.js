// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag (str) {
    if (str.length === 0)
        return false
    newArr = str.split(" ")
    arrWithWords = []
    for (i=0; i<newArr.length; i++)
        arrWithWords.push(newArr[i].charAt(0).toUpperCase()+newArr[i].slice(1))
    finalWord =arrWithWords.join("")
    if (finalWord.length>139 || finalWord.length === 0)
        return false
    else 
        return "#" + finalWord
}

console.log(generateHashtag(""))