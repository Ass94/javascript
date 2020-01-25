// let tem escopo global, de funcao (local) e bloco.
// var escopo global.

let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)