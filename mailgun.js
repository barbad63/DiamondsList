require("dotenv").config();
var mailgun = require("mailgun-js");
const keys = require('./keys.js');
var gkeys = keys.email;
var api_key = gkeys.email_priv_key;
var DOMAIN = gkeys.domain
console.log(api_key, DOMAIN);

var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});
module.exports = function(data, cb) {
	console.log(data);

	// var data = {
	//   from: 'Diamond Service List <no-reply@diamond.com>',
	//   to: 'anithasunil2008@gmail.com, anthonyknight023@gmail.com, keira.nevers@gmail.com',
	//   subject: 'Hello',
	//   text: 'Testing some Mailgun awesomness!'
	// };

	mailgun.messages().send(data, function (error, body) {
	  if(error){
	  	console.log(error);
	  }else{
	  	console.log(body);

	  }

	});

};
