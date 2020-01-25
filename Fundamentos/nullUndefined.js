let valor // não inicializada
console.log(valor) // Valor padrão: undefined

valor = null // Não aponta para nenhum enereço da memória. Ausência de valor.
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined.
console.log(!!produto.preco)
// delete produto.preco  -> forma correta de excluir um atributo
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)