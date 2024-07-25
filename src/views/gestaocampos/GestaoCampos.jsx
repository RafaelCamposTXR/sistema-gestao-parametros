import {React,useState} from 'react';
import GestaoServico from '../../components/gestaoservico/GestaoServico';
import './Gestao_campos.css';
import Filtros from '../../components/filtros/Filtros';
import Titulo from '../../components/titulo/Titulo';

function GestaoCampos() {

  const Tab = ({ label, isActive, onClick }) => (
    <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
    </button>
  );
  
  //desnecessário atualmente, pode vir a ser útil novamente
  const TabContent = ({ isActive, children }) => (
    <div className={`tab-content ${isActive ? 'active' : ''}`}>
      {children}
    </div>
  );
  
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
      { label: 'Serviço'},
      { label: 'Ação'},
      { label: 'Status da Ação'},
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
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
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
