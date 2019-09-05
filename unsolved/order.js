def order(sentence):
  result = ''
  list = sentence.split()
  for i in range(len(list)):
      if list[i].find(str(i+1))==1:
          result += list[i] + " "
          
      print(str(i-1))
  return result