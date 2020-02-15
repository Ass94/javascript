// Não aceita repetição / Não indexada.

const times = new Set()
times.add('São Paulo')
times.add('Vasco')
times.add('Santos').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // Não será adicionado, pois não é aceito valor repetido.

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.delete('Flamengo'))
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet) 