let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false
comparaComThis(obj)// true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true

// A arrow function é mais forte do que o bind. Logo a expressão abaixo é false.
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)