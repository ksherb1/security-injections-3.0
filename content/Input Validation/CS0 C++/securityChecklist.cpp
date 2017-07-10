#include <iostream>
using namespace std;
int main(void)
{
    int age;
    int total = 0;
    cout << "Please enter 10 ages:" << endl;
    for (int i=0; i < 10; i++) {
        cin >> age;
        total = total + age;
    }
    cout << "average age is " << (float)total/10 << endl;
    return 0;
}