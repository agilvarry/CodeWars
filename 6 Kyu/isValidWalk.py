def isValidWalk(walk):
    #determine if walk is valid
    
    north = walk.count('n')
    south = walk.count('s')
    east = walk.count('e')
    west = walk.count('w')
    
    if north == south and east == west and len(walk) == 10:
        return True
    else:
        return False