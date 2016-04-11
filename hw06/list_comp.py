UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC = "abcdefghijklmnopqrstuvwxyz"
NUM = "0123456789"

def valid( pwd ):
	if [ x for x in pwd if x in UC ] == []:
		return False
	elif [ x for x in pwd if x in LC ] == []:
		return False
	elif [ x for x in pwd if x in NUM ] == []:
		return False
	return True

print valid( "a123ber" )  # False
print valid( "4bG" )   	  # True

SP = ".?!#&,;:-_*"

def valid2( pwd ):
	score = 1
	if len(pwd) >= 6:
		score += 2
	if [ x for x in pwd if x in UC ] != []:
		score += 2
	if [ x for x in pwd if x in LC ] != []:
		score += 2
	if [ x for x in pwd if x in NUM ] != []:
		score += 2
	if len(pwd) >= 8:
		score += 1
	return score

print valid2( "asld" )  # 3
print valid2( "aGsd,34" )  # 9 
print valid2( "asdlfkj3049u509u$ou3w094iw:SFD" )   # 10
