def order(sentence):
  # code here
  return " ".join(sorted(sentence.split(), key=get_num))
  
def get_num(word):
  for i in word:
    if i.isdigit(): 
      return int(i)     