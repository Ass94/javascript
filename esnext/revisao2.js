// Arrow Function
// (a, b) São os parâmetros
// => Função Arrow
// a + b A função retornará a soma de a + b (return implícito)
// Função Arrow sempre será uma função anônima. Por conta disso, deverá ser atribuída a uma variável.
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function - Conceito this
// this sempre apontará para exports.
// () Função Arrow sem nenhum parâmetro.
// bind apontar para
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetros default
function log(texto = 'Node'){
console.log(texto) // Node
}
log() // Assume valor padrão
log('Sou mais forte')

// Operador rest (agrupar)
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5)) // Passamos os valores variádos e retornamos o valor agrupado.
