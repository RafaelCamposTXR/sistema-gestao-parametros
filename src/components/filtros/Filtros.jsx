
import React, { useState } from 'react';
import './Filtros.css';
import Modal from '../modal/Modal';
import Botao from '../botao/Botao';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TuneIcon from '@mui/icons-material/TuneSharp';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAddSharp';




function Filtros({ activeTab }) { 

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
          <div className="input-wrapper">
            {!input1Focused && !input1Value && <label className="input-label">Serviço</label>}
            <input
              type="text"
              className="search-input"
              onFocus={() => setInput1Focused(true)}
              onBlur={() => setInput1Focused(false)}
              value={input1Value}
              onChange={(e) => setInput1Value(e.target.value)}
            />
          </div>
        )}
        {activeTab === 0 && (
          <div className="input-wrapper">
            {!input2Focused && !input2Value && <label className="input-label">Status do Serviço</label>}
            <input
              type="text"
              className="search-input"
              onFocus={() => setInput2Focused(true)}
              onBlur={() => setInput2Focused(false)}
              value={input2Value}
              onChange={(e) => setInput2Value(e.target.value)}
            />
          </div>
        )}
        {activeTab === 1 && (
          <div className="input-wrapper">
            {!input2Focused && !input2Value && <label className="input-label">Ação</label>}
            <input
              type="text"
              className="search-input"
              onFocus={() => setInput2Focused(true)}
              onBlur={() => setInput2Focused(false)}
              value={input2Value}
              onChange={(e) => setInput2Value(e.target.value)}
            />
          </div>
        )}
        {activeTab === 2 && (
          <div className="input-wrapper">
            {!input1Focused && !input1Value && <label className="input-label">Status da Ação</label>}
            <input
              type="text"
              className="search-input"
              onFocus={() => setInput1Focused(true)}
              onBlur={() => setInput1Focused(false)}
              value={input2Value}
              onChange={(e) => setInput1Value(e.target.value)}
            />
          </div>
        )}
        {activeTab === 2 && (
          <div className="input-wrapper">
            {!input2Focused && !input2Value && <label className="input-label">Rótulo</label>}
            <input
              type="text"
              className="search-input"
              onFocus={() => setInput2Focused(true)}
              onBlur={() => setInput2Focused(false)}
              value={input2Value}
              onChange={(e) => setInput2Value(e.target.value)}
            />
          </div>
        )}
         <div className="button-container">
          <button className="search-button" data-tooltip="Pesquisar">Pesquisar</button>
          <button className="extra-button" data-tooltip="Limpar Filtros"> <DeleteForeverIcon sx={{ fontSize: 18 }}/> </button>
          <button className="extra-button" data-tooltip="Mais Filtros"> <TuneIcon sx={{ fontSize: 18 }}/> </button>
          <button className="add-button" data-tooltip="Inserir Novo" onClick={() => (modalOpen ? close() : open())}> <PlaylistAddIcon sx={{ fontSize: 22 }}/> 
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filtros;



