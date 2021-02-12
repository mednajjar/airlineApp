const express = require('express');
const route = express.Router();


route.get('/',(req, res)=>{
    res.render('index')
})

route.get('/cart',(req, res)=>{
    res.render('cart')
})

route.get('/book',(req, res)=>{
    res.render('book')
})

route.get('/signin',(req, res)=>{
    res.render('signin')
})

route.get('/login',(req, res)=>{
    res.render('login')
})

route.get('/checkout',(req, res)=>{
    res.render('checkout')
})




module.exports = route;