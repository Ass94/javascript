const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'UTF-8')
console.log(conteudo)

// assincrono 
// Não é recomendado, pois só será liberado depois de todo conteúdo ter sido lido.
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Por ser Json, podemos fazer de forma mais simplificada, conforme abaixo.
// Já traz o arquivo convertido em objeto.
const config = require('./arquivo.json')
console.log(config.db)

// Lendo arquivos de pasta.
// __dirname -> Representa diretório atual.
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos) // Retornou array de todos arquivos.
})