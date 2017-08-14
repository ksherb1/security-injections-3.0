#include <iostream>
using namespace std;

char decrypt(char, int);

int main() {
	string ciphertext;		// this variable holds the input ciphertext
	int k;					// this variable holds the key

    cout << "Enter in the ciphertext:" << endl;
    getline(cin, ciphertext);

    cout << "Decryptions:" << endl;

    for (/* PUT SOMETHING HERE */) {

    	cout << "key = " << k << ":\t";
    	for (int i = 0; i < ciphertext.length(); i ++) {
    		char c = ciphertext.at(i);	// 'c' represents an individual letter of ciphertext

    		/*
    		 *  PUT SOMETHING HERE
    		 */

    	}
    	cout << endl;
    }
}

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
