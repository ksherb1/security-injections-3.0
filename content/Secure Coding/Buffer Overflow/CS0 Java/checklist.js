$(document).ready(function() {
	
	var name = "Pgm1CL";
	// track id of the current checklist task (initialized later)
	var current;
	// track which spans have been clicked appropriately
	var clicked = [];
	// track which spans are needed for current question
	var waitingOn = [];
		let previousWaitingOnCount = 0;
	var spans = [];

	/**
	 * returns the id of the next question, and rearranges class indicators
	 * if question is not provided, initialize the first question
	 */
	function advance(question) {
		var next;
		if(typeof(question)==='undefined') {
			next = name+"-array-dec";  // first question
		} else {
			$("#"+question).prop('checked', true);   // check off question

			// take focus away from current question
			$("#"+question+"-label").removeClass("si-checklist-active");
			$("#" + question + "-progress-label").addClass("progress-hidden");
			$("#" + question + "-progress-label").removeClass("progress");

			switch(question) { // here's where flow is really controlled
				case name+"-array-dec":		
					next = name+"-array-ref";	
					break;
				case name+"-array-ref":	
					next = name+"-var-range";	
					break;
				case name+"-var-range":		
					next = name+"-var-occur";	
					break;
				case name+"-var-occur":	
					next = name+"-var-modify";	
					break;
				case name+"-var-modify":	
					next = name+"-var-array";	
					break;
				
				default:	
				return;	// input invalid or question is complete
			}
		}

		// focus on next question
		$("#" + next + "-label").addClass("si-checklist-active");
		// remove hidden class from progress bar when user clicks correct answer
		$("#" + next + "-progress-label").removeClass("progress-hidden");
		// add the progress bar fill
		$("#" + next + "-progress-label").addClass("progress");

		//IF POPOVER IS NEEDED
		if(next === name+"-var-range"){ 
			if (
			next.endsWith("var-occur") || 
			next.endsWith("var-range")
			) { // remove progress bar
				$("#"+next+"-progress-label").removeClass("progress");
				$("#"+next+"-progress-label").addClass("progress-hidden");
			}

			waitingOn = []; // gather spans remaining to be clicked

			$(".span-"+name).each(function(index) {
				if( $(this).hasClass(next+"-"+name) ) {
					waitingOn.push(index);
				}
			});
			
			showPopOver(spans[7]); // show Popover over the index span
			var tag = "Pgm1CL-var-range"; //the one that needs the popover
			
			$('input[name=popSave2]').on('click', function() {
				//these need to change to the right answer for the question
				if ($('#lowInt').val() == "0" && 
				$('#popSelect1').val() == "<=" && 
				$('#popSelect2').val() == "<" && 
				$('#highInt').val() == "10"
				){ 
					$('.rangepop').hide();
					$(".span-"+name).click(); //click the empty span so that next question is asked.
					$('.popover').css('background-color', 'white');
				} else {
					$('.popover').css('background-color', 'lightpink');
				}
			});
		} else {  // NORMAL QUESTION

			waitingOn = [];
			$(".span-"+name).each(function(index) {
				if( $(this).hasClass(next+"-"+name) ) {
					waitingOn.push(index);
				}
			});
		}
		//removes highlighted sections so user is not seeing correct answers of previous question
		$(".span-" + name).removeClass("si-code-clicked");
		return next;
	}

	current = advance();

	// Handles score for each individual question
	$(".span-"+name).each(function(index) {
		spans.push($(this));
		
		$(this).on('click', function() {
			span = $(this);

			// continue if user is currently supposed to click this span, and hasn't already
			if( 
			span.hasClass(current+"-"+name) && 
			$.inArray(index,clicked) < 0 
			) {
				clicked.push(index);  // note that it's been clicked, programmatically
				span.addClass("si-code-clicked");  //  note that it's been clicked, graphically
				if(
				span.hasClass(name+"-var-modify-"+name)|| 
				span.hasClass(name+"-var-array-"+name)
				) { 
					//needs to be changed for vulnerabilities
					span.addClass("si-code-vulnerability"); //	some spans get extra graphics to indicate vulnerability
				}

				// Check if 'current' question is finished yet
				var finished = true;

				// logic for increasing the progress bar
				let currentProgress = ((clicked.length - previousWaitingOnCount)/waitingOn.length)*100;
				document.getElementById(current + "-progress-data-label").style.width = `${currentProgress}%`;

				for(i in waitingOn) {
					finished &= $.inArray(waitingOn[i],clicked) >= 0;
				}

				// if it is, go to next question
				if (finished) {
					previousWaitingOnCount += waitingOn.length;
					current = advance(current);
				}
			}
		});
	});

	// showsPopover over span
	function showPopOver(span) { 
	    var offset = span.offset();
	    var position = span.position();
	    var theHeight = $('.popover').height();
	    $('.rangepop').show();
			$(".popover").css({
            'position': 'absolute',
            'top': (position.top-(theHeight/2)-5) + 'px',
            'left': (position.left+100) + 'px'
      });
	}
});
