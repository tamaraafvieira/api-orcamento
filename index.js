const api = require("./api")
const axios= require('axios')
const express = require('express')
const { response } = require("express")
const server = express()
// const app = express()

// const getUsers = require('./src/routes/users');
// const getProducts = require('./src/routes/products');
// const calculateBudget = require('./src/routes/budget');


server.use(express.json())

server.listen(8080)

    //Esse funciona, mas é passando localmente
// server.get("/", (req, res) => {
//   return res.send({
//     message: "Tamara"
//   })
// })


      //Esse funciona, pegando da api, retorna passando o id no navegador
// server.get('/products/:id', async (req, res) => {
//   const {id} = req.params
// try{
//   const {data} = await api.get(`products/${id}`)
//   return res.send({ id: data.id })
// } catch (error) {
//   res.send({ error: error.message })
// }
// })

server.get('/products', async (req, res) => {
  try {
    const { data } = await api.get('/products')
    return res.send(data)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

server.get('/users', async (req, res) => {
  try {
    const { data } = await api.get('/users')
    return res.send(data)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})



// app.get('/users', async (req, res) => {
//     const users = await getUsers()
//     res.send(users)
// })


// app.use(async (req, res, next) => {
//   const budget = await calculateBudget();
//   res.locals.budget = budget;
//   next();
// });




