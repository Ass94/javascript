const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

// return false: nenhum arrays filtrado.
// return true: todos arrays filtrados, ou seja todos elementos serão impressos.
console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

// Filtra caro, filtra frágil
console.log(produtos.filter(caro).filter(fragil))