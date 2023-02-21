const api = require("./api")
const axios= require('axios')
const express = require('express')
const { response } = require("express")
const server = express()

server.use(express.json())

server.listen(8080)


// Adicionando os usuários em um Array 
async function usersArray() {
  try {
    const response = await api.get('/users')
    const users = response.data

    const usersArray = []

    users.forEach(user => {
      usersArray.push(user)
    })

    console.log(usersArray)
    return usersArray
  } catch (error) {
    console.error({ error: error.message })
  }
}

let userList = []

server.on("listening", async () => {
  userList = await usersArray();
})

// Adicionando os produtos em um Array
async function productsArray() {
  try {
    const response = await api.get('/products')
    const products = response.data
    const productsArray = []

    products.forEach(product => {
      productsArray.push(product)
    });

    console.log(productsArray)
    return productsArray
  } catch (error) {
    console.error({ error: error.message })
  }
}

let productList = []

server.on("listening", async () => {
  productList = await productsArray();
})


//Traz a lista completa de todos os usuários cadastrados 
server.get('/users', async (req, res) => {
  try {
    const { data } = await api.get('/users')
    return res.send(data)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

//Traz a lista completa de todos os produtos cadastrados 
server.get('/products', async (req, res) => {
  try {
    const { data } = await api.get('/products')
    return res.send(data)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})



//Retorna o usuário pelo id
async function getUserById(userId) {
  try {
    const userList = await usersArray()
    const user = userList.find(user => Number(user.id) === Number(userId))

    if (!user) {
      return { error: "User not found" }
    }

    return user
  } catch (error) {
    console.error(error)
    return { error: error.message }
  }
}

server.get('/user/:id', async (req, res) => {
  const userId = req.params.id
  const user = await getUserById(userId)

  return res.json(user)
})

//Retorna o produto pelo id
async function getProductById(productId) {
  try {
    const productList = await productsArray()
    const product = productList.find(product => Number(product.id) === Number(productId))

    if (!product) {
      return { error: "Product not found" }
    }

    return product
  } catch (error) {
    console.error(error)
    return { error: error.message }
  }
}

server.get('/product/:id', async (req, res) => {
  const productId = req.params.id
  const product = await getProductById(productId)

  return res.json(product)
})





//Retorna passando o id no navegador, porém retorna somente o id, sem as informações , está funcionando
// server.get('/products/:id', async (req, res) => {
//   const {id} = req.params
// try{
//   const {data} = await api.get(`products/${id}`)
//   return res.send({ id: data.id })
// } catch (error) {
//   res.send({ error: error.message })
// }
// })



