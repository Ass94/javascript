require('./global')

console.log(MinhaApp.saudacao())

// Não é possível alterar, pois estamos utilizando a função freeze() no módulo global.
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)