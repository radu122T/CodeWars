//Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    let newString = string.replace(/([A-Z])/g,' $1')
    return newString

    
    
}
console.log(solution("camelCaseCase"))
