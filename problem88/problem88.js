// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

function remove (string) {
    let arr = string.split(" ")
    let finalarr=[]
    for(let i=0; i<arr.length; i++)
        {if (arr[i].replace(/!/gi,"").length != arr[i].length-1)
            finalarr.push(arr[i])}
    return finalarr.join(" ")
  }

  console.log(remove("Hi! !Hi! Hi!"))