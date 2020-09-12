const express = require('express');
const path = require('path');
const routes = require('./routes');
var bodyParser = require('body-parser');

// var properties = require('./config/properties');

const app = express();

// ============================= json parser

var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

// Error handling
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// ==============================


// Set the folder for css & java scripts
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// Set the default views directory to html folder
app.set('views', path.join(__dirname, 'html'));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/', routes);

app.locals.baseURL = "http://localhost:3000"

app.listen(3000, () => {
  console.log('Server is running at localhost:3000');
});