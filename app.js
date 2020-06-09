const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(__dirname));

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const auth = {
    auth: {
        api_key: 'fef411747bc04415cd9d84d345a69efc-0afbfc6c-bb976362',
        domain: 'sandbox872bf1f171bc45448938885a82481807.mailgun.org'
    }
}

let transporter = nodemailer.createTransport(mailgun(auth));

server.post('/send-email', (req, res) => {
    console.log('body: ', req.body);
  let mailOptions = {
    from: 'contact.form.8888@gmail.com',
    to: 'davidyf96@gmail.com',
    subject: req.body.subject,
    text: 'The message has been sent from the contact form in Tommy Shenkar website.' + '\n' + req.body.message + '\n' + 
    'Sent from ' + req.body.fullName + ': ' + req.body.email
  };

   transporter.sendMail(mailOptions, function(error, info){
     if (error) {
       console.log(error);
     } else {
       console.log('Email sent!');
     }
   });
})

server.listen(8080, () => console.log("Listening on http://localhost:8080"));