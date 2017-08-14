/**
 * Shift cipher decryption. Call for each letter of ciphertext.
 * 
 * @param c - the ciphertext letter (upper case)
 * @param k - the key, the number of letters to shift by
 * @return p - the plaintext letter (lower case)
 */
public static char decrypt(char c, int k) {
	int p = (c - k - 'A') % 26;
	if(p < 0) p += 26;
	return (char)(p + 'a');
}