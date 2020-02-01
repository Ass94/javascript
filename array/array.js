// Em JavaScript o array é dinâmico.

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// Array de forma literal:
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo'
console.log(aprovados[3])

// Método para adiconar um novo elemento em array (push)
aprovados.push('Abia')
console.log(aprovados.length)

aprovados [9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === null)
console.log(aprovados[8] === undefined)
console.log(aprovados)

// Ordena array
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

// excluir elemento na posição 1
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']

// A partir do elemento 1, excluir 1 elemento
aprovados.splice(1, 1)
console.log(aprovados)



