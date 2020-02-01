// Object.preventExtensions -> Não permite aumentar a quantidade de atributos dos objetos.

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensível: ', Object.isExtensible(produto))
console.log(produto)
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal (Selar objetos) Consegue alterar valores dos atributos, porém não 
// é possível adicionar ou excluinr atributos.
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'  // Não adiciona novos atributos.
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes