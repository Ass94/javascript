const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Break não age sobre o bloco if. Apenas sobre: for, while e switch

for(let x in nums){
    if (x == 5)
     break
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums){
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

// Procure evitar, pois fica muito paracido com programação procedural.
// Rótulo
externo: for (let a in nums){
    interno: for (let b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Fim')