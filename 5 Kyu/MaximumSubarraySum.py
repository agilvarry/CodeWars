#https://en.wikipedia.org/wiki/Maximum_subarray_problem
def max_sequence(arr):
    maximum = 0
    sum = 0
    for i in arr:
        sum = max(0, sum +i)
        maximum = max(maximum, sum)
        print(sum,maximum)
    return maximum    