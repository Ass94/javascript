const nums = [1, 2, 3, 4, 5]

// Map -> For com propósito.
// Map não altera o array, simplesmente gera um novo array mdificado.
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

// Função arrow tem o return implícito
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
