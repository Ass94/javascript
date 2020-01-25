// Função
let dobro = function(a){
    return 2 * a
}

// Função Arrow
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

// Função
let ola = function(){
    return 'Ola'
}

// Função Arrow
ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())
