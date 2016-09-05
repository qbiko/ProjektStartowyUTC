var express = require('express');
var app = express();
var bodyParser = require('body-parser');
function stronaPost(imie, nazwisko, firma, oSobie) {
  return ('<!DOCTYPE>' +
  '<html lang="pl">' +
  '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">' +
    '<title>Wypełniono formularz</title>' +
  '</head>' +
  '<body>' +
        '<h3>Dziękujemy za wypełnienie formularza!</h3>' +
        '<p>Witaj, <b>' + imie + nazwisko + '</b>!</p>' +
        '<p>Pracujesz w <b>' + firma + '</b>.</p>' +
        '<p>Jesteś <b>' + oSobie + '</b></p>' +
  '</body>' +
  '</html>')
};

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
   res.end(stronaPost(req.body.imie, req.body.nazwisko, req.body.firma, req.body.oSobie));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Serwer dziala http://http://127.0.0.1:8081/")

})
