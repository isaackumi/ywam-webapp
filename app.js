const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path')
const session = require('express-session')
const mongoose = require('mongoose');
const fileUpload = require("express-fileupload");
const app = express()
// const db = require('./config/db_connection')


const pagesControllers = require('./controllers/pagesControllers')
const postControllers = require('./controllers/postController')
const commentControllers = require('./controllers/commentController')
const eventControllers = require('./controllers/eventController')
const messageControllers = require('./controllers/eventController')
const pageVisitControllers = require('./controllers/pageVisitController')
mongoose.Promise = global.Promise;




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: path.join(__dirname, 'tmp')
}));

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}))



// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.set('trust proxy', true);
app.set('views', __dirname + '/views');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'uploads')));
// app.use(express.static('uploads'));


app.use('/',
  [

    pagesControllers


  ]
);





module.exports = app;
