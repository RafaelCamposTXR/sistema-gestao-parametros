import React from 'react';
import {Textbox} from '../../../components/input/text-box/Textbox';
import './JanelaEditar.css';

function InputEditar({ label, content}) {
  return (
    <div className="input-editar">
      <div className="texto-input">
      {label}
      </div>
      <div className="box-input">
      <Textbox
        label={content}
        tamanho="longo"
      />
      </div>
    </div>
  )
}

export default InputEditar
