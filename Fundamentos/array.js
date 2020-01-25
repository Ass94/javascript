// Array em JavaScript não tem limite de tamanho igual o Java.

const valores = [7.7, 8.9, 6.3, 9.2] // Array literal
console.log(valores[0], valores[3])
console.log(valores[4]) // Valor indefinido.

valores[4] = 10

console.log(valores)
console.log(valores.length) // Tamanho 5

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // Exclui o último valor de um array.
console.log(valores)

delete valores[0] // Deleta o valor da posição 0
console.log(valores)

console.log(typeof valores)// Array é do tipo object