	    currTime.hour = 31;
		currTime.minute = -10;
		currTime.second = 450;
		
		temp = currTime.getTime();
		hr = temp[0];
		min = temp[1];
		sec = temp[2];
		
		System.out.println(
				"After direct assignment, the current military time is: "
						+ hr + ":" + min + ":" + sec
				);