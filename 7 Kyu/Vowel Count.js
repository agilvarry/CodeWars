function getCount(str) {
    var vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    
      str.split("").forEach(i => vowels.indexOf(i) >-1 && vowelsCount++)
    
    
    return vowelsCount;
  }