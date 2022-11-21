const express = require("express");
const path = require("path");
const app = express(); 
const port = 80;
const fs = require("fs");

// express specific code
// app.use('/static', express.static('static'));  // for serving static files
app.use(express.urlencoded());

// pug specific code
app.set('view engine', 'pug'); // set the template engline as pug
// app.set('views', path.join(__dirname, 'views'));  // set the views directory

//endpoint
app.get('/index', (req, res)=>{
  const title = {'title': 'lets start pug', 'content': 'you are doing great so far'};
  res.status(200).render("index.pug", title);
});
app.post('/', (req, res)=>{
  // console.log(req.body);
  naam = req.body.name;
  email = req.body.email;
  number = req.body.number;
  address = req.body.address;

  let outputToWrite = `the name of the user is ${naam}, and email is equal to ${email} , phone number is ${number} with address ${address}`;
  fs.writeFileSync('outputText.txt', outputToWrite);
  const title = {'title': 'you have successfully filled the form so congratulations'};
  res.status(200).render("index.pug", title);
});


// listening to port
app.listen(port, ()=>{
  console.log(`our application started successfully on port ${port}`);
});