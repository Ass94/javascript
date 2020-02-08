const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// Retorna um Objeto (Usando Factory)
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // B percebeu o que foi feito em A

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // Por serem instâncias diferentes, um não percebe o outro.

