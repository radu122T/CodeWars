// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.



function consecutive(arr, a, b) {
    console.log(arr.indexOf(a))
    if (arr[arr.indexOf(a)+1]===b || arr[arr.indexOf(a)-1]===b)
        return true
    return false 
  }


console.log(consecutive([1, 3, 5, 7], 3, 7))