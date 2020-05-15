import React, { Component } from 'react'

// states pode ser alterado. props não.
export default class Saudacao extends Component {
    
    // Inicializando o estado.
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)
        // Garante que this aponte para o objeto atual
        this.setTipo = this.setTipo.bind(this)
        //this.setNome = this.setNome.bind(this)
    }

    setTipo(e) {
        // alterando o estado
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        // this: referencia o objeto atual.

        const {tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." 
                    value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}