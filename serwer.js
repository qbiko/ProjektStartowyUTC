var http = require('http');
var qs = require('querystring');
var dropdown = 
'<label for="CompanyDropdown">Gdzie pracujesz?</label>'+
'<select name="CompanyDropdown">'+
'<option value="UTC">UTC</option>'+
'<option value="PGS">PGS</option>'+
'<option value="Intel">Intel</option>'+
'<option value="Other">Other</option>'+
'</select>';

var pageHTML = '<html>' +
					'<head>' +
						'<title>ProjektStartowy UTC</title>' +
						'<meta charset="utf-8">' +
					'</head>' +
					'<body>' +
						'<form method="post" name="formularz" action="">' +
							'<div>' +
								'<label for="firstname">Imię:</label>'+
								'<input type="text" name="firstname">' +
							'</div>' +
							'<div>' +
								'<label for="surname">Nazwisko:</label>'+
								'<input type="text" name="surname">' +
							'</div>' +
							dropdown +
							'<div>' +
								'<input type="submit" value="Wyślij!">' +
							'</div>' +
						'</form>' +
					'</body>' +
				'</html>';
						

var server = http.createServer(function (req, res) {
	var requestData = '';
	if (req.method === "GET") {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(pageHTML);
	} else if (req.method === "POST") {
		req.setEncoding('utf-8');
		req.on('data', function(data) {
			requestData += data;
		});
		req.on('end', function() {
			var postData = qs.parse(requestData);
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end('<html><head><title>ProjektStartowy UTC</title></head><body><h1>Witaj '+ postData.firstname + postData.surname + '! Twoja firma to ' + postData.CompanyDropdown + '</h1></body></html>');			  
		});
	}
});

server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');