function points(games) {
    let total = 0;
    
    games.forEach((i)=>{
      let scores = i.split(":");
      console.log(scores);
      if(scores[0] >scores[1]){
       total += 3;
      }else if(scores[0] === scores[1])
      total +=1;
    });
    return total;
  };