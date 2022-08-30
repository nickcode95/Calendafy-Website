require('dotenv').config();
const express = require('express');
const app = express()
const https = require ('https');
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
})


// Send post req back to API
app.post('/', (req, res) =>{
  // Pull in data from submit form
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  
  // Setup object for mailchimp called members
  const data = {
    members: [
      {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      }    
    }     
    ]
  }
var jsonData = JSON.stringify(data);

 const url = process.env.url;

 const options = {
  method:'POST',
  auth: process.env.auth
 }

const request = https.request(url, options, (response) =>{
  response.on("data", (d) => {
    console.log(JSON.parse(d));
  })
})

request.write(jsonData);
request.end();
  
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

