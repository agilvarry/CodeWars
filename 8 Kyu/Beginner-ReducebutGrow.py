import functools
def grow(arr):
    return functools.reduce(lambda i,j : i*j, arr)