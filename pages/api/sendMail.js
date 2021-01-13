export default (req, res) => {
    'use strict';

var aws = require('aws-sdk');
aws.config.loadFromPath('./config.json');
const sender = "CTFries WebForm<contactForm@ctfries.dev>";
const recipient = "me@ctfries.dev";
const subject = `${req.body.emailSubject}`;
const body_html = `<html>
<head></head>
<body>
Contact Form from: CTFries.dev<br/>
<br/><i>${req.body.emailBody}</i><br/><br/>Email sent from ${req.connection.remoteAddress} at ${Date(Date.now()/1000)}
</body>
</html>`;

// The character encoding for the email.
const charset = "UTF-8";

// Create a new SES object. 
var ses = new aws.SES();
// Specify the parameters to pass to the API.
var params = { 
  Source: sender, 
  Destination: { 
    ToAddresses: [
      recipient 
    ],
    CcAddresses: [
        `${req.body.emailSender}`,
    ]
    },
  Message: {
    Subject: {
      Data: subject,
      Charset: charset
    },
    Body: {
      Html: {
        Data: body_html,
        Charset: charset
      }
    }
  },
  // ConfigurationSetName: configuration_set
};

//Try to send the email.
ses.sendEmail(params, function(err, data) {
  // If something goes wrong, print an error message.
  if(err) {
    res.statusCode = 200
    res.send(err.message);
    console.log(err.message);
  } else {
    res.statusCode = 200
    res.send("Email sent! Message ID: ", data.MessageId)
    console.log("Email sent! Message ID: ", data.MessageId);
  }
});
  }
  