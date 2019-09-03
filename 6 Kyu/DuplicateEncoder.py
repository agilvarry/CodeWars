from collections import Counter
def duplicate_encode(word):
    lword = word.lower()
    freq = Counter(list(lword))
    code = ""
    for i in lword:
        if freq[i]>1:
            code += ")"
        else:
            code += "("        
    return code    