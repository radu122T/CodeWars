// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

function dropCap(n) {
    let newArr = []
    newArr = n.split(" ")
    
    for (let i=0; i<newArr.length; i++){
        
        if (newArr[i].length>2)
            newArr[i]=newArr[i][0].toUpperCase()+newArr[i].slice(1).toLowerCase()}
    return newArr.join(" ")
}

console.log(dropCap("Apple Banana"))