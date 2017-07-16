#include <iostream>
using namespace std;
int main(void)
{
    int tests[10];
    int test;
    int numElems;
    cout << "How many numbers?";
    cin >> numElems;
    for (int i = 0; i < numElems; i++)
    {
        cout << "Please type a number";
        cin >> test;
        tests[i] = test;
    }
    return 0;
}