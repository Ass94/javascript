const fs = require('fs')

// Criando objeto.
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// Escrever um arquivo no diretório atual (__dirname)
// Converter de objeto para json (formato texto) 
// function arrow err que retorna o erro caso ocorra.
// Se houver erro, o mesmo será retornado, caso contrário, retornará Arquivo Salvo
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})