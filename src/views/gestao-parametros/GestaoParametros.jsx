import {React} from 'react';
import './GestaoParametros.css';
import TituloSecao from '../../components/tituloSecao/TituloSecao';
import {Link, Outlet} from "react-router-dom";

function GestaoParametros() {  
  return (
    <div className="conteiner-gestao">
      <TituloSecao nomeSecao="Gestão de Parâmetros" nomeSubSecao= "Campos" />
      <div className="gestao">
        <Outlet />
      </div>
    </div>
  )
}

export default GestaoParametros
