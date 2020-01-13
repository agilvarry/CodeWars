def valid_parentheses(string):
    track =0
    for i in string:
        if track <0:
            return False
        if i == '(':
            track += 1
            print('(', track)
        elif i == ')':
            track -= 1
            print(')', track)
    if track == 0: return True
    else: return False