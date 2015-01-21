module.exports=function(symbol, callback){

var request= require('request')
var fs = require('fs')

var finalSymbol = symbol+' US Equity';
var req = {
    "securities": [finalSymbol],
    "fields": ["PX_LAST"],
    // "startDate": "20120101",
    // "endDate": "20120301",
    // "periodicitySelection": "DAILY"

}

var options = {
	url: 'https://54.174.49.59/request/blp/refdata/ReferenceData',
	agentOptions : {
		key: fs.readFileSync('client.key'),
    	cert: fs.readFileSync('client.crt'),
    	ca: fs.readFileSync('bloomberg.crt'),
    	strictSSL: false


	},
	json : req

}

request.post(options, function(err, response, body){
	if(err){
		console.error("module FAILED OMFG")

	}
	callback(body)
})
}