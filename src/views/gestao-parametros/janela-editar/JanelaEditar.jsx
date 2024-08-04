import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Titulo from '../../../components/titulos/titulo/Titulo';

function JanelaEditar() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  return (
    <div>
      <Titulo 
            nomeSecao="Gestão de Parâmetros" 
            nomeSubSecao={modoEdicao} 
            style={{
              position: "relative",
              display: "inline",
              margin: "0.5vh 0 0 1.7vw",
              height: "5vh"
            }}  
      />
    </div>
  )
}

export default JanelaEditar
