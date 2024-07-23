import React from 'react'
import { Link } from 'react-router-dom';
import './SideBar.css'

function sidebar() {
  return (
    <div className="sidebar">
    <ul className="conteiner-rotas">
      <li >
        <Link to="/gestaocampos" className= "sidebarContent">Gestao de Campos </Link>
      </li>
      <li >
        <Link to="/gestaofornecedores" className= "sidebarContent">Gestão de Fornecedores </Link>
      </li>
      <li >
        <Link to="/gestaousuarios" className= "sidebarContent">Gestão de Usuários </Link>
      </li>
    </ul>
  </div>
)

}

export default sidebar
