import {React, useState} from 'react';
import './GestaoParametros.scss';
import TituloSecao from '../../components/titulos/tituloSecao/TituloSecao';
import {Link, Outlet} from "react-router-dom";
import { useLocation } from 'react-router-dom';


function GestaoParametros() {  

  const [subSecao, setSubSecao] = useState("")
  const [modoEdicao, setModoEdicao] = useState(["Edição", "Teste", ""])
  const location = useLocation();

 
  const semBordaTopo = location.pathname ===  "/gestaoparametros/gestaocampos";

  return (
    <div className="conteiner-gestao">
      <TituloSecao nomeSecao="Gestão de Parâmetros" nomeSubSecao= {subSecao} />
      <div className="gestao" style={{borderTop: semBordaTopo ? "none" : "2px solid rgba(171, 167, 167, 0.299)"}}>
        <Outlet context={[subSecao, setSubSecao, modoEdicao, setModoEdicao]}/>
        {/* {console.log(JSON.stringify(location, null, 2))} */}
      </div>
    </div>
    
  )
}

export default GestaoParametros
