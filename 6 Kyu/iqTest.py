def iq_test(numbers):
    even = []
    odd = []

    for n in numbers.split():
        if int(n)%2 ==0:
            even.append(n)
        else:
            odd.append(n)
            
        if len(even) > 1 and len(odd) > 0:
            return numbers.split().index(odd[0])+1
        elif len(odd) > 1 and len(even) > 0:
            return numbers.split().index(even[0])+1