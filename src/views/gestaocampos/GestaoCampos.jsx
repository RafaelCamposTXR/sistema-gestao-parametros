import {React,useState} from 'react';
import GestaoServico from '../../components/gestaoservico/GestaoServico';
import './Gestao_campos.css';
import Filtros from '../../components/filtros/Filtros';
import Titulo from '../../components/titulo/Titulo';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

function GestaoCampos() {

  const Tab = ({ label, Icon, isActive, onClick }) => (
    <div>
      {Icon}
      <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
    </button>
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
        icon: <HomeRepairServiceIcon/>
      },
      { label: 'Ação',
        icon: <PendingActionsIcon/>
      },
      { label: 'Status da Ação',
        icon: <LibraryAddCheckIcon/>
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
    <div>
      <div className="gestao">
        <div className="area-superior">
        
          <div className="tabs">
          {tabs.map((tab, index, icon) => (
            <Tab
              key={index}
              label={tab.label}
              icon={icon}
              isActive={index === activeTab}
              onClick={() => setActiveTab(index)}
            />
          ))}
          </div>
          <Titulo nomeSecao="Gestão de Campos " nomeSubSecao= {getSubTitulo()} />
          <Filtros activeTab={activeTab} />
        </div>
        <GestaoServico activeTab={activeTab}/>
      </div>
      
    </div>
  )
}

export default GestaoCampos
