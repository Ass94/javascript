const funcs = []

//let tem escopo de bloco.
for(let i = 0; i < 10; i++){
    funcs.push(function(){ // adicionando function no array funcs.
        console.log(i)
    })
}

funcs[2]() // 2
funcs[6]() // 6
funcs[8]() // 8