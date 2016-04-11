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
