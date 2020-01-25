// Armazenando uma funcao em uma variável
// Funcao sem nome chama-se funcao anonima.
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variável
// => substitui o nome function.
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 5))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')