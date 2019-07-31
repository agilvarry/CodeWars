function pigIt(str){
    return str.split(" ")
              .map(s => s.match(/[.!?]/) ? s : `${s.substring(1)}${s[0]}ay`)
              .join(" ")
  }