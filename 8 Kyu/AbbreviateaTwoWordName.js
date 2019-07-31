function abbrevName(name){
    let names = name.toUpperCase().split(" ");
    
    return `${names[0].substring(0, 1)}.${names[1].substring(0, 1)}`
  }