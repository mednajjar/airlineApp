const express = require('express');
const app = express();

// -----EJS--------------
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/',(req, res)=>{
    res.render('index')
})

app.get('/cart',(req, res)=>{
    res.render('cart')
})






module.exports = app;