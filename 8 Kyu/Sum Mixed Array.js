function sumMix(x){
    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
    
    return x.reduce(reducer,0)
}