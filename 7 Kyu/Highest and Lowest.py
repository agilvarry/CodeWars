def high_and_low(numbers):
    ints = (int(x) for x in numbers.split(" "))
    low = float('inf') #set low to highest number
    high = -float('inf') #set high to lowest number
    for i in ints:
        if i > high:
            high = i
        if int(i) < low:
            low = i
    return str(high) + " " + str(low)