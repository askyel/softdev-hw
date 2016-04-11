def cartesian_product(l1, l2):
    return [(a,b) for a in l1 for b in l2]

def symmetric_difference(l1, l2):
    i = [x for x in a if x not in b]
    j = [x for x in b if x not in a]
    return i + j

def intersection(l1, l2):
    return [x for x in a if x in b]

def union(l1, l2):
    return a + [x for x in b if x not in a]

def set_difference(l1, l2):
    return [x for x in l1 if x not in l2]
