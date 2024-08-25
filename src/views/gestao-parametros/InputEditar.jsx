import React, {useState} from 'react';
import {Textbox} from '../../components/input/text-box/Textbox';
import SelectBox from '../../components/input/select/Select';
import './janela-editar/JanelaEditar.scss';

function InputEditar({ label, content, type, tamanho}) {

  const [input0Focused, setInput0Focused] = useState(false);
  const [input0Value, setInput0Value] = useState('');


  return (
    <div className="input-editar">
      <div className="texto-input">
      {label}
      </div>
      <div className="box-input">
      {type === "textbox" && 
        <div style={{width:"16.5vw"}}>
          <Textbox
            label={content}
            inputFocused={input0Focused}
            setInputFocused={setInput0Focused}
            inputValue={input0Value}
            setInputValue={setInput0Value}
            tamanho={tamanho}
          />
        </div>
      }
      {type === "select" && 
        <SelectBox
          label={content}
          tamanho={tamanho}
        />
      }
      
      </div>
    </div>
  )
}

export default InputEditar



