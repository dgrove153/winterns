var app = require('./app');
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.set('port', (process.env.PORT || 3000));

var server = app.listen(app.get('port'), function () {
		var host = server.address().address;
		var port = server.address().port;

		console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
		res.send('Hello Wrld!!!!');
});

app.post('/stock', function(req, res) {
		var stockReq = req.body.stock;
		var apiUrl = 'https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=' + stockReq + '&apikey=VVCZ3DAK6MZGR2XW';
		
		request(apiUrl, function (error, response, body) {
			res.send(body);
		});
});

app.post('/darren', function(req, res) {
		res.setHeader("Content-type", "application/json");
		var text = "testz post: " + req.body.text;
		res.send("{ \"response_type\": \"in_channel\", \"text\": \"" + text + "\" }");
});