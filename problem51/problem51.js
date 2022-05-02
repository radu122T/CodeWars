// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


function removeEveryOther(arr){
    let k=[arr[0]]
    for (let i=2; i<arr.length; i+=2)
        k.push(arr[i])
    return k
  }

  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))

  //