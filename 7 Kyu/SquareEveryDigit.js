function squareDigits(num){
    //may the code be with you
    //turn the number into string
    //break each character into arr value
    let numArr=num.toString().split("");
    //turn each r value into int and square
    let sqStr = numArr.map(x=> Math.pow(parseInt(x),2).toString()); 
    //function to add all the strings together
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sqNum = sqStr.reduce(reducer,"");
    //return added string as an int
    return parseInt(sqNum);
    
  }