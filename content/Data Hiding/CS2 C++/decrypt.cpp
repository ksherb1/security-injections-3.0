/*
 * Shift cipher decryption. Call for each letter of ciphertext.
 * 
 * c - the ciphertext letter (upper case)
 * k - the key, the number of letters to shift by
 * return the plaintext letter  (lower case)
 */
char decrypt(char c, int k) {
	int p = (c - k - 'A') % 26;
	if(p < 0) p += 26;
	return (char)(p + 'a');
}
