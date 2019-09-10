import string
alphabet = string.ascii_lowercase
numbers =[]
def alphabet_position(text):
    print(text)
    for i in text:
        
        if i.isalpha():
            a = alphabet.index(i.lower())
            numbers.append(str(a+1))
    print(numbers)    
    return " ".join(numbers)    