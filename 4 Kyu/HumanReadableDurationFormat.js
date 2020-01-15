function formatDuration (seconds) {
    if (seconds == 0) return "now"
    
    function convert(num, format){
      return num > 1 ? `${num} ${format}s` 
           : num == 1 ? `${num} ${format}`
           : ""
    }
  
    let year = convert(Math.floor(seconds / (3600*24*365)), "year")
    let day = convert(Math.floor(seconds / (3600*24) % 365), "day")
    let hour = convert(Math.floor(seconds % (3600*24) / 3600), "hour")
    let min = convert(Math.floor(seconds % 3600 / 60), "minute")
    let sec = convert(Math.floor(seconds % 60), "second")
    
    let arr = [sec, min, hour, day, year]
    let first, second = false
    let duration = ""
    
    arr.forEach(function(i){
      if(i && !first){
        duration = i
        first = true
      } else if (i && first && !second){
        duration = `${i} and ${duration}`
        second = true
      } else if (i && second){
        duration = `${i}, ${duration}`
      }
    })
}