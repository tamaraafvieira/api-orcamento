const axios = require("axios")
const api = axios.create({
    baseURL: 'https://mockend.com/juunegreiros/BE-test-api/'
})

module.exports = api