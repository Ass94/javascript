// pessoa -> @123af - {...}  - Exemplo de referência que a variável aponta.
const pessoa = {
    nome: 'João'
}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> @235ae -> {...}
//pessoa = {nome: 'Ana'} // Gera erro, pois pessoa é uma constante.

Object.freeze(pessoa) // Congela objeto pessoa. Não pode alterar, deletar ou incluir.

pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante.nome)
