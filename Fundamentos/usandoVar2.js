// Exceto em function, var ignora blocos.

var numero = 1

{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)