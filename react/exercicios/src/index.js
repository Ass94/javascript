import React from 'react'
import ReactDOM from 'react-dom'

//import BomDia from './componentes/BomDia'
//ReactDOM.render(<BomDia nome="Alex"/>, document.getElementById('root'))

// Multi é uma label. Logo, pode ser usado qualquer nome.
//import Multi, { BoaNoite } from './componentes/Multiplos'

//import Saudacao from './componentes/saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    
    <div>
       <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro"/>
            <Filho nome="José" />
            <Filho nome="Carla" /> 
       </Pai>
    </div>
    , document.getElementById('root')) // O resultado será exibido no nó (root) da dom.

