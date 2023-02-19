const axios= require('axios')
const express = require('express')
const app = express()
//const fetch = require('node-fetch')
const getUsers = require('./src/routes/users');
const getProducts = require('./src/routes/products');
const calculateBudget = require('./src/routes/budget');


app.get('/users', async (req, res) => {
    const users = await getUsers()
    res.send(users)
})







app.use(async (req, res, next) => {
  const budget = await calculateBudget();
  res.locals.budget = budget;
  next();
});




