function findShort(s){
    return s.split(" ").reduce((x, y) => x.length < y.length ? x : y ).length 
  }