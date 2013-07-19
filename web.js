var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var content = fs.readFileSync('index.html', 'utf8');
var buffer = new Buffer(content.length);
len = buffer.write(content, 0);
response.send(buffer.toString('utf8', 0, len));

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
console.log("Listening on " + port);
});
