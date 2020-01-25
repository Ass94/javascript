function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2 
  //  const comparTv32 = !!(trabalho1  ^ trabalho2) // bitwise xor (ou exclusivo)
    const comparTv32 = trabalho1 != trabalho2 // (ou exclusivo, pois não pode ser diferente.)
    const manterSaudavel = !comprarSorvete // operador unário.
    return { comprarSorvete, comprarTv50, comparTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log('-----------------')
console.log(compras(true, false))
console.log('-----------------')
console.log(compras(false, true))
console.log('-----------------')
console.log(compras(false, false))



