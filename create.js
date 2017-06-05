/**
 * Compiles HTML, CSS, JS, and JSON into single HTML document.
 *
 * Parameters:
 * 		name - module name (also location of JSON content)
 * 		variant - module variant (also file-name of JSON content)
 * 		dev - boolean indicating if this file should include CSS and JS literally or not
 *
 * Phase 2: functions for both 3.0 (which we have) and 1.0
 */

// REQUIRE
var fs = require('fs');
var UglifyJS = require("uglify-js");
var Validate = require("./validate.js");


exports.write_3 = function(name, variant, dev) {
	if(typeof(dev)==='undefined') dev = false;		// default value for dev

	// CONSTANTS
	var contentDir = "content/";
	var resourceDir = "resources/";
	var publicDir = "public/";
	var moduleDir = publicDir+"securityinjections/";
	// MORE CONSTANTS
	var contentLoc = name+"/"+variant+"/";
	var templateFile = resourceDir+"template.html";
	var angularFile = resourceDir+"angular.js";
	var styleFile = resourceDir+"style.css";
	var moduleFile = name+' - '+variant+'.html';	// for output
	if(dev) {
		moduleFile = 'DEV - '+moduleFile;
	}



	// STEP 1 - load all content files and parse/validate/minify into single JSON string
	var content = {}									// parameters for parsing
	var files = fs.readdirSync(contentDir+contentLoc);				// get all content files
	for(i in files) {
		content[files[i]] = ""+fs.readFileSync(contentDir+contentLoc+files[i]);
	}

	var prereqs = {'name': name, 'variant':variant};
	var module = Validate.parse(content, prereqs);
	content = JSON.stringify(module);					// content minified


	// STEP 2 - load/minify each resource file
	var template = fs.readFileSync(templateFile);
	if(!dev) {	// in dev mode, we don't need CSS of JS content
		var style = fs.readFileSync(styleFile);				// TODO: minify CSS, presumably similar to minifying js below
		var angular = UglifyJS.minify(angularFile).code;	// javscript minified
	}

	// STEP 3 - craft new file-string
	var html = '';
	// header
	html += '<head>'+'\n';
	html += '\t'+'<meta charset="UTF-8">'+'\n';
	html += '\t'+'<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>'+'\n';
	html += '\t'+'<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>'+'\n';
	html += '\t'+'<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-sanitize.js"></script>'+'\n';
	html += '\t'+'<script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-cookies.js"></script>'+'\n';
	html += '\t'+'<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js"></script>'+'\n';
	html += '\t'+'<title>'+'Security Injection: '+module.name+' - '+module.variant+'</title>'+'\n';
	if(dev) {	// in dev mode, link to sheets rather than including source
		html += '\t'+'<link rel="stylesheet" href="../../'+styleFile+'">'+'\n';
		html += '\t'+'<script src="../../'+angularFile+'"></script>'+'\n';
	} else {
		html += '\t'+'<style>'+'\n'+style+'\n</style>'+'\n';
		html += '\t'+'<script>'+angular+'</script>'+'\n';
	}
	html += '</head>'+'\n';
	// body
	html += '<body>'+'\n';
	html += template+'\n';
	html += '\t'+'<script type="text/plain" id="name">'+module.name+'</script>'+'\n';
	html += '\t'+'<script type="text/plain" id="variant">'+module.variant+'</script>'+'\n';
	html += '\t'+'<script type="text/plain" id="default">'+content+'</script>'+'\n';
	html += '</body>';

	// STEP 4 - write string to output file
	fs.writeFileSync(publicDir+contentLoc.slice(0,-1)+".json", content);
	fs.writeFileSync(moduleDir+moduleFile, html);
}

// Phase 2: also create a 1.0 write function



//Phase 2: module should not have "MAIN"
// MAIN
exports.write_3("Development", "Showcase", true);
exports.write_3("Development", "Basic", true);
exports.write_3("Development", "Demo");
exports.write_3("Computer Literacy", "Passwords", true);
//exports.write_3("Integer Error", "CS0 C++");
