// //Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let vowelsCount = 0;
    let newArr = str.toLowerCase().split("")
    let vowels = ['a','e','i','o','u']
    for (let i=0 ; i<vowels.length; i++){
        for(let j=0 ; j<newArr.length; j++)
            if (vowels[i]===newArr[j])
                vowelsCount++}
    return vowelsCount;
  }


  console.log(getCount('Abracadabra'))

