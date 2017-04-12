/**
 * Server-side script to handle interaction with clients.
 * 
 * Goals:
 * 		serve up images as requested by each module
 * 		serve up module JSON content, with appropriate CORS validation
 * 		update database with information from module completion
 * 
 * Parameters:
 * 		port - which port to listen for requests on
 * 
 * Phase 2: extended significantly, and perhaps broken up over multiple files
 */

// PARAMETERS
var port = 8000;					//  which port to listen for requests on

// REQUIRE
var express = require('express');	// simple node web server
var cors = require('cors');			// CORS validation



var app = express();

// CORS validation settings
// TODO: make this stricter (or decide to not)
var allowedContentRequests = {
	origin: '*'
}

// serve module content with cors compatibility
// TODO: we may want to do this static serving in apache instead
app.use('/', cors(allowedContentRequests), (req,res,next) => {
	console.log("* Received request: "+req);
	// TODO: more sophisticated logging
	next();
}, express.static('public'));

// TODO: database update, with suitable validation



app.listen(port);
console.log("Server listenting on port "+port);