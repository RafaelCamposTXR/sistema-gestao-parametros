import React from 'react';
import {Textbox} from '../../../components/input/text-box/Textbox';
import './JanelaEditar.css';

function InputEditar({inputFocused, inputValue, label, setInputFocused,  setInputValue}) {
  return (
    <div className="input-editar">
      <div className="texto-input">
      {label}
      </div>
      <div className="box-input">
      <Textbox
        inputFocused={inputFocused}
        inputValue={inputValue}
        label=""
        setInputFocused={setInputFocused}
        setInputValue={setInputValue}
      />
      </div>
    </div>
  )
}

export default InputEditar
