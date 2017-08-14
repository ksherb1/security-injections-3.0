    void setTime(int newHour, int newMinute, int newSecond) {
		if (newHour >= 0 && newHour <= MAX_HOURS) {
			hour = newHour;
		}
		else {
			System.out.println("Error: hour must be between 0 and 23 inclusive");
			hour = 0;
		}
		
		if (newMinute >= 0 && newMinute <= MAX_MIN_SECS) {
			minute = newMinute;
		}
		else {
			System.out.println("Error: minute must be between 0 and 59 inclusive");
			minute = 0;
		}
		
		if (newSecond >= 0 && newSecond <= MAX_MIN_SECS) {
			second = newSecond;
		}
		else {
			System.out.println("Error: second must be between 0 and 59 inclusive");
			second = 0;
		}
	}