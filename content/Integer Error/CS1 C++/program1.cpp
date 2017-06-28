#include <iostream>
#include <climits>
using namespace std;
int main()
{
    int i;
    char ch;
    short sh;
    long lon;
    unsigned short us;


    cout << "For this compiler: " << endl;
    cout << "largest integer is " << INT_MAX << endl;
    cout << "smallest integer is " << INT_MIN << endl;


    cout << "size of an integer is " << sizeof(int) << " bytes. " << endl;
    cout << "size of a char is " << sizeof(char) << " byte. " << endl;
    cout << "largest short is " << SHRT_MAX << endl;
    cout << "smallest short is " << SHRT_MIN << endl;
    cout << "largest unsigned short is " << USHRT_MAX <<endl;
    cout << "largest long is " << LONG_MAX << endl;
    cout << "smallest long is " << LONG_MIN << endl;
    return 0;

}