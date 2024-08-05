import {React, useState} from 'react';
import './GestaoParametros.css';
import TituloSecao from '../../components/titulos/tituloSecao/TituloSecao';
import {Link, Outlet} from "react-router-dom";

function GestaoParametros() {  

  const [subSecao, setSubSecao] = useState("")
  const [modoEdicao, setModoEdicao] = useState(["Edição", "Teste"])

  return (
    <div className="conteiner-gestao">
      <TituloSecao nomeSecao="Gestão de Parâmetros" nomeSubSecao= {subSecao} />
      <div className="gestao">
        <Outlet context={[subSecao, setSubSecao, modoEdicao, setModoEdicao]}/>
      </div>
    </div>
  )
}

export default GestaoParametros
