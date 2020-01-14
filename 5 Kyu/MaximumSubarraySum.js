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

    // Best Answer 
    // https://en.wikipedia.org/wiki/Maximum_subarray_problem 
    // https://codepen.io/risingbirdsong/pen/VwYdqZd
    // var maxSequence = function(arr){
    //     var min = 0, ans = 0, i, sum = 0;
    //     for (i = 0; i < arr.length; ++i) {
    //       sum += arr[i];
    //       min = Math.min(sum, min);
    //       ans = Math.max(ans, sum - min);
    //     }
    //     return ans;
    //   }