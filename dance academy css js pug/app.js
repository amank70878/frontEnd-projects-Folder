const express = require("express");
const path = require("path");
const app = express(); 
const fs = require('fs'); 
const port = 8000;

// express specific code
app.use('/static', express.static('static'));  // for serving static files
app.use(express.urlencoded());

// pug specific code
app.set('view engine', 'pug'); // set the template engline as pug
app.set('views', path.join(__dirname, 'views'));  // set the views directory

//endpoint
app.get('/', (req, res)=>{
  const param = { };
  res.status(200).render('home.pug', param);
});
app.get('/contact', (req, res)=>{
  const param = { };
  res.status(200).render('contact.pug', param);
});
app.get('/about', (req, res)=>{
  const param = { };
  res.status(200).render('about.pug', param);
});
app.post('/', (req, res)=>{
  // console.log(req.body);
  naam = req.body.name;
  email = req.body.email;
  number = req.body.number;
  address = req.body.location;
  description = req.body.desc;

  let outputToWrite = `the name of the user is ${naam}, and email is equal to ${email} , phone number is ${number} with address ${address}, ${description} `;
  fs.appendFileSync('outputText.txt', outputToWrite);
  const params = {'title': 'you have successfully filled the form so congratulations'};
  res.status(200).render("home.pug", params);
});


// listening to port
app.listen(port, ()=>{
  console.log(`our application started successfully on port ${port}`);
});