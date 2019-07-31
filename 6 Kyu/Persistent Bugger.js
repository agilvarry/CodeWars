function persistence(num) {
    let count = 0
    let strnum = num.toString()
      while (strnum.length > 1){
        let newtotal = 1
        strnum.split("").forEach(i =>{
        newtotal *= i
      })
      count++
      strnum = newtotal.toString()
      console.log(strnum.length)
    }
    return count
 }