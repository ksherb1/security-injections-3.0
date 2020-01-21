# security-injections
Cybersecurity modules to teach secure programming principles

This repository contains code for web-applications designed to teach secure coding principles to introductory-level CS students.



## NODE DEPENDENCIES (must be installed separately; see instructions below)
- express
- cors
- uglify-js
- uglifycss





## SCRIPTS
- server.js - server-side script to handle interaction with clients
- create.js - compiles HTML, CSS, JS, and JSON into single HTML document
- validate.js - parses JSON content and checks that each field is permissible





## DIRECTORIES
- content - contains directories for each module/variant, which contain JSON and other content files
- design - contains design documents for this project
- public - repository for all GETtable content, including images, published injections, and minified JSON content
- resources - contains HTML, JS, and CSS files which are combined into a module





## HOW TO INSTALL NODE DEPENENCIES
1) Install node and npm
2) Open a terminal
3) Navigate to your project directory
4) Type the following command:

`npm install`

5) All dependencies required should be automatically downloaded and stored in a "node_modules" directory in your project folder.





## OTHER IMPORTANT STEPS OF CONFIGURATION
1) On the root of the repository, create a folder called "public". 

`mkdir public`

2) Inside that folder, create another folder called "securityinjections".

`cd public`
`mkdir securityinjections`