var moveZeros = function (arr) {
    let arr1 = []
    let arr2 = []
    
    arr.forEach(i => i===0 ? arr2.push(i) : arr1.push(i))
    
    return arr1.concat(arr2)
  }