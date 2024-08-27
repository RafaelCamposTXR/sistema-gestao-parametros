import { Button } from '../../../components/input/botao/Button';
import { Textbox } from '../../../components/input/text-box/Textbox';
import React, { useState, useEffect } from 'react';
import '../../../components/input/Filtros.scss';
import Modal from '../../../components/modal/Modal';
import { Link } from 'react-router-dom';





function FiltrosCampos({ 
            activeTab, 
            modoEdicao, 
            setModoEdicao,
                }){ 
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);  
  const open = () => setModalOpen(true);

  // const [input0Focused, setInput0Focused] = useState(false);
  // const [input0Value, setInput0Value] = useState('');
  // const [input1Focused, setInput1Focused] = useState(false);
  // const [input1Value, setInput1Value] = useState('');

  const [input0Focused, setInput0Focused] = useState(false);
  const [input0Value, setInput0Value] = useState('');
  const [input1Focused, setInput1Focused] = useState(false);
  const [input1Value, setInput1Value] = useState('');
  
  const LimpaCampos = () => {
    setInput0Value("");
    setInput1Value("");
  }


  useEffect(() => {
    LimpaCampos();
  }, [activeTab]);

  

  return (
    <div className="input-container-pai">
      <div className="input-container">
        {(activeTab === 0) && (
          <>
          {() => LimpaCampos()}
          <Textbox  
            label={"Serviço"} 
            tipoInput={"texto"}
            inputFocused={input0Focused}
            setInputFocused={setInput0Focused}
            inputValue={input0Value}
            setInputValue={setInput0Value}
          />
          <Textbox  
            label={"Status do Serviço"} 
            tipoInput={"texto"}
            inputFocused={input1Focused}
            setInputFocused={setInput1Focused}
            inputValue={input1Value}
            setInputValue={setInput1Value}
          />
          </>
        )}
        {activeTab === 1 && (
          <>
          <Textbox  
            label={"Ação"} 
            tipoInput={"texto"}
            inputFocused={input0Focused}
            setInputFocused={setInput0Focused}
            inputValue={input0Value}
            setInputValue={setInput0Value}
          />
          </>
        )}
        {activeTab === 2 && ( 
          <>
          <Textbox
            label={"Status da Ação"} 
            tipoInput={"texto"}
            inputFocused={input0Focused}
            setInputFocused={setInput0Focused}
            inputValue={input0Value}
            setInputValue={setInput0Value}
          />
          <Textbox  
            label={"Rótulo"} 
            tipoInput={"numero"}
            inputFocused={input1Focused}
            setInputFocused={setInput1Focused}
            inputValue={input1Value}
            setInputValue={setInput1Value}
          />
          </>
        )}
         <div className="button-container">
          <Button 
            className="search-button" 
            dataTooltip="Pesquisar">
          </Button>
          <Button 
            className="delete-button" 
            dataTooltip="Limpar Filtros"
            onClick={() =>LimpaCampos()}>
          </Button>
            <Button
              className="settings-button" 
              dataTooltip="Mais Filtros"
              onClick={() => setModoEdicao([modoEdicao[0], "Mais Filtros e Configurações"])}
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


export default FiltrosCampos;



