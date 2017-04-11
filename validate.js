/**
 *  Parses JSON content and checks that each field is permissible
 *  
 *  Goals:
 *  	throw error if content does not match requirements in prereqs
 *  	throw error if content does not match JSON schema
 *  
 *  Parameters:
 *  	content - JSON string to parse
 *  	prereqs - additional constraints on content:
 *  		{
 *  			name - the module name must match
 *  			variant - the module variant must match
 *  		}
 *  Return:
 *  	object of parsed JSON content
 */

exports.parse = function(content, prereqs) {
	
	var module;
	
	// check if content is valid JSON
	try {
		module = JSON.parse(content);
	} catch(e) {
		throw "Content is not valid JSON: "+e;
	}
	
	
	if(prereqs.name != module.name || prereqs.variant != module.variant) {
		throw "Module name and variant must match file location and name";
	}
	
	// TODO: all validation required to ensure content satisfies "design/JSON Schema.txt"
	
	// TODO (ongoing) maintain functionality for new unit types and question modes
	
	return module;
}