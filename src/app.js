const express = require('express');
const app = express();

var cors = require('cors');
var bodyParser = require('body-parser');
const router = require('./routes/routing');
const requestLogger = require('./utilities/requestLogger');
const errorLogger = require('./utilities/errorLogger');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(requestLogger);
app.use('/',router);
app.use(errorLogger);

app.listen(2480);
console.log("Server started listening at port 2480!");