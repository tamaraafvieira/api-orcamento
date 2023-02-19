const express = require('express')
const axios = require('axios')

const calculateBudget = async () => {
    try {
      const users = await axios.get('https://mockend.com/juunegreiros/BE-test-api/users');
      const products = await axios.get('https://mockend.com/juunegreiros/BE-test-api/products');
      
      // Cálculo do valor do orçamento
      const tax = 0.1; // Porcentagem do imposto
      const budget = products.data.reduce((total, product) => total + product.price, 0) * (1 + tax);
      
      return {
        users: users.data,
        products: products.data,
        budget,
      };
    } catch (error) {
      console.error(error);
    }
  };
  
  module.exports = calculateBudget;

