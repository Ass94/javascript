function soBoaNoticia(nota){
    if (nota >= 7){
        console.log(`Aprovado com ${nota}`)
    }
}

soBoaNoticia(8.5)
soBoaNoticia(6)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`É verdade... ${valor}`)
    }
}

seForVerdadeEuFalo() // undefined - false
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([]) // array vazio
seForVerdadeEuFalo([1, 2]) // array
seForVerdadeEuFalo({}) // Objeto vazio