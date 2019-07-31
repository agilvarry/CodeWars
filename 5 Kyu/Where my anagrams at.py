from collections import Counter
def anagrams(word, words):
    counted = Counter(word)
    return [w for w in words if Counter(w) == counted]