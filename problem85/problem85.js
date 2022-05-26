// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
    let res=0;
    arr = arr.sort((a,b)=>a-b);
    
    while(arr.length){
      res += arr.pop()*arr.shift();
      }
    
    return res
  }