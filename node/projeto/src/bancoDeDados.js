const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

function salvarProduto(produto){
    // Se o id do produto não estiver setado
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    // Retorna o produto. Caso contrário retorna vazio
    return produtos[id] || {}
}

function getProdutos(){
    // retorna todos os valores de produtos.
   return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
   return produto
}

// Mostrando o que será visível para os demais módulos.
// Nota que apenas o sequence não será visível. Será algo específico deste módulo.
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}