var express = require('express')
var bodyParser = require('body-parser')
var bloomberg = require('./bloommodule.js')
var fs = require('fs')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: false
}))

app.get('/api/bloom', function(req, res){
	bloomberg(function(data){
		console.log(req)
		
		res.send(data)

	})
})

app.post('/', function(req, res) {
	bloomberg(req.body.symbol, function(data) {
		res.send(data);
	});
});

app.use(express.static(__dirname + '/public'));

app.listen(8080);

console.log("App listening on port" + 8080);