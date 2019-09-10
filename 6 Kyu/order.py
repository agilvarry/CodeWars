def order(sentence):
  result = []
  list = sentence.split()
  for i in range(len(list)+1):
      for j in list:
          if j.find(str(i+1))>-1:
              result.append(j)    
          
  return " ".join(result)