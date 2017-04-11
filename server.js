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

// serve images as static resource
app.use('/', express.static('images'));

// serve module content with cors compatibility
app.use('/', cors(allowedContentRequests), express.static('content'));

// TODO: database update, with suitable validation
// TODO: add logging for each request



app.listen(port);
console.log("Server listenting on port "+port);