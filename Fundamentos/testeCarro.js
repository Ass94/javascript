const verificaAno = ano => {
    if (ano !== null){
        if(ano > 2010){
            console.log('Modelo novo')
        } else {
            console.log('Modelo antigo')
        }
    }
}

verificaAno(2020)

const soma = (a, b) => {
    return a + b
}

console.log(soma(10, 20))