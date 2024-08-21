import {React, useState} from "react";
import './Filtros.scss';

export function Textbox({
  label,
  tamanho,
  inputFocused,
  setInputFocused,
  inputValue,
  setInputValue
}) {

  
  return <div className="input-wrapper">
            {!inputFocused && !inputValue && <label className="input-label">{label}</label>}
            <input type="text" className={`search-input ${tamanho}`} onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)} value={inputValue} onChange={e => setInputValue(e.target.value)} />
          </div>;
}
  