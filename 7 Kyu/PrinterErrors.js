function printerError(s) {
    let j=0
     s.split("").forEach(i=> i>'m' && j++)
     
     return `${j}/${s.length}`  
  }