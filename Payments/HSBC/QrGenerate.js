const axios = require('axios');
const request = require('request');

let URL = 'https://api.hsbc.com.mx/x-open-banking/v1/sandbox/qr-code/qr-input-string';

function cajeros(){
    return request(URL, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
    });
}

if (require.main === module) {
	cajeros(function () {
		console.log('\cajeros end.');
	}, false);
}

module.exports.cajeros = cajeros;

