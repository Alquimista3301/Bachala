var request = require('request');
var options = {
    'method': 'POST',
    'url': 'https://apitest.cybersource.com/pts/v2/payments/',
    'headers': {
        'v-c-merchant-id': 'testrest',
        'Date': '',
        'Host': 'apitest.cybersource.com',
        'Digest': '',
        'Signature': '',
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
    },
    body: JSON.stringify({"clientReferenceInformation":{"code":"TC50171_16"},"pointOfSaleInformation":{"cardPresent":"Y","catLevel":"1","endlessAisleTransactionIndicator":"true","entryMode":"contact","terminalCapability":"1"},"processingInformation":{"commerceIndicator":"retail","paymentSolution":"011"},"aggregatorInformation":{"subMerchant":{"cardAcceptorId":"1234567890","country":"US","phoneNumber":"650-432-0000","address1":"900 Metro Center","postalCode":"94404-2775","locality":"Foster City","name":"Visa Inc","administrativeArea":"CA","region":"PEN","email":"test@cybs.com"},"name":"V-Internatio","aggregatorId":"123456789"},"orderInformation":{"billTo":{"country":"US","lastName":"Deo","address2":"Address 2","address1":"201 S. Division St.","postalCode":"48104-2201","locality":"Ann Arbor","administrativeArea":"MI","firstName":"John","phoneNumber":"999999999","district":"MI","buildingNumber":"123","company":"Visa","email":"test@cybs.com"},"amountDetails":{"totalAmount":"115.0","currency":"MXN"}},"paymentInformation":{"fluidData":{"descriptor":"EMV.PAYMENT.AnywhereCommerce.Walker","value":"ewogICJkYXRhIiA6ICJOZmNwRURiK1dLdzBnQkpsaTRcL1hlWm1ITzdUSng0bnRoMnc2Mk9ITVJQK3hCRlFPdFE0WWpRcnY0RmFkOHh6VExqT2VFQm5iNHFzeGZMYTNyNXcxVEdXblFGQnNzMWtPYnA0XC95alNtVE1JSGVjbGc5OFROaEhNb0VRcjJkRkFqYVpBTFAxSlBsdVhKSVwvbTZKSmVwNGh3VHRWZE16Z2laSUhnaWFCYzNXZVd1ZnYzc1l0cGRaZDZYZENEUFdLeXFkYjBJdUtkdkpBPT0iLAogICJzaWduYXR1cmUiIDogIkFxck1pKzc0cm1GeVBKVE9HN3NuN2p5K1YxTlpBZUNJVE56TW01N1B5cmc9IiwKICAic2lnbmF0dXJlQWxnSW5mbyIgOiAiSE1BQ3dpdGhTSEEyNTYiLAogICJoZWFkZXIiIDogewogICAgInRyYW5zYWN0aW9uSWQiIDogIjE1MTU2MjI2NjIuMTcyMjIwIiwKICAgICJwdWJsaWNLZXlIYXNoIiA6ICJcLzdmdldqRVhMazJPRWpcL3Z5bk1jeEZvMmRWSTlpRXVoT2Nab0tHQnpGTmM9IiwKICAgICJhcHBsaWNhdGlvbkRhdGEiIDogIkN5YmVyU291cmNlLlZNcG9zS2l0IiwKICAgICJlcGhlbWVyYWxQdWJsaWNLZXkiIDogIk1Ga3dFd1lIS29aSXpqMENBUVlJS29aSXpqMERBUWNEUWdBRW1JN0tScnRNN2NNelk5Zmw2UWt2NEQzdE9jU0NYR1hoOFwvK2R4K2s5c1Zrbk05UFQrOXRqMzk2YWF6QjRcL0hYaWlLRW9DXC9jUzdoSzF6UFk3MVwvN0pUUT09IgogIH0sCiAgInZlcnNpb24iIDogIjEuMCIKfQ=="}}})
};

function newProcessPayment(){
    return request(options, function (error, response) { 
        if (error) throw new Error(error);
        console.log(response.body);
    });
}

if (require.main === module) {
	cajeros(function () {
		console.log(' cajeros end.');
	}, false);
}

module.exports.newProcessPayment = newProcessPayment;