    void incrementTime () {
        second = ++second % (MAX_MIN_SECS + 1);
		
		if(second == 0) {
			minute = ++minute % (MAX_MIN_SECS + 1);
		}
		if(minute == 0) {
			hour = ++hour % (MAX_HOURS + 1);
		}
	}