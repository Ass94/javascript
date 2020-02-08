// this aponta para module.export

console.log(this === global) // false

console.log(this === module) // false

console.log(this === module.exports) // true

console.log(this ===exports) // true

// Dentro de uma função, this e exports não são iguais.
// Dentro de uma função, this aponta para global
function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()