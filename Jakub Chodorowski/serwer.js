var http = require('http');
var qs = require('querystring');
var dropdown =
'<div>'+
'<label for="CompanyDropdown">Gdzie pracujesz?</label>'+
'<select name="CompanyDropdown">'+
'<option value="UTC">UTC</option>'+
'<option value="PGS">PGS</option>'+
'<option value="Intel">Intel</option>'+
'<option value="Other">Other</option>'+
'</select>'+
'</div>';
var textarea =
'<div>' +
'<label for="AboutUser">Napisz cos o sobie !!</label>'+
'</br>'+
'<textarea name="AboutUser"rows="4" cols="50" required>'+
'</textarea>'+
'</div>';
var pageHTML = '<html>' +
					'<head>' +
						'<title>ProjektStartowy UTC</title>' +
						'<meta charset="utf-8">' +

					'</head>' +
					'<body>' +
						'<form method="post" name="formularz" action="">' +
							'<div>' +
								'<label for="firstname">Imię:</label>'+
								'<input type="text" name="firstname" required>' +
							'</div>' +
							'<div>' +
								'<label for="surname">Nazwisko:</label>'+
								'<input type="text" name="surname" required>' +
							'</div>' +
							dropdown +
							textarea +
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
			res.end('<html><head><title>ProjektStartowy UTC</title></head><body><h1>Witaj '+ postData.firstname + ' ' + postData.surname + '! Twoja firma to ' + postData.CompanyDropdown + ' Wiemy o tobie, ze... ' + postData.AboutUser + '</h1></body></html>');

		});
	}
});

server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
