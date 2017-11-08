var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
	if(request.url === '/cars') {
		fs.readFile('views/cars.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/cats") {
		fs.readFile('views/cats.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/cars/new") {
		fs.readFile('views/new.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/stylesheets/styles") {
		fs.readFile('stylesheets/styles.css', function (errors, contents){
			response.writeHead(200, {'Content-type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === "/images/car1.jpeg") {
		fs.readFile('images/car1.jpeg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpeg'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/images/car2.jpeg") {
		fs.readFile('images/car2.jpeg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpeg'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/images/car3.jpeg") {
		fs.readFile('images/car3.jpeg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpeg'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/images/car4.jpeg") {
		fs.readFile('images/car4.jpeg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpeg'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/images/car5.jpeg") {
		fs.readFile('images/car5.jpeg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpeg'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/images/car6.jpeg") {
		fs.readFile('images/car6.jpeg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpeg'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/images/cat1.jpeg") {
		fs.readFile('images/cat1.jpeg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpeg'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/images/cat2.jpeg") {
		fs.readFile('images/cat2.jpeg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpeg'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/images/cat3.jpeg") {
		fs.readFile('images/cat3.jpeg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpeg'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/images/cat4.jpeg") {
		fs.readFile('images/cat4.jpeg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpeg'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/images/cat5.jpeg") {
		fs.readFile('images/cat5.jpeg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpeg'});
			response.write(contents); 
			response.end();
		});
	}
	else if (request.url === "/images/cat6.jpeg") {
		fs.readFile('images/cat6.jpeg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpeg'});
			response.write(contents); 
			response.end();
		});
	}
	else {
		response.end('File not found!!!');
	}
});
server.listen(7077);