
function Pessoa() {
    this.idade = 0
    // Dispara uma outra função a partir de um determinado intervalo passado.
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // Um segundo
}

new Pessoa()