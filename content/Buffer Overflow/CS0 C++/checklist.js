$(document).ready(function() {
	var name = "Pgm1CL";

	// track id of the current checklist task (initialized later)
	var current;
	// track which spans have been clicked appropriately
	var clicked = [];
	// track which spans are needed for current question
	var waitingOn = [];

	var spans = [];

	/**
	 * returns the id of the next question, and rearranges class indicators
	 * if question is not provided, initialize the first question
	 */
	function advance(question) {
		var next;
		if(typeof(question)==='undefined') {
			next = name+"-array-dec";				// first question
		} else {
			// check off question
			$("#"+question).prop('checked', true);



						// take focus away from current question
						$("#"+question+"-label").removeClass("si-checklist-active");


						switch(question) { // here's where flow is really controlled
						case name+"-array-dec":		next = name+"-array-ref";	break;
						case name+"-array-ref":	next = name+"-var-range";	break;
						case name+"-var-range":		next = name+"-var-occur";	break;
						case name+"-var-occur":	next = name+"-var-modify";	break;
						case name+"-var-modify":	next = name+"-var-array";	break;
						default:	return;	// input invalid or question is complete
						}
					}

					// focus on next question
					$("#"+next+"-label").addClass("si-checklist-active");


					// track which spans are needed for next question
				if(next === name+"-var-range"){


					waitingOn = [];
					$(".span-"+name).each(function(index) {
						if( $(this).hasClass(next+"-"+name) ) {
							waitingOn.push(index);
						}
					});



					showPopOver(spans[7]);
					//var choice;
					var tag = "Pgm1CL-var-range";
					$('input[name=popSave2]').on('click', function() {
						//console.log($('input[name=popOpt]:checked').val());
						//choice = $('input[name=popOpt]:checked').val();
						console.log($('#lowInt').val());
						console.log($('#popSelect1').val());
						console.log($('#popSelect2').val());
						console.log($('#highInt').val());
						if ($('input[name=lowInt]').val() == "0" && $('input[name=popSelect1]').val() == "<="
						 	&& $('input[name=popSelect2]').val() == "<" && $('input[name=highInt]').val() == "10"){
							$("#"+tag).prop('checked', true);
							$('.rangepop').hide();
						//	$('input[name=popOpt]').prop('checked', false);
							$(".span-"+name).click();
						}

					});


				}

				else{

					waitingOn = [];
					$(".span-"+name).each(function(index) {
						if( $(this).hasClass(next+"-"+name) ) {
							waitingOn.push(index);
						}
					});
				}

					return next;
				}


				current = advance();


	$(".span-"+name).each(function(index) {
		spans.push($(this));
		//console.log(spans);
		$(this).on('click', function() {
			span = $(this);

			// continue if user is currently supposed to click this span, and hasn't already
			if( span.hasClass(current+"-"+name) && $.inArray(index,clicked) < 0 ) {
				clicked.push(index);					// 		note that it's been clicked, programmatically
				span.addClass("si-code-clicked");		//		note that it's been clicked, graphically
				if(span.hasClass(name+"-var-modify-"+name)|| span.hasClass(name+"-var-array-"+name)) {
					span.addClass("si-code-vulnerability"); //	some spans get extra graphics to indicate vulnerability
				}


				// Check if 'current' question is finished yet
				var finished = true;
				for(i in waitingOn) {
					finished &= $.inArray(waitingOn[i],clicked) >= 0;
				}

				// if it is, go to next question
				if(finished) current = advance(current);
			}
		});
	});

	function showPopOver(span) {
	    var offset = span.offset();
	    var position = span.position();
	    var theHeight = $('.popover').height();
	    $('.rangepop').show();
	    $('.popover').css('left', (position.left+500) + 'px');
	    $('.popover').css('top', (position.top+275-(theHeight/2)-10) + 'px');
	}

});
