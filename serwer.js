var http = require('http');
var pageHTML = '<html>' +
'<head>' +
'<title>Add something</title>' +
'<meta charset="utf-8">' +
'</head>' +
'<body>' +
'<form method="post" action="">' +
'<div>' +
'<label for="nickname">Nickname:</label>'+
'<input type="text" name="nickname">' +
'</div>' +
'<div>' +
'<input type="submit" value="send it">' +
'</div>' +
'</form>' +
'</body>' +
'</html>';
var server = http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end(pageHTML);
});
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');