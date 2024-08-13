import { Button } from '../../../components/input/botao/Button';
import { Textbox } from '../../../components/input/text-box/Textbox';
import React, { useState } from 'react';
import '../../../components/input/text-box/Filtros.css';
import Modal from '../../../components/modal/Modal';
import { Link } from 'react-router-dom';





function Filtros({ activeTab, modoEdicao, setModoEdicao }) { 

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);  
  const open = () => setModalOpen(true);
  


  return (
    <div className="filtros">
      <div className="input-container">
        {(activeTab === 0) && (
          <>
          <Textbox  
            label={"Serviço"} 
          />
          <Textbox  
            label={"Status do Serviço"} 
          />
          </>
        )}
        {activeTab === 1 && (
          <>
          <Textbox  
            label={"Ação"} 
          />
          </>
        )}
        {activeTab === 2 && ( 
          <>
          <Textbox
            label={"Status da Ação"} 
          />
          <Textbox  
            label={"Rótulo"} 
          />
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
              dataTooltip="Mais Filtros"
              onClick={() => setModoEdicao(["Gestão de Campos", "Mais Filtros e Configurações"])}
              path="/gestaoparametros/edicao"
            >
            </Button>
            <Button   
              className="add-button"
              dataTooltip="Inserir Novo"
              onClick={() => setModoEdicao([modoEdicao[0], "Inserir Novo", ""])} 
              children={<>
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
                </>}
              path="/gestaoparametros/edicao"
          />
        </div>
      </div>
    </div>
  );
}


export default Filtros;



