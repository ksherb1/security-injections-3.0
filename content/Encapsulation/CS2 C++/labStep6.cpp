void Time::setTime (int newHour, int newMinute, int newSecond)
{
   if (newHour >= 0 && newHour <= MAX_HOURS)
   {
      hour = newHour;
   }
   else
   {
      cout << "Error: hour must be between 0 and 23 inclusive" << endl;
      hour = 0;
   }
   if (newMinute >= 0 && newMinute <= MAX_MIN_SECS)
   {
      minute = newMinute;
   }
  else
   {
      cout << "Error: minute must be between 0 and 59 inclusive" << endl;
      minute = 0;
   }
   if (newSecond >= 0 && newSecond <= MAX_MIN_SECS)
   {
      second = newSecond;
   }
   else
   {
      cout << "Error: second must be between 0 and 59 inclusive" << endl;
      second = 0;
   }
}