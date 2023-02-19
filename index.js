const { default: axios } = require('axios')
const express = require('express')
const server = express()
const fetch = require('node-fetch')
//const getUsers = require('./users');
//const getProducts = require('./products');
//const calculateBudget = require('./budget');



// const app = express();

//Middleware para retornar a lista de usuários e produtos e o valor do orçamento
app.use(async (req, res, next) => {
  const budget = await calculateBudget();
  res.locals.budget = budget;
  next();
});



