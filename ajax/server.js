const bodyParser = require('body-parser')
const express = require('express')
const app = express()

/*Middleware*/
/*Irá servir os arquivos estáticos: js, html*/
app.use(express.static('.'))
/*Responsável por ler o códio e transformar o conteúdo em objeto*/
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },

    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer ({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro.')
        }
        res.end('Conclído com sucesso.') 
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, // retorna tudo que veio (req) + o id
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    //req.params
    const par = parseInt(req.query.numero) % 2 === 0 
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})


app.listen(8080, () => console.log('Executando...'))