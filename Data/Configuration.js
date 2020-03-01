'use strict';

/*
* Merchant configuration properties are taken from Configuration module
*/

// common parameters
const AuthenticationType = 'http_signature';
const RunEnvironment = 'cybersource.environment.SANDBOX';
// const MerchantId = 'testrest';
const MerchantId = 'reverse_test';

// http_signature parameters
// const MerchantKeyId = '08c94330-f618-42a3-b09d-e1e43be5efda';
// const MerchantSecretKey = 'yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=';

const MerchantKeyId = '437e6bbc-6936-47e4-880a-db7f10bbe8f9';
const MerchantSecretKey = 'Sw6t9/y2Oiwou9tvX2qHUDY/7NAFVyAtX2Ls/GWcsyE=';

// jwt parameters
const KeysDirectory = 'Resource';
const KeyFileName = 'testrest';
const KeyAlias = 'testrest';
const KeyPass = 'testrest';

// logging parameters
const EnableLog = true;
const LogFileName = 'cybs';
const LogDirectory = '../log';
const LogfileMaxSize = '5242880'; //10 MB In Bytes

// Constructor for Configuration
function Configuration() {

	var configObj = {
		'authenticationType': AuthenticationType,	
		'runEnvironment': RunEnvironment,

		'merchantID': MerchantId,
		'merchantKeyId': MerchantKeyId,
		'merchantsecretKey': MerchantSecretKey,
        
		'keyAlias': KeyAlias,
		'keyPass': KeyPass,
		'keyFileName': KeyFileName,
		'keysDirectory': KeysDirectory,
        
		'enableLog': EnableLog,
		'logFilename': LogFileName,
		'logDirectory': LogDirectory,
		'logFileMaxSize': LogfileMaxSize
	};
	return configObj;

}

module.exports = Configuration;
