def decrypt(c, k):
	""" Shift cipher decryption. Call for each letter of ciphertext.
	
	Input:
	c - the ciphertext letter (upper case character)
	k - the key, the integer number of letters to shift by
	Output:
	p - the plaintext letter (lower case character)
	"""
	p = (ord(c) - k - ord('A')) % 26
	return chr(p + ord('a'));