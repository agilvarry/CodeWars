
def snail(snail_map):
    snail = []
    snail_wrap = snail_map
    
    def wrap(snail_wrap, snail):
        if len(snail_wrap) > 0:
            snail.extend(snail_wrap[0])
            del snail_map[0] 
        if len(snail_wrap) > 1:
            for i in range(0,len(snail_wrap)-1):       
                snail.append(snail_wrap[i][-1])
                del snail_wrap[i][-1]
            snail.extend(reversed(snail_wrap[-1]))
            del snail_map[-1]
            for i in reversed(snail_wrap):
                snail.append(i[0])
                del i[0]
        elif len(snail_wrap) == 1:
            snail.extend(reversed(snail_wrap[-1]))
            del snail_map[-1]
        
        if len(snail_wrap) > 0:
            return wrap(snail_wrap, snail)
        else: return snail    
        
          
    return wrap(snail_wrap, snail)  
