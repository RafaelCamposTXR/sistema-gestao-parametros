import React from 'react';
import {Textbox} from '../../components/input/text-box/Textbox';
import SelectBox from '../../components/input/select/Select';
import './janela-editar/JanelaEditar.scss';

function InputEditar({ label, content, type, tamanho}) {
  return (
    <div className="input-editar">
      <div className="texto-input">
      {label}
      </div>
      <div className="box-input">
      {type === "textbox" && 
        <Textbox
          label={content}
          tamanho={tamanho}
        />
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



