// file Time.h
class Time
{
   public:
      int hour;    // current hour in military time
      int minute;  // current minute in military time
      int second;  // current second in military time

      // set the time to the time specified by the parameters
      void setTime (int newHour, int newMinute, int newSecond);

      // return the time to the calling method using the provided
      // parameters
      void getTime (int& currHour, int& currMinute, int& currSecond);

      // increment the current time by one second
      void incrementTime (void);
};

// file Time.cpp
#include <iostream.h>
#include "Time.h"
using namespace std;

const int MAX_HOURS = 23;
const int MAX_MIN_SECS = 59;

void Time::setTime (int newHour, int newMinute, int newSecond)
{
   hour = newHour;
   minute = newMinute;
   second = newSecond;
}

void Time::getTime (int& currHour, int& currMinute, int& currSecond)
{
   currHour = hour;
   currMinute = minute;
   currSecond = second;
}

void Time::incrementTime (void)
{
   ++second;
}

// file main.cpp
#include <cstdlib>
#include <iostream.h>
#include "Time.h"
using namespace std;

int main (void)
{
   Time currTime;  // object that stores the current time
   int hr;         // current hour obtained from currTime
   int min;        // current minute obtained from currTime
   int sec;        // current second obtained from currTime

   currTime.setTime(20, 15, 43);
   currTime.getTime(hr, min, sec);
   cout << "The current military time is set to: "
        << hr << ":" << min << ":" << sec << endl;

   currTime.incrementTime();
   currTime.getTime(hr, min, sec);
   cout << "After incrementing the time, the current military time is: "
        << hr << ":" << min << ":" << sec << endl;

   return EXIT_SUCCESS;
}