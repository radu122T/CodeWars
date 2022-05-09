// A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

// Write a function that computes the nth smallest Hamming number.

// Specifically:

// The first smallest Hamming number is 1 = 203050
// The second smallest Hamming number is 2 = 213050
// The third smallest Hamming number is 3 = 203150
// The fourth smallest Hamming number is 4 = 223050
// The fifth smallest Hamming number is 5 = 203051
// The 20 smallest Hamming numbers are given in example test fixture.

// Your code should be able to compute all of the smallest 5,000 (Clojure: 2000, NASM: 13282) Hamming numbers without timing out.


function hamming (n) {
    var set = new Set();
    set.add(1);
    for (var i = 0; i < n - 1; i++) {
        var currentElem = getMinElemOfSet(set);
        [currentElem * 2, currentElem * 3, currentElem * 5].forEach(item => set.add(item))
        set.delete(currentElem);
    }
    return getMinElemOfSet(set);
}


function getMinElemOfSet(set) {
    var min = Number.MAX_SAFE_INTEGER;
    set.forEach(elem => {if (elem < min) {min = elem;}});
    return min;
}