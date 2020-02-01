// Array declarado como constante. Dessa forma não poderemos adicionar mais nenhum elemento. Apenas manipular os existentes.
const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() // Remove o último elemento do array.
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

//remove o primeiro elemento do array.
pilotos.shift()
console.log(pilotos)

// Insere elemento na primeira posição.
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'Botas', 'Massa') // A partir do índice 2 não excluir nenhum elemento (0), adicionar Botas e Massa.
console.log(pilotos)

pilotos.splice(3, 1) // A partir do terceiro elemento, excluir um elemento
console.log(pilotos)

// método que retorna novo array
const algunsPilotos1 = pilotos.splice(2) // Pegar um pedaçõ do array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.splice(1, 4) // Pegar do índice 1 ao 4 (exclusive)

