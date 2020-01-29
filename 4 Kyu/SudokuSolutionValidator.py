from collections import defaultdict
import math

def valid_solution(board):
    columns = defaultdict(set)
    blocks = defaultdict(set)

    for i, row in enumerate(board):
        if len(set(row)) !=9 : return False
        block_row = math.floor((i)/3)
        
        for j, cell in enumerate(row):
            if cell == 0: return False
            
            col = "col{c}".format(c=j)
            columns[col].add(cell)
            
            block_col = math.floor((j)/3)
            grid_id = "{a}-{b}".format(a=block_row, b=block_col)
            blocks[grid_id].add(cell)

    for col in columns: 
        if len(columns[col]) != 9: return False
    for b in blocks:
        if len(blocks[b]) != 9: return False
    return True    