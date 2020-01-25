console.log(soma(3,4)) // Executa normalmente
console.log(sub(3,4)) // Só poderá ser executada depois de declarada.
console.log(mult(3,4)) // Também não executa.

// Function declaration
function soma(x, y){
    return x + y
}

// function expression
const sub = function (x, y) {
    return x -y
}

console.log(sub(3,4))

// named function expression
const mult = function mult(x, y){
    return x * y
}

console.log(mult(3,4))