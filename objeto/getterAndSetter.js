const sequencia = {
    _valor: 1, // convenção - Endente-se _ como atributo privado.
    get valor() {return this._valor++},
    set valor (valor){
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)