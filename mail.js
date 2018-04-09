require("dotenv").config();
var mailgun = require("mailgun-js");
const keys = require('./keys.js');
var gkeys = keys.email;
var api_key = gkeys.email_priv_key;
var DOMAIN = gkeys.domain
console.log(api_key, DOMAIN);

var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

var data = {
  from: 'dbarbarits@yahoo.com',
  to: 'anthonyknight023@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
  if(error){
  	console.log(error);
  }else{
  	console.log(body);
  }

});