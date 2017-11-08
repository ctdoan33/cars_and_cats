var http = require('http');
var fs = require('fs');
const static_contents = require('./static.js');
server = http.createServer(function (request, response){
  static_contents(request, response);
});
server.listen(7077);