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

  const [input1Focused, setInput1Focused] = useState(false);
  const [input2Focused, setInput2Focused] = useState(false);
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');

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
    {modoEdicao[1] == ["Editar valor da tabela"] && 
    <div className="corpo-editar">
        <InputEditar 
            inputFocused={input1Focused} 
            inputValue={input1Value} 
            label="Tipo de Informação" 
            setInputFocused={setInput1Focused} 
            setInputValue={setInput1Value} 
        />
        <InputEditar 
            inputFocused={input2Focused} 
            inputValue={input2Value} 
            label="Script" 
            setInputFocused={setInput2Focused} 
            setInputValue={setInput2Value} 
        />
    </div>}
    </>
  )
}

export default JanelaEditar
