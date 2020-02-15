const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'], // Chave: Function.
    [{}, 'Objeto'], // Chave: Objeto.
    [123, 'Número'] // Chave: Literal numérico.
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

// Em chaves variadas tem a chave: 123?
console.log(chavesVariadas.has(123)) // true
chavesVariadas.delete(123) // Deleta chave 123
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // Verifica tamanho / quantidade de chaves.

chavesVariadas.set(123, 'a') // Mudando valor da chave 123.
console.log(chavesVariadas)
