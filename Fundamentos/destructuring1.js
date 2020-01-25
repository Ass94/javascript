// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco: {
        logradouro: 'Rua 8',
        numero: 86
    }
}

//Retirando de dentro da estrutura.
// Tire de dentro do objeto (pessoa) os atributos nome e idade.
const {nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

// Extraindo de dentro de endereco.
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

