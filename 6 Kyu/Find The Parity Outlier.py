def find_outlier(integers):
    odd= []
    even =[]
    for x in integers:  
        if x % 2 == 0:
            even.append(x)
        elif x % 2 != 0:
            odd.append(x)
            
        if len(odd) > 1 and len(even) == 1:
            return even[0]
        elif len(odd) == 1 and len(even) >1:
            return odd[0]
#         elif x % 2 == 0 and len(odd) >1:
#             return x
#         elif x % 2 != 0 and len (even)>1:
#             return x
        
        
            