const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar;
falar() // Conflito entre paradigmas: funcional e O.O.

// bind() -> Passa objeto no qual seja resolvido o this.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
