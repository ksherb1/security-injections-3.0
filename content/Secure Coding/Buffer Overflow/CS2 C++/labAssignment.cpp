#include <iostream>
#include <string>
using namespace std;
const int INPUT_SIZE = 10;
string getString();
void copyVals(string, char[]);
void getSubstring(char[], char[]);
void getChars(int, int, char[], char[]);

int main()
{
  char vals[INPUT_SIZE];
  char sub[INPUT_SIZE];
  string s1 = getString();

  copyVals(s1, vals);
  getSubstring(vals, sub);
  cout << "sub string: " << sub << endl;   

  return 0;
}

string getString()
{
  cout << "Please type a string: ";
  string s;
  getline(cin, s);
  return s;
}

void copyVals(string s, char vals[])
{
  for (size_t i = 0; i < s.length(); i++)
    vals[i] = s.at(i);
  vals[s.length()] = '\0';
}

void getSubstring(char vals[],char newChars[])
{
  size_t start;
  size_t end;
  cout << "Starting point(integer index): ";
  cin >> start;

  cout << "Ending point(integer index): ";
  cin >> end;

  getChars(start, end, vals, newChars);
}

void  getChars(size_t start, size_t end, char vals[], char newChars[])
{
    size_t sz = (end - start) + 1;
    // must do only sz-1 characters, to leave room for terminator
    for (size_t i = 0; i < (sz - 1); i++)
       newChars[i] = vals[start + i];
    newChars[i] = '\0';
}