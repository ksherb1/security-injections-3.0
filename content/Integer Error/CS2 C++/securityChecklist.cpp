#include <iostream>
using namespace std;

int main() {

  short pop;
  short growth;

  cout << "What is the current population? ";
  cin >> pop;
  cout << "What is the rate of growth? (e.g., for 10% enter 10)";
  cin >> growth;

  float growthRate = static_cast(growth) / 100;
  cout << growthRate << endl;

  cout << "Year\tGrowth\tNew Population" << endl;

  for (size_t i = 1; i <= 10; i++) {
    short increase = static_cast(pop * growthRate);
    short newpop = pop + increase;

    cout << i << "\t" << increase << "\t" << newpop << endl;
    pop = newpop;
  }
  cout << "Final population is " << pop << endl;
}