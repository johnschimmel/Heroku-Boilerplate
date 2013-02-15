var http = require('http');

var counter = 0;
// Create a HTTP server on port 8000
// Send plain text headers and 'Hello World' to each client

var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
  	
  	// increment the counter for each visitor request
  	counter=counter+1;

	var path = req.url;
	console.log("requested=" + path + " counter=" + counter);

	res.writeHead(200, {'Content-Type': 'text/html'}); // prepare response headers

	if (path == "/") {
		res.end("Hello World. You are visitor # " + counter + ".<br><a href='/page2'>Page 2</a>\n");

	} else if (path == "/page2") {
		res.end("This is page 2. <a href='/'>Back.</a>\n"); // send response and close connection	
	}

}).listen(8000);

// console info message
console.log('Server running at http://127.0.0.1:8000/');


// var express = require('express');

// var app = express.createServer(express.logger());

// app.get('/', function(request, response) {
//   response.send('Hello Dynamic Web Class!');
// });

// var port = process.env.PORT || 3000;
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });