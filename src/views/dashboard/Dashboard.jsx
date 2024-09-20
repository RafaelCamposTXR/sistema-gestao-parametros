import {React, useState, useEffect} from 'react';
import './Dashboard.scss';
import TituloSecao from '../../components/titulos/tituloSecao/TituloSecao';
import {Link, Outlet} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Grafico from '../../components/grafico/Grafico';
import {Button} from '../../components/input/button/Button';
import { useSidebar } from '../../context/SidebarContext';


function Dashboard() {  

  useEffect(() => {
    setSidebarContent(inputList)
  }, []);

  const [subSecao, setSubSecao] = useState("Home")
  const [modoEdicao, setModoEdicao] = useState(["Edição", "Rota não reconhecida", ""])

  const { setIsSidebarOpen, setSidebarContent } = useSidebar();

  const location = useLocation();
  const semBordaTopo = location.pathname ===  "";

  const data = {
    labels: ['0', '1', '2', '3', '4'],
    datasets: [
      {
        label: 'demandas',
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const inputList = [
    {
      label: 'Data Inicial',
      labelTextbox: 'Insira uma data inicial',
      tamanho: '20vw',
      tipoInput: 'text',
      inputFocused: "",
      setInputFocused: "",
      inputValue: "",
      setInputValue: "",
    },
    {
      label: 'Data Final',
      labelTextbox: 'Insira uma data final',
      tamanho: '20vw',
      tipoInput: 'text',
      inputFocused: "",
      setInputFocused: "",
      inputValue: "",
      setInputValue: "",
    },
    
  ];

  return (
    <div className="conteiner-dashboard">
      <TituloSecao nomeSecao="DashBoard" nomeSubSecao= {subSecao} />
      <div className="dashboard" style={{borderTop: semBordaTopo ? "none" : "2px solid rgba(171, 167, 167, 0.299)"}}>
        <div className="area-superior-dashboard">
          <p>Demandas</p>
          <Button className="settings-button" dataTooltip="Ver Filtros" onClick={() => {setIsSidebarOpen(true)}}/>
        </div>
        <div className="dashboard-conteiner-grafico">
          <div className="dashboard-grafico">
          <Grafico titulo="Demandas Pendentes" data={data} options={options} />
          </div>
          <div className="dashboard-grafico">
          <Grafico titulo="Demandas Concluidas X Em Andamento" data={data} options={options} />
          </div>
        </div>
        <Outlet context={[subSecao, setSubSecao, modoEdicao, setModoEdicao]}/>
      </div>
    </div>
    
  )
}

export default Dashboard
