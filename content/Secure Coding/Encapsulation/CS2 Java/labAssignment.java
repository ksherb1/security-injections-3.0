// file Time.java
public class Time {
    final int MAX_HOURS = 23;
    final int MAX_MIN_SECS = 59;

    int hour;    // current hour in military time
    int minute;  // current minute in military time
	int second;  // current second in military time

	// set the time to the time specified by the parameters
	void setTime (int newHour, int newMinute, int newSecond) {
		hour = newHour;
		minute = newMinute;
		second = newSecond;
	}

	// return the time to the calling method in a three-membered array
	int[] getTime() {
		return new int[] {hour, minute, second};
	}

	// increment the current time by one second
	void incrementTime() {
		++second;
	}
}


// file Main.java
public class Main {
	public static void main(String[] args) {
		Time currTime = new Time();  // object that stores the current time
		int hr;         // current hour obtained from currTime
		int min;        // current minute obtained from currTime
		int sec;        // current second obtained from currTime
		
		int[] temp;		// for using getTime()

		currTime.setTime(20, 15, 43);
		temp = currTime.getTime();
		hr = temp[0];
		min = temp[1];
		sec = temp[2];
		
		System.out.println(
				"The current military time is set to: "
						+ hr + ":" + min + ":" + sec
				);

		
		currTime.incrementTime();
		temp = currTime.getTime();
		hr = temp[0];
		min = temp[1];
		sec = temp[2];
		
		System.out.println(
				"After incrementing the time, the current military time is: "
						+ hr + ":" + min + ":" + sec
				);
	}
}