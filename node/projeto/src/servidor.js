const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

// Método http get.
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) 
})

// id passado na URL.
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

// método http post
app.post('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

// método http put (Alterar)
app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

// método http delete
app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id) // Deleta de acordo com o id.
    res.send(produto) // JSON
})

app.listen(porta, () => {
   console.log(`Servidor está executando na porta: ${porta}.`)
})