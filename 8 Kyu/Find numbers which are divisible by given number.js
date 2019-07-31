function divisibleBy(numbers, divisor){
    let outArr =[];
    numbers.forEach((i)=>{
      if(i % divisor ==0){
      outArr.push(i);
      }
    });
    return outArr;
  }