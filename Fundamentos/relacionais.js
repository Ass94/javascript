// == igual.
// === Estritamente igual.

console.log('01)', '1' == 1) // true, não compara o tipo apenas o valor.
console.log('02)', '1' === 1) // false (===), pois um é string e o outro é number.
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // 0 é o marco zero.
const d2 = new Date(0)
console.log('09)', d1 === d2) // false está comparando endereço de memória.
console.log('10)', d1 === d2) // false está comparando endereço de memória.
console.log('11)', d1.getTime() === d2.getTime()) 
console.log('12)', undefined == null) // true. (ignora questões de tipo)
console.log('13)', undefined === null) // false. (Leva em consideração tipos de variáveis.)

