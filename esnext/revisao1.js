// let e const 

{
    var a = 2 // var escopo global ou de função.
    let b = 3 // escopo global, de função e de boloco.

    console.log(b) // só poderá ser acessada dentro do boloco no qual foi declarada.
}

console.log(a)


// Template String

const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) // C o [ 'd', '3', 'r' ]

const [x, ,y] = [1, 2, 3]
console.log(x, y) // 1 3 ignora o vazio, ou seja o dois.

// Objeto
const {idade, nome} = {nome: 'Ana', idade: 9}
console.log(idade, nome)





