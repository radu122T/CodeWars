// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
let count = (arr,i) => arr.filter(x => x===i).length 
function scramble(str1, str2) {
    let firstStringArr = str1.split("")
    let secondStringArr = str2.split("")
    let firstDict = {}
    let secondDict = {}
    
    firstStringArr.forEach(key =>
        firstDict[key]=count(firstStringArr,key))
    secondStringArr.forEach(key =>
        secondDict[key]=count(secondStringArr,key))
    
    for (let i=0;i<secondStringArr.length;i++)
        if (firstDict[secondStringArr[i]]<secondDict[secondStringArr[i]] || !firstDict.hasOwnProperty(secondStringArr[i]))
            return false
    return true
        
   }
   

   console.log(scramble('rkqodlw','world'))
   console.log(scramble('cedewaraaossoqqyt','codewars'))
   console.log(scramble('katas','steak'))
   console.log(scramble('scriptjavx','javascript'))
   console.log(scramble('scriptingjava','javascript'))
   console.log(scramble('scriptsjava','javascripts'))
   console.log(scramble('javscripts','javascript'))
   console.log(scramble('jscripts','javascript'))
   console.log(scramble('aabbcamaomsccdd','commas'))
   console.log(scramble('commas','commas'))
   console.log(scramble('sammoc','commas'))