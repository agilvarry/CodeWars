function accum(s) {
    return test = s.split("")
     .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
     .join("-");
  }