// Operador ... rest(juntar)/spread(espalhar)
// Usar rest com parâmetro de função

//Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } // ...funcionario (Pegando todos atributos de funcionário.)
console.log(clone)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'] // Espalhando dentro do array grupoFinal todos elementos do array grupoA
console.log(grupoFinal)

