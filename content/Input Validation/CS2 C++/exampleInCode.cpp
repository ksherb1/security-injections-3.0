#include <iostream>
using namespace std;

int main()
{
  unsigned int vals[10];
  size_t which;
  unsigned int square;

  for (size_t i = 0; i < 10; i++ )
    vals[i] = (i+1)*(i+1);

  cout << "Please type a number: ";
  cin >> which;

  square = vals[which-1];
  cout << "The square of " << which << " is " << square << endl;
  return 0;
}