def union(A, B):
	return A + [ x for x in B if x not in A ]

def intersection(A, B):
	return [ x for x in A if x in B ]

def set_diff(U, A):
	return [ x for x in U if x not in A ]

def sym_diff(A, B):
	l1 = [ x for x in A if x not in B ] 
	l2 = [ x for x in B if x not in A ]
	return l1 + l2

def cart_prod(A, B):
	return [ (x1, x2) for x1 in A for x2 in B ]

L1 = [ 4, 6, 2, 3, 1 ]
L2 = [ 0, 1, 3, 9, 2 ]

print union(L1, L2)  
print intersection(L1, L2)
print set_diff(L1, L2)
print sym_diff(L1, L2)
print cart_prod(L1, L2)
