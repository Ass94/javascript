import React from 'react'

/**
 *  default utilizado para funções anonimas.
 *  Exemplo: export default props => <h1>Boa tarde {props.nome}!</h1>
 *  No entanto, quando atribuo a função a uma variável (var, let ou const) não deve ser usado default.
 *  Exemplo: export const BoaNoite = props => <h1>Boa noite {props.nome}</h1>
 */


const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

const BoaNoite = props => <h1>Boa noite {props.nome}</h1>

export { BoaTarde, BoaNoite } // Dessa forma, eu retiro a necessidade de declarar as variáveis acima como export default
export default { BoaTarde, BoaNoite }