import React from 'react';
import {Textbox} from '../../components/input/text-box/Textbox';
import './janela-editar/JanelaEditar.css';

function InputEditar({ label, content, type}) {
  return (
    <div className="input-editar">
      <div className="texto-input">
      {label}
      </div>
      <div className="box-input">
      {type === "textbox" && 
        <Textbox
          label={content}
          tamanho="longo"
        />
      }
      {type === "select" && 
        <Textbox
          label={content}
          tamanho="longo"
        />
      }
      
      </div>
    </div>
  )
}

export default InputEditar



