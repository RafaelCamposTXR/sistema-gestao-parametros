import {React, useState} from "react";
import './Textbox.scss';
import NumbersIcon from '@mui/icons-material/Numbers';

export function Textbox({
  label,
  tamanho,
  tipoInput,
  inputFocused,
  setInputFocused,
  inputValue,
  setInputValue
}) {

  
  return <div className="input-wrapper">
            {!inputFocused && !inputValue && 
              <label className="input-label">
                {tipoInput == "numero" && <NumbersIcon sx={{fontSize: "15px", position: "relative", top: "0.34vh", marginRight: "0.12vw"}}/>}
                {label}
              </label>
            }
            <input type="text" className={`search-input ${tamanho}`} onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)} value={inputValue} onChange={e => setInputValue(e.target.value)} />
          </div>;
}
  