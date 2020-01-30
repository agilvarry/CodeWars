function sumStrings(a,b) { 
    let arrA = a.split("")
    let arrB = b.split("")
    
    let long = []
    let short = []
    if(arrA.length > arrB.length){
    long=arrA
    short=arrB
    }else if(arrA.length < arrB.length){
    short=arrA
    long=arrB
    }else{
    short=arrA
    long=arrB
    }
    let answer =[]
    let carry = 0
    
    for(let i = short.length-1; i>=0; i--){
    
      let current = Number(long[long.length-1]) + Number(short[short.length-1])+carry
     
      if(current>=10){
        carry = Math.floor(current / 10)
        current = current % 10
        
      }else{
        carry=0
      }
        answer.push(String(current))
        
      long.pop()
      short.pop()
    }
    
    for(let j = long.length-1; j>=0; j--){
     let current = Number(long[long.length-1])+carry
     
     if(current>=10){
        carry = Math.floor(current / 10)
        current = current % 10
      }else{
        carry=0
      }
      answer.push(String(current))
      long.pop()
    }
    answer.push(carry)
    
    while(answer[answer.length-1] =='0'){
    answer.pop()
    }
    
     return answer.reverse().join("")  
  }