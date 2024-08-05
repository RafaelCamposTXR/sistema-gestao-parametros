import { Button } from '../../../components/input/botao/Button';
import { Filtro } from '../../../components/input/filtros/Filtro';
import React, { useState } from 'react';
import '../../../components/input/filtros/Filtros.css';
import Modal from '../../../components/modal/Modal';
import { Link } from 'react-router-dom';





function Filtros({ activeTab, setModoEdicao }) { 

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);  
  const open = () => setModalOpen(true);
  

  const [input1Focused, setInput1Focused] = useState(false);
  const [input2Focused, setInput2Focused] = useState(false);
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');

  return (
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
          <Link to="/gestaoparametros/edicao">
            <Button
              className="settings-button" 
              dataTooltip="Mais Filtros"
              onClick={() => setModoEdicao(["Gestão de Campos", "Mais Filtros e Configurações"])}
            >
            </Button>
          </Link>
          <Link to="/gestaoparametros/edicao">
            <Button   
              className="add-button"
              dataTooltip="Inserir Novo"
              onClick={() => setModoEdicao(["Gestão de Campos", "Inserir Novo"])} 
              children={<>
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
            </>}
          />
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Filtros;



