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
'<label for="About">Napisz cos o sobie !!</label>'+
'</br>'+
'<textarea name="AboutUser"rows="4" cols="50">'+
'</textarea>'+
'</div>';
var pageHTML = '<html>' +
					'<head>' +
						'<title>ProjektStartowy UTC</title>' +
						'<meta charset="utf-8">' +
						'<script type="text/javascript">' +
						'function sprawdz_formularz()' +
						'{' +
							'var f = document.forms["formularz"];' +
							'if (f.firstname.value == "")' +
							'{' +
								'alert("Musisz wpisać imię!");' +
								'f.firstname.focus();' +
								'return false;' +
							'}' +
						'</script>' +

					'</head>' +
					'<body>' +
						'<form method="post" name="formularz" action="" onsubmit="return sprawdz_formularz()">' +
							'<div>' +
								'<label for="firstname">Imię:</label>'+
								'<input type="text" name="firstname">' +
							'</div>' +
							'<div>' +
								'<label for="surname">Nazwisko:</label>'+
								'<input type="text" name="surname">' +
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
			var postData = qs.parse(requestData);
			if (postData.firstname) {
				alert("Musisz wpisać imię!");
			}
		});
		req.on('end', function() {
			var postData = qs.parse(requestData);
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end('<html><head><title>ProjektStartowy UTC</title></head><body><h1>Witaj '+ postData.firstname + postData.surname + '! Twoja firma to ' + postData.CompanyDropdown + 'Wiemy o tobie, ze... ' + postData.AboutUser + '</h1></body></html>');			  

		});
	}
});

server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');