var maxSequence = function(arr){
    if(arr.length == 0) return 0
    let max =0
    for(let i = 0; i < arr.length; i++){
      let big = 0
      let next = 0 
      for(let j = i; j < arr.length; j++){
        next += arr[j]
        if (next > big) big = next
      }
      if (big > max) max = big
    }
    return max;
    }

    