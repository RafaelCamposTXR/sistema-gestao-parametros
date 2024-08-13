import {React, useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import Titulo from '../../../components/titulos/titulo/Titulo';
import "./JanelaEditar.css";
import {useNavigate} from 'react-router-dom';
import { Button } from '../../../components/input/botao/Button';
import SaveIcon from '@mui/icons-material/SaveSharp';
import CloseIcon from '@mui/icons-material/CloseSharp';
import InputEditar from './InputEditar.jsx';

function JanelaEditar() {

  const navigate = useNavigate();

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();



  return (
    <>
    <div className="area-superior-editar">
      <Button 
        className="back-button"
        onClick={() => {navigate(-1)}}
      />
      <Titulo 
            nomeSecao={modoEdicao[0]}
            nomeSubSecao={modoEdicao[1]} 
            style={{
              position: "relative",
              display: "inline",
              margin: "1.6vh 0 0 1vw",
              height: "5vh"
            }}  
      />
    </div>
    <div className="corpo-editar">
    {modoEdicao[1] == ["Editar valor da tabela"] && 
        <>
        <InputEditar 
            label="Tipo de Informação" 
            content={'dataInfo[modoEdicao[2]].tipo'}
        />
        <InputEditar 
            label="Script" 
        />
        </>
    }
    </div>
    </>
  )
}

export default JanelaEditar
