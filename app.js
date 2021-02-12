const express = require('express');
const app = express();
const route = require('./routes/pagesRout');
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/img', express.static(__dirname + '/img'));

// -----EJS--------------
app.use(expressLayouts);
app.set('layout', './layouts/layout');
app.set('view engine', 'ejs');


app.use('/', route);



module.exports = app;