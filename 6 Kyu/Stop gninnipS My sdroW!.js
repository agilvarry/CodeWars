function spinWords(words){
    return words.split(" ") //split words into array
                .map(w => w.length >= 5 ? w.split("").reverse().join("") : w)
                . join(" ")
  }