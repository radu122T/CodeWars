// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

function eachCons(array, n) {
    let k = []
    console.log(array.slice(0,3))
    for (let i=0, j=n ; i<(array.length-n), j<=array.length; i++, j++){
        console.log(array.slice(i,j))
        k.push(array.slice(i,j))}
    return k
}

console.log(eachCons([1,2,3,4], 3))