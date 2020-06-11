const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')

app.post('/usuario/', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(saudacao('Guilherme'))

// Query
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
  //  let corpo = ''
  //  req.on('data', function(parte) {
  //      corpo += parte
  //  })

  //  req.on('end', function() {
   //     res.send(corpo)
  //  })
  res.send(req.body)
})

// :id -> algo que pode mudar dentro da URL.
// requisição >> params >> id
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


/**
 * use() e all() atende todas requisições. (get, post, put, options...)
*/

/* Middleware */
// next() cadeia de responsabilidade...

app.use('/opa', (req, resp, next) => {
    console.log('Antes...')
    next()
})

app.get('/opa', (req, res, next) => {
    console.log('Durante...')
/* HTML */
//res.send('Estou <b>bem!</b>')
   
/* OBJETO */
 //   res.json({
 //       name: 'iPad',
 //       price: 1899.00,
 //       discount: 0.12
 //   })

 /*Array de Objetos*/
 res.json([
     {id: 7, name: 'Ana', position: 1},
     {id: 34, name: 'Bia', position: 2},
     {id: 73, name: 'Carlos', position: 3}
 ])

 next()
})

app.use('/opa', (req, resp) => {
    console.log('Depois...')
})



app.listen(3000, () => {
    console.log('Backend executando...')
})
