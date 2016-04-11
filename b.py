def pt(n):
	l = []
	for i in range(1, n):
		for j in range(1, i):
			for k in range(1, j):
				if i*i == j*j + k*k:
					l += [[i,j,k]]
	return l

print pt(4)
print pt(6)
print pt(20)

def pt2(n):
	return [ [a, b, c] for c in range(1,n) for b in range(1,c) for a in range(1,b) if a*a + b*b == c*c]

print pt2(4)
print pt2(6)
print pt2(20)
