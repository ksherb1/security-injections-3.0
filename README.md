# security-injections-3.0
Cybersecurity modules to teach secure programming principles

This repository contains code for web-applications designed to teach secure coding principles to introductory-level CS students.



NODE DEPENDENCIES (must be installed separately; see instructions below)
-----------------
express
uglify-js
-----------------



SCRIPTS
-------
server.js - server-side script to handle interaction with clients
create.js - compiles HTML, CSS, JS, and JSON into single HTML document
validate.js - parses JSON content and checks that each field is permissible
-------





DIRECTORIES
-----------
content - contains directories for each module, which contain JSON content files for each variant
design - contains design documents for this project
images - repository for all images required by security injections
modules - temporary storage location for modules created via create.js write methods
resource - contains HTML, JS, and CSS files which are combined into a module
-----------





HOW TO INSTALL NODE DEPENENCIES
-------------------------------
1) Install node and npm
2) Open a terminal
3) Navigate to your project directory
4) Type the following command (for example):

npm install uglify-js

5) All dependencies required should be automatically downloaded and stored in a "node_modules" directory in your project folder.
-------------------------------
