function findSum(n) {
    res = 0
    for(i=0; i<=n; i++){
      if(i % 3 == 0 || i % 5 == 0){
        res += i
      }
    }
    return res
  }