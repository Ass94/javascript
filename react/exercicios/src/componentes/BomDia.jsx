import React from 'react'

// Ao trabalhar com array, torna-se importante utilizar o atributo key que identifica cada elemento.
export default props =>  [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
]
    
      
    



/*
// Por convensão, propos é o nome do parâmetro.
// (<Fragment>) Utilizado para retorna elementos JSX adjacentes.

export default props => 
    <React.Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </React.Fragment>

// Ou podemos envolver os elementos adjacentes (h1 e h2) dentro de uma div.

export default props => 
    <div>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </div>

*/