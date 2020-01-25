// Destructurin array. Tirando algo de dentro do array
function rand([min = 0, max = 1000]) {
// Se min maior que max, inverta as duas variáveis.
if (min > max) [min, max] = [max, min]
const valor = Math.random() * (max - min) + min
return Math.floor(valor) // arredonda valores para baixo.
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand()) // Erro!
