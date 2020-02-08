console.log(module.exports) // Criando objeto vazio

console.log(module.exports === this)
console.log(module.exports === exports)

// Públicas, poderão ser vistas por outros módulos.
this.a = 1 
exports.b = 2 
module.exports.c = 3 

// exports não receberá nulo.
exports = null
console.log(module.exports)

// Continuará apontando par os primeiros valores setados.
exports = {
    nome: 'Teste'
}

console.log(module.exports)

// Forma correta de alterar exports
module.exports = {
    publico: true
}