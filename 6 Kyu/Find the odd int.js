function findOdd(A) {
    const counts = {}
    A.forEach(n => counts[n] = counts[n] ? counts[n] + 1 : 1)
    
    for (num in counts){
      if (counts[num] % 2 != 0){
        return parseInt(num)
      }
    }
  }