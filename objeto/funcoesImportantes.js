const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Pega todas as chaves do objeto. (nome, idade, peso)
console.log(Object.values(pessoa)) // Pega os valores dos atributos (chaves).
console.log(Object.entries(pessoa)) // [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

/*
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`) // chave[0] valor[1]
});
*/
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`) 
})

// Propriedade, nome da propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ES2015)

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // Concatena
console.log(obj)

Object.freeze(obj) // a partir daqui obj não poderá ser alterado (congelado)
obj.c = 1234
console.log(obj)