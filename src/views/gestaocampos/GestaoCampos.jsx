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

  return (
    <div>
      <div className="gestao">
        <div className="area-superior">
          <div className='titulo'>
            Gestão de Parâmetros: campos
          </div>
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
          <div className= "titulo1">
            <Titulo nomeSecao="Gestão de Serviços " nomeSubSecao="Teste1"/>
          </div>
          <Filtros activeTab={activeTab} />
        </div>
        <GestaoServico activeTab={activeTab}/>
      </div>
      
    </div>
  )
}

export default GestaoCampos
