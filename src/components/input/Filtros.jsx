import React from 'react';
import './Filtros.scss';
import SelectBox from './select/Select'; 
import {Textbox} from './text-box/Textbox'; 
import {Button} from './botao/Button'; 

function Filtros({ ListaComponentes, tamanho}) {
  return (
    <div className="input-container-pai">
      <div className={tamanho == "total" ? "input-container-sistema" : "input-container"}>
        {ListaComponentes.map((item, index) => {
          switch (item.tipo) {
            case 'selectbox':
              return (
                <SelectBox
                  key={index}
                  options={item.options}
                  placeholder={item.placeholder}
                  tamanho={item.tamanho}
                />
              );
            case 'textbox':
              return (
                <Textbox
                  key = {index}
                  label = {item.label}
                  tamanho = {item.tamanho}
                  tipoInput = {item.tipoInput}
                  inputFocused = {item.inputFocused}
                  setInputFocused = {item.setInputFocused}
                  inputValue = {item.inputValue}
                  setInputValue = {item.setInputValue}
                />
              );
            default:
              return null;
          }
        })}
        <div className="button-container">
        {ListaComponentes.map((item, index) => {
            switch (item.tipo) {
              case 'button':
                return (
                  <Button
                    key={index}
                    className={item.className}
                    dataTooltip={item.dataTooltip}
                    onClick={item.onClick}
                    path={item.path}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
      <div className="extra-buttons-container">
      {ListaComponentes.map((item, index) => {
            switch (item.tipo) {
              case 'extra-button':
                return (
                  <Button
                    key={index}
                    className={item.className}
                    dataTooltip={item.dataTooltip}
                    onClick={item.onClick}
                    path={item.path}
                  />
                );
              default:
                return null;
            }
          })}
      </div>
    </div>
  );
}

export default Filtros;