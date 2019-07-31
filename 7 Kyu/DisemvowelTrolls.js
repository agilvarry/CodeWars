function disemvowel(str) {
    const vowels = ["A", "E", "I","O", "U"]
    
    return str.split("") //break into array of values
    .filter( ltr => vowels.indexOf(ltr.toUpperCase()) < 0)//filter out vowels
    .join(""); //join to string
  
  }