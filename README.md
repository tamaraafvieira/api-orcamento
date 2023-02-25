
<h1>Budget API</h1>

🇺🇸 A middleware that consumes an API using mockend with [user](https://mockend.com/juunegreiros/BE-test-api/users) and [product](https://mockend.com/juunegreiros/BE-test-api/products) data, returning a budget based on the selected user's rate (tax) and the chosen products' values.

<sub>🇧🇷 Um middleware que consome uma API utilizando o mockend com os dados dos [usuários](https://mockend.com/juunegreiros/BE-test-api/users) e [produtos](https://mockend.com/juunegreiros/BE-test-api/products). Retornando um orçamento baseado na taxa do usuário selecionado e no valor dos produtos escolhidos. </sub>


<h2>Tecnologias utilizadas</h2>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>Axios</li>
  </ul>


<h2>Installation</h2>

```bash
npm install
```

```bash
node index.js
```

<h2>Endpoints</h2>

GET `/users`
🇺🇸 Return the complete list with all registered users.
<sub>🇧🇷 Retorna a lista completa de todos os usuários cadastrados.</sub>

GET `/products`
🇺🇸 Return the complete list with all registered products.
<sub>🇧🇷 Retorna a lista completa de todos os produtos cadastrados.</sub>

GET `/user/:id`
🇺🇸 Return a user by their id.
<sub>🇧🇷 Retorna um usuário pelo seu id.</sub>

GET `/product/:id`
🇺🇸 Return a product by their id.
<sub>🇧🇷 Retorna um produto pelo seu id.</sub>

POST `/user/:id/products`
🇺🇸 Add a product list to a specific user.
<sub>🇧🇷 Adiciona uma lista de produtos a um usuário específico.</sub>
```
{
  "productList": [id, id, id]
}
```

POST `/ calculate-price`
🇺🇸 Calculates the value a user will pay for their selected products according to the user's tax and sum the total amount.
<sub>🇧🇷 Calcula o valor que o usuário irá pagar pelos produtos adicionados de acordo com a taxa de cada um e o total.</sub>
```
{
    "userId": id,
    "productList": [1,2]
}
```

🇺🇸 *Replace the ":id" or "id" by the intended id.

<sub>🇧🇷 *Substitua o ":id" ou "id" pelo id desejado.</sub>


<h2>Autora</h2>
Name: Tamara

[Linkedin](https://www.linkedin.com/in/tamaraafvieira/)

