// Funcao -> Bloco de código nomeado.

// Funcao sem retorno:
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Soma dois com undefined -> NaN 
imprimirSoma(2, 10, 5, 6, 12) // Soma os dois primeiros e ignora os demais
imprimirSoma()

// Funcao com retorno
function soma(a, b = 0){ // b = 0 inicializa a variável.
    return a + b
}

console.log(soma(2, 4))
console.log(soma(2))