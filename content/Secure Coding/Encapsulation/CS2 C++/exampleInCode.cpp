class RiskyTime
{
    public:
        int hour;
        int minute;
        int second;
        void setTime (int newHour, int newMinute, int newSecond);
        void getTime (int& currHour, int& currMinute, int& currSecond);
        void incrementTime();
};