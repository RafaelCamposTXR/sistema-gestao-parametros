import {React, useState} from 'react';
import './SistemaGestao.scss';
import TituloSecao from '../../components/titulos/tituloSecao/TituloSecao';
import {Link, Outlet} from "react-router-dom";



function SistemaGestao() {  

  const [subSecao, setSubSecao] = useState("")
  const [modoEdicao, setModoEdicao] = useState(["Edição", "Teste", ""])

  return (
    <div className="conteiner-gestao">
      <TituloSecao nomeSecao="Sistema de Gestão" nomeSubSecao= {subSecao} />
      <div className="gestao">
        <Outlet context={[subSecao, setSubSecao, modoEdicao, setModoEdicao]}/>
      </div>
    </div>
    
  )
}

export default SistemaGestao
