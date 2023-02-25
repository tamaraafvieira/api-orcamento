
npm install

Foi utilizada a biblioteca axios. 




Para testar o Midleware:

- No PostMan:

Para retornar uma lista com todos os usuários cadastrados digite o seguinte endpoint: 
http://localhost:8080/users


Para retornar uma lista com todos os produtos cadastrados digite o seguinte endpoint: 
http://localhost:8080/products


Para retornar um único usuário pelo seu id digite o seguinte endpoint: 
http://localhost:8080/user/:id
*substituindo o ":id" pelo id desejado


Para retornar um único produto pelo seu id digite o seguinte endpoint: 
http://localhost:8080/product/:id
*substituindo o ":id" pelo id desejado


Para retornar uma lista com os produtos de cada usuário deve-ser passar o seguinte endpoint:
http://localhost:8080/user/1:id/products

*substituindo o ":id" pelo id desejado
**Deve-se utilizar o método Post e passar a seguinte requisição:

{
  "productList": [id, id, id]
}

**Substituindo o "id" pelos números de id desejados


Para retornar o cálculo do valor que o usuário irá pagar nos produtos (baseado na taxa de cada um) mais o total da compra, deve-ser passar o seguinte endpoint:
http://localhost:8080/calculate-price

*Deve-se utilizar o método Post e passar a seguinte requisição:

{
    "userId": id,
    "productList": [1,2]
}

**Substituindo o "id" pelos números de id desejados
***Inserindo o id dos produtos desejados