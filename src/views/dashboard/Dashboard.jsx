import {React, useState} from 'react';
import './Dashboard.scss';
import TituloSecao from '../../components/titulos/tituloSecao/TituloSecao';
import {Link, Outlet} from "react-router-dom";
import { useLocation } from 'react-router-dom';


function Dashboard() {  

  const [subSecao, setSubSecao] = useState("Home")
  const [modoEdicao, setModoEdicao] = useState(["Edição", "Rota não reconhecida", ""])

  const location = useLocation();
  const semBordaTopo = location.pathname ===  "";

  return (
    <div className="conteiner-gestao">
      <TituloSecao nomeSecao="DashBoard" nomeSubSecao= {subSecao} />
      <div className="gestao" style={{borderTop: semBordaTopo ? "none" : "2px solid rgba(171, 167, 167, 0.299)"}}>
        <Outlet context={[subSecao, setSubSecao, modoEdicao, setModoEdicao]}/>
      </div>
    </div>
    
  )
}

export default Dashboard
