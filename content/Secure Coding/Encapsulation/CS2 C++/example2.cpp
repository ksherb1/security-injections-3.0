class Time
{
    private:
        int hour;
        int minute;
        int second;

    public:
        Time (void);
        void setTime (int newHour, int newMinute, int newSecond);
        void getTime (int& currHour, int& currMinute, int& currSecond);
        void incrementTime (void);
};