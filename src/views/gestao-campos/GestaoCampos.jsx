import {React,useState} from 'react';
import GestaoServico from '../../components/gestaoservico/GestaoServico';
import './GestaoCampos.css';
import Titulo from '../../components/titulo/Titulo';
import TituloSecao from '../../components/tituloSecao/TituloSecao';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairServiceSharp';
import PendingActionsIcon from '@mui/icons-material/PendingActionsSharp';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheckSharp';
import { Button } from '../../components/botao/Button';
import { Filtro } from '../../components/filtros/Filtro';
import Modal from '../../components/modal/Modal';


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

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);  
  const open = () => setModalOpen(true);
  

  const [input1Focused, setInput1Focused] = useState(false);
  const [input2Focused, setInput2Focused] = useState(false);
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');

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
          <div className="filtros">
            <div className="input-container">
              {(activeTab === 0) && (
              <>
              <Filtro   
              inputFocused={input1Focused} 
              inputValue={input1Value} 
              label={"Serviço"} 
              setInputFocused={setInput1Focused} 
              setInputValue={setInput1Value}  />
              <Filtro   
              inputFocused={input2Focused} 
              inputValue={input2Value} 
              label={"Status do Serviço"} 
              setInputFocused={setInput2Focused} 
              setInputValue={setInput2Value}  />
              </>
              )}
              {activeTab === 1 && (
              <>
              <Filtro   
              inputFocused={input1Focused} 
              inputValue={input1Value} 
              label={"Ação"} 
              setInputFocused={setInput1Focused} 
              setInputValue={setInput1Value}  />
              </>
              )}
              {activeTab === 2 && ( 
              <>
              <Filtro   
              inputFocused={input1Focused} 
              inputValue={input1Value} 
              label={"Status da Ação"} 
              setInputFocused={setInput1Focused} 
              setInputValue={setInput1Value}  />
              <Filtro   
              inputFocused={input2Focused} 
              inputValue={input2Value} 
              label={"Rótulo"} 
              setInputFocused={setInput2Focused} 
              setInputValue={setInput2Value}  />
              </>
              )}
              <div className="button-container">
                <Button 
                  className="search-button" 
                  dataTooltip="Pesquisar">
                  Pesquisar
                </Button>
                <Button 
                  className="delete-button" 
                  dataTooltip="Limpar Filtros">
                </Button>
                <Button 
                  className="settings-button" 
                  dataTooltip="Mais Filtros">
                </Button>
                <Button   
                  className="add-button"
                  dataTooltip="Inserir Novo"
                  onClick={() => modalOpen ? close() : open()} 
                  children={<>
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
              </>}
            />
          </div>
        </div>
      </div>
        </div>
          <GestaoServico activeTab={activeTab}/>
        </div>
      
    </div>
  )
}

export default GestaoCampos
