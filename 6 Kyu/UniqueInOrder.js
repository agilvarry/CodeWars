var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let unique=""
  let inOrder = []
  for(i in iterable){
    
    if(iterable[i] != unique){
      unique = iterable[i]
      inOrder.push(unique)
    }
  }
  return inOrder
}