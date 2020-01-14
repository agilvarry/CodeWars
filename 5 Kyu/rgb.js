function rgb(r, g, b){

    function convert(rgb){
      let hex  = rgb.toString(16)
      if(rgb > 255){
        hex = "FF"
      }else if(rgb<0){
        hex = "00"
      }else{
        if(hex.length < 2) {
        hex = "0"+ hex
        }
      }
       return hex
    }
  
    let red = convert(r)
    let green = convert(g)
    let blue = convert(b)
    let hex = red+green+blue
    return hex.toUpperCase()
  }