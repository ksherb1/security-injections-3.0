>/**
 * Client-side script to control module process
 * Integrated into module file with create.js
 *
 * Assumes html page loaded up angular js and jquery
 */

var app = angular.module("modApp", ['ngSanitize', 'ngCookies']);		// the angular "app"
app.controller("modCtrl", ["$scope", "$http", "$cookies", function($scope, $http, $cookies) {	// the angular "controller"

	/**
	 * helper method to initialize module object
	 *
	 * PARAMETERS: content - object containing all content for module
	 */
	function initModule(content) {
		$scope.module = content;
		$scope.currentsectionIndex = 0;
		$scope.currentsection = $scope.module.sections[0];
		$scope.module.sections.push({header:"Final Page"});		// section for completion page
		getCookies();//on Module load attempt to fill with cookies and redirect if needed
	}

	/**
	 * helper method to initialize score object
	 *
	 * PARAMETERS: content - object containing all content for module
	 */
	function initScore(content) {
		$scope.score = {							// initialize score report
				name 	: content.name,
				variant	: content.variant,
				sections: []
		}

		for (i in content.sections) {				// each section has header, time...
			section = {
				header	: content.sections[i].header,
				time	: 0,
				questions: {}
			}

			for (j in content.sections[i].units) {	// ...and (question_id : # of attempts) pairs
				unit = content.sections[i].units[j];
				if((unit.type == "question" && !unit.ignored) || unit.type == "checklist") {
					section.questions[unit.id] = 1;	// all graded questions are "attempted" at least once
				}
			}

			$scope.score.sections.push(section);
		}
	}

	/**
	 * method to initialize module content
	 *
	 * NETWORK: sends GET request to server, for JSON content
	 *
	 * GET content from server
	 * IF server responds, use that content
	 * ELSE
	 * 	IF page has default content, use that content
	 * 	ELSE show error
	 */
	$scope.loadContent = function() {
		var request = 					// JSON location on server
			$scope.repo+$("#name").html()+'/'+$("#variant").html()+".json";

		console.log("Loading content from "+request);

		$scope.contentError = false;	// assume content is loaded, until it isn't

		$http.get(request)				// send GET request
			 .then(function(response) {			// response received from server

				 initModule(response.data);
				 initScore(response.data);

			 },  function(response) {			// response not received
				 if($("#default").length) {				// module has 'default' JSON content
					 console.log("* No response - using default");
					 var content = JSON.parse($("#default").html());

					 initModule(content);
					 initScore(content);

				 } else {								// no content to work with
					 console.log("* No response - try again");
					 $scope.contentError = true;
				 }
			 });

	}

	// initialize all non-function fields
	function initialize() {
		$scope.repo = "http://127.0.0.1:8000/";		// IP address of our production server TODO: change as needed
		$scope.sectionscompleted = 0;				// start from the first section
		$scope.loadContent();						// initialize module object and contentError boolean
		$scope.form = {}							// initialize submission form
		$scope.starttime = new Date();				// initialize start time, to track each section's completion time
	}


	initialize();


	// TODO: load more cookies for form data.)
	//Handles redirect and setting variables if need progress cookie exists.
			$scope.redirectCookie = function(){
					var progressCookie = $cookies.get('progress');
					$scope.sectionscompleted = parseInt(progressCookie);
					$scope.currentsectionIndex = $scope.sectionscompleted
					$scope.currentsection = $scope.module.sections[$scope.currentsectionIndex];
			}

	//This method should retrieve all cookies.
			function getCookies(){
				if($cookies.get('progress')!= null){
					$scope.redirectCookie();
				}
				/*cookieForms = $cookies.getObject('questionCookies');
				//console.log(cookieback.question);

			 questionCount = 0;
			for (i in $scope.currentsection.units) {
					unit = $scope.currentsection.units[i];
					id = "#"+unit.id;

					if(unit.type == "question" && !unit.ignored) {
						questionCount = questionCount + 1;
						switch(unit.mode) {
						case "radio":
							question = questionCount;
							unit.value = cookieForms.question;
							break;

						case "checkbox":
							/*question = questionCount;
							for (j in unit.choices) {
								choice = unit.choices[j];
								choice_id = id+"-"+choice.id;
								$cookies.putObject('questionCookies',{question:unit.choices});
							}
							break;

						case "textarea":
							question = questionCount;
							unit.value = cookieForms.question;
							break;
						}
					}
					else if(unit.type == "checklist") {

				}
			}
			*/
		}


	/*
	 * functionality to save and progress to cookies (or decide to not bother)
	 *
	 *  At a minimum, cookies to remember sectionscompleted
	 *  TODO: But we also should store answers to textarea questions, for certificate
	 *  And to look completely professional we should restore ALL user inputs
	 *  	note that graded MC questions don't need to be saved to do this
	 *  	but MC questions can theoretically be ungraded, so we should accommodate them


	 nformation we want is contained in
	 * 		$scope.module.sections[each].units[each whose type is 'question' and mode is 'textarea']
	 * 			.prompt
	 * 		and .value
	 *
	 */
	 $scope.saveCookie = function (completed) {
		 var today = new Date();
		 var expireTime = new Date(today);
		 expireTime.setMinutes(today.getMinutes() + 300);//expires in 5 hours
		 $cookies.put('progress', completed, {'expires': expireTime});

/*
		 questionCount = 0;
		 for (i in $scope.currentsection.units) {
			unit = $scope.currentsection.units[i];
			id = "#"+unit.id;

			if(unit.type == "question" && !unit.ignored) {
				questionCount = questionCount + 1;
				switch(unit.mode) {
					case "radio":
						question = questionCount;
						$cookies.putObject('questionCookies',{question:unit.value});
						break;

					case "checkbox":
						/*question = questionCount;
						for (j in unit.choices) {
							choice = unit.choices[j];
							choice_id = id+"-"+choice.id;
							$cookies.putObject('questionCookies',{question:unit.choices});
						}
						break;

					case "textarea":
						question = questionCount;
						$cookies.putObject('questionCookies',{question:unit.value});
						break;
					}
				}
				else if(unit.type == "checklist") {

			}

		 //console.log("Cookie has been saved: " + $cookies.get('progress'));

	 }
	 */
 }


	/**
	 * helper method to toggle classes on correct/incorrect elements
	 *
	 * PARAMETERS
	 * 		type of element - "question" or "checkbox" or "checklist", etc.
	 * 		id - the id of the question to classify
	 * 		right - boolean for whether the question is correct or not
	 *
	 * RETURN right, for convenience
	 */
	function classify(type, id, right) {
		if(right) {			// element is correct
			$(id).removeClass("si-"+type+"-incorrect");
			$(id).addClass("si-"+type+"-correct");
		} else {			// element is incorrect
			$(id).removeClass("si-"+type+"-correct");
			$(id).addClass("si-"+type+"-incorrect");
		}
		return right;
	}

 /* method to check all answers in current section
 * called when 'check answers' button is selected
 *
 * FOR EACH graded answer
 * 	classify as correct or incorrect (to trigger CSS changes)
 * IF all answers are correct, enable 'continue' button
 */
$scope.checkAnswers = function() {
	var perfect = true;		// true if all questions/checklists are correct

	// go through each question and checklist, see if it's right
	for (i in $scope.currentsection.units) {
		unit = $scope.currentsection.units[i];
		id = "#"+unit.id;

		var right = true;	// until proven wrong

		if(unit.type == "question" && !unit.ignored) {
			switch(unit.mode) {
			case "radio":
				//perfect &= classify("question", id, unit.value == unit.answer);
				right = classify("question", id, unit.value == unit.answer);
				break;

			case "checkbox":
				var correct = true; // true if this question is correct

				// determine whether each box should be checked
				for (j in unit.choices) {
					choice = unit.choices[j];
					choice_id = id+"-"+choice.id;

					var item_right = $(choice_id).is(':checked') == choice.ans
					correct &= item_right;

					classify("checkbox", choice_id, item_right);
					classify("checkbox-label", choice_id+"-label", item_right);
				}

				//perfect &= classify("question", id, correct);
				right = classify("question", id, correct);

				break;

			case "textarea":
				var re = new RegExp(unit.pattern);
				//perfect &= classify("question", id, re.test(unit.value));
				right = classify("question", id, re.test(unit.value));
				break;

			// TODO (ongoing) maintain functionality for new question modes

			}
		} else if(unit.type == "checklist") {
			var correct = true; // true if all boxes are appropriately checked

			// determine whether each box should be checked
			for (j in unit.list) {
				group = unit.list[j];
				group_id = id+"-"+group.id;

				for (k in group.items) {
					item = group.items[k];
					item_id = group_id+"-"+item.id;

					var item_right = $(item_id).is(':checked') == item.ans;
					correct &= item_right;

					classify("checkbox", item_id, item_right);
					classify("checkbox-label", item_id+"-label", item_right);
				}
			}

			right &= classify("checklist", id, correct);
		}

		if(!right) {
			perfect = false;
			$scope.score.sections[$scope.currentsectionIndex].questions[unit.id] += 1;	// count attempt
		}
	}

	// IF user has just successfully completed a new section
	if (perfect && $scope.currentsectionIndex == $scope.sectionscompleted) {
		// register time between starting and ending section
		var now = new Date();
		$scope.score.sections[$scope.sectionscompleted].time = now - $scope.starttime;
		// update time
		$scope.starttime = now;
		// increment number of sections
		$scope.sectionscompleted ++;
	}
}

	/**
	 * method used to change sections
	 * fails if user has not completed up to the given section
	 *
	 * PARAMETERS: i - the new section index
	 */
	$scope.gotoSection = function(i) {
		if(i <= $scope.sectionscompleted) {
			$scope.currentsectionIndex = i;
			$scope.currentsection = $scope.module.sections[i];
			$scope.saveCookie($scope.sectionscompleted);
		} else {
			console.log("Cannot go to section "+i+": may only go up to section "+$scope.sectionscompleted);
		}
	}




	/**
	 * Simple form of certificate, without Towson logo or fancy placement
	 * TODO: prettify this
	 */
	function defaultCertificate(ctx, data) {
		// white background
		ctx.beginPath();
		ctx.rect(0,0,500,348);
		ctx.fillStyle = "white";
		ctx.fill();

		ctx.fillStyle = "black";
		ctx.textAlign = "left";
		// header
		ctx.font = "20px Arial";
		ctx.fillText("Security Injections @ offline", 20,30);
		ctx.beginPath();
		ctx.moveTo(20,40);
		ctx.lineTo(150,40);
		ctx.stroke();

		ctx.font = "12px Arial";
		ctx.fillText("Module: "+data.course, 20, 60);	// COURSE
		ctx.fillText("Student: "+data.name, 20,80);		// NAME
		ctx.fillText("Date: "+data.today, 20, 100);		// DATE
		ctx.fillText("ID: "+data.hash, 20, 120);		// ID
	}

	/**
	 * Pretty form of certificate, only available with connection to our server
	 */
	function prettyCertificate(ctx, data, img) {
		ctx.drawImage(img, 0,0);

		ctx.font = "12px Arial";
		ctx.textAlign = "left";
		ctx.fillText(data.name, 27,140);		// NAME
		ctx.fillText(data.course, 27, 190);		// COURSE
		ctx.textAlign = "center";
		ctx.fillText(data.hash, 126, 300);		// ID
		ctx.fillText(data.today, 366, 300);		// DATE
	}




	function pdfCertificate(doc,q,img){
		doc.setFontSize(20);
		doc.addImage(img, 'PNG', 10, 10, 190, 132);
		doc.addPage();
		doc.text("Discussion Questions",10,20);
		doc.line(10,25,190,25);

		for (i in q){
			doc.setFontSize(16);
			doc.text(q[i].prompt,20,(40+i*30));
			doc.setFontSize(12);
			doc.text(q[i].answer, 30,(50+i*30));

		}

		doc.save("certificate.pdf");
	}


	/**
	 * method to generate the user's completion certificate
	 * and also update our database
	 *
	 * NETWORK: sends POST 'request' to server with everything the database wants
	 */
	$scope.generateCertificate = function() {
		// Step 1: Get module/variant into printable string.
		var course = $scope.module.name+" - "+$scope.module.variant;

		// Step 2: Get the time into a printable format.
		// SOURCE: http://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
		var now = new Date();
		var dd = now.getDate();
		var mm = now.getMonth()+1; //January is 0!
		var yyyy = now.getFullYear();
		if(dd<10) { dd='0'+dd } // force date to be 2 digits
		if(mm<10) { mm='0'+mm } // force month to be 2 digits
		var today = mm+'/'+dd+'/'+yyyy;

		// Step 3: Produce a hash-string id using all this info.
		// SOURCE: http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
		var to_hash = $scope.form.name + course + today;
		var hash = 0;
			if (to_hash.length == 0) return hash;
			for (i = 0; i < to_hash.length; i++) {
					char = to_hash.charCodeAt(i);
					hash = ((hash<<5)-hash)+char;
					hash = hash & hash; // Convert to 32bit integer
			}
			hash = Math.abs(hash);


		// Step 4: Draw the certificate user data.
			var draw_data = {
					'name': $scope.form.name,
					'course': course,
					'hash': hash,
					'today': today
				}

		var canvas = document.getElementById("si-certificate-canvas");
		var ctx = canvas.getContext('2d');

		defaultCertificate(ctx, draw_data);

		var img = new Image();
		img.crossOrigin = "anonymous";	// teach JS it's safe to download this image...
		img.onload = function(event) {
			// paint right over the default
			prettyCertificate(ctx, draw_data, img);
		}
		img.src = $scope.repo+"images/blank_certificate.png"


		// Step 5: Append page(s) of answers to ungraded text-based questions.
		/*
		 * TODO: all of this
		 *
		 * Information we want is contained in
		 * 		$scope.module.sections[each].units[each whose type is 'question' and mode is 'textarea']
		 * 			.prompt
		 * 		and .value
		 *
		 * I think the hard part will be to get the certificate to have multiple pages.
		 *
		 */
		var doc = new jsPDF();
		certData = canvas.toDataURL();

		var discussionQuestions = [];
		for (i in $scope.module.sections) {
			for (q in $scope.module.sections.units){
					unit = $scope.section.units[q];
				if(unit.type == "question") {
					if(unit.mode == "textarea"){
						discussionQuestions[q] = {prompt:unit.prompt, answer:unit.value};
						//console.log(discussionQuestions[q].prompt);
					}
				}
			}
		}
		//pdfCertificate(doc, discussionQuestions, certData);




		// Step 6: Make certificate available for download

		$("#si-certificate-link").html("Download Certificate");
		$("#si-certificate-link").attr('href', pdfCertificate(doc,discussionQuestions,certData));
		//$("#si-certificate-link").attr('href', doc.save());
		$('#si-certificate-link').prop('disabled', false);


		// Step 7: Post info to database
		$scope.form['modulename'] = $scope.module.name;
		$scope.form['variant'] = $scope.module.variant;
		$scope.form['date'] = now.toJSON();
		$scope.form['score'] = JSON.stringify($scope.score);
		console.log($scope.form['score']);
		// TODO: make sure $scope.form content is securely encrypted. Student email is private info
		$http.post($scope.repo+'record', $scope.form);
	}

}]);
