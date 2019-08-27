from collections import Counter
def duplicate_count(text):
    counts = Counter(text.lower())
    total = 0
    for i in counts:
        if counts[i] > 1:
            total += 1
    return total        