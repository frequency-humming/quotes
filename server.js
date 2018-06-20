const express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');

const app = express();

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

const flash = require('express-flash');
app.use(flash());

const mongoose = require('mongoose');  

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(8000, function() {
    console.log("listening on port 8000");
  })