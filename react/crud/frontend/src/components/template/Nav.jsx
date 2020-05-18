import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

// componente funcional
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa. A ideia é não ter elmentos repetidos 
            1. Criar novo componente.
            2. Importá-lo para cá
            3. Passar os parâmetros*/}
            <Link to="/">
                <i className="fa fa-home"></i>Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>