def digital_root(n):
    if n > 9:
        added = sum(int(i) for i in str(n))
        return digital_root(added)
    else:
        return n
        