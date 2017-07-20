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
			next = name+"-var-input";				// first question
		} else {
			// check off question
			$("#"+question).prop('checked', true);



						// take focus away from current question
						$("#"+question+"-label").removeClass("si-checklist-active");


						switch(question) { // here's where flow is really controlled
						case name+"-var-input":		next = name+"-vuln-length";	break;
						case name+"-vuln-length":	next = name+"-vuln-range";	break;
						case name+"-vuln-range":		next = name+"-vuln-format";	break;
						case name+"-vuln-format":	next = name+"-vuln-type";	break;
						default:	return;	// input invalid or question is complete
						}
					}

					// focus on next question
					$("#"+next+"-label").addClass("si-checklist-active");


					// track which spans are needed for next question
					if(next === name+"-var-input"){

							waitingOn = [];
							$(".span-"+name).each(function(index) {
								if( $(this).hasClass(next+"-"+name) ) {
									waitingOn.push(index);
								}
							});

				}

				else{
					console.log("OURS "+name+"-var-input-"+name);
					console.log(spans[0]);
					showPopOver(spans[0]);
					$('input[name=popSave]').on('click', function() {
						//console.log($('input[name=popOpt]:checked').val());

						if ($('input[name=popOpt]:checked').val() === "No"){
							$("#"+"Pgm1CL-vuln-length").prop('checked', true);
							$('.radiopop').hide();
							//console.log("HIDE");
							$('input[name=popOpt]:checked').prop('checked', false);
						}
					});
					var interval = setInterval(function(){

						if(document.getElementById("Pgm1CL-vuln-length").checked === true && document.getElementById("Pgm1CL-vuln-range").checked == false){
								$("#"+"Pgm1CL-vuln-length"+"-label").removeClass("si-checklist-active");
								$("#"+"Pgm1CL-vuln-range"+"-label").addClass("si-checklist-active");
								showPopOver(spans[1]);
								//console.log($('input[name=popOpt]:checked').val());
								$('input[name=popSave]').on('click', function() {
								console.log($('input[name=popOpt]:checked').val());
								if ($('input[name=popOpt]:checked').val() == "No"){
									$("#"+"Pgm1CL-vuln-range").prop('checked', true);
									$('.radiopop').hide();
									console.log("HIDE");
									$('input[name=popOpt]:checked').prop('checked', false);
								}
							});
						}
						if(document.getElementById("Pgm1CL-vuln-range").checked === true && document.getElementById("Pgm1CL-vuln-format").checked == false){
								$("#"+"Pgm1CL-vuln-range"+"-label").removeClass("si-checklist-active");
								$("#"+"Pgm1CL-vuln-format"+"-label").addClass("si-checklist-active");
								showPopOver(spans[0]);
								$('input[name=popSave]').on('click', function() {
								console.log($('input[name=popOpt]:checked').val());
								if ($('input[name=popOpt]:checked').val() == "No"){
									$("#"+"Pgm1CL-vuln-format").prop('checked', true);
									$('.radiopop').hide();
									console.log("HIDE");
									$('input[name=popOpt]:checked').prop('checked', false);
								}
							});
						}
						if(document.getElementById("Pgm1CL-vuln-format").checked === true && document.getElementById("Pgm1CL-vuln-type").checked == false){
								$("#"+"Pgm1CL-vuln-format"+"-label").removeClass("si-checklist-active");
								$("#"+"Pgm1CL-vuln-type"+"-label").addClass("si-checklist-active");
								showPopOver(spans[1]);
								$('input[name=popSave]').on('click', function() {
								console.log($('input[name=popOpt]:checked').val());
								if ($('input[name=popOpt]:checked').val() == "No"){
									$("#"+"Pgm1CL-vuln-type").prop('checked', true);
									$('.radiopop').hide();
									console.log("HIDE");
									$('input[name=popOpt]:checked').prop('checked', false);
								}
							});
						}
						if(document.getElementById("Pgm1CL-vuln-type").checked === true){
								$("#"+"Pgm1CL-vuln-type"+"-label").removeClass("si-checklist-active");
								clearInterval(interval);
						}
					},5000);
				}

					return next;
				}


				current = advance();


	$(".span-"+name).each(function(index) {
		spans.push($(this));
		console.log(spans);
		$(this).on('click', function() {
			span = $(this);
			console.log(span);

			// continue if user is currently supposed to click this span, and hasn't already
			if( span.hasClass(current+"-"+name) && $.inArray(index,clicked) < 0 ) {
				clicked.push(index);					// 		note that it's been clicked, programmatically
				span.addClass("si-code-clicked");		//		note that it's been clicked, graphically
				if(span.hasClass(name+"-var-input-"+name)) {
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
	    $('.radiopop').show();
	    $('.popover').css('left', (position.left+500) + 'px');
	    $('.popover').css('top', (position.top+320-(theHeight/2)-10) + 'px');
			//console.log($('input[name=popOpt]:checked').val());
	}

});
