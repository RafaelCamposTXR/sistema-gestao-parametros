import {React,useState} from 'react';
import GestaoServico from '../../components/gestaoservico/GestaoServico';
import './Gestao_campos.css';
import Filtros from '../../components/filtros/Filtros';
import Titulo from '../../components/titulo/Titulo';
import TituloSecao from '../../components/tituloSecao/TituloSecao';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairServiceSharp';
import PendingActionsIcon from '@mui/icons-material/PendingActionsSharp';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheckSharp';


function GestaoCampos() {

  const Tab = ({ label, Icon, isActive, onClick }) => (
    <div className={`conteiner ${isActive ? 'active' : ''}`} onClick={onClick} data-tooltip={label}>
      <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
      </button>
      <div className={`tab-icon ${isActive ? 'active' : ''}`}>
      {!isActive && Icon}
      </div>
    </div>
  );
  
  //desnecessário atualmente, pode vir a ser útil novamente
  const TabContent = ({ isActive, children }) => (
    <div className={`tab-content ${isActive ? 'active' : ''}`}>
      {children}
    </div>
  );
  
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
      { label: 'Serviço',
        icon: <HomeRepairServiceIcon sx={{ fontSize: 18 }} className="icone-tab"/>
      },
      { label: 'Ação',
        icon: <PendingActionsIcon sx={{ fontSize: 18 }} className="icone-tab"/>
      },
      { label: 'Status da Ação',
        icon: <LibraryAddCheckIcon sx={{ fontSize: 18 }} className="icone-tab"/>
      },
    ];

    const getSubTitulo = () => {
      switch (activeTab) {
        case 0:
          return 'Serviço';
        case 1:
          return 'Ação';
        case 2:
          return 'Status da Ação';
        default:
          return '';
      }
    }

  return (
    <div className="conteiner-gestao">
      <TituloSecao nomeSecao="Gestão de Parâmetros " nomeSubSecao= "Campos" />
      <div className="gestao">
        <div className="area-superior">
          <div className="tabs">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              Icon={tab.icon}
              isActive={index === activeTab}
              onClick={() => setActiveTab(index)}
            />
          ))}
          </div>
          <Titulo
          nomeSecao="Gestão de Campos" 
          nomeSubSecao= {getSubTitulo()} 
          style={{position: "relative",
                  display: "inline",
                  margin: "0.5vh 0 0 1.7vw",
                  height: "5vh"}} />
          <Filtros activeTab={activeTab} />
        </div>
        <GestaoServico activeTab={activeTab}/>
      </div>
      
    </div>
  )
}

export default GestaoCampos
