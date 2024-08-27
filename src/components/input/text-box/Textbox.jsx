import {React, useState} from "react";
import './Textbox.scss';
import NumbersIcon from '@mui/icons-material/Numbers';
import DescriptionIcon from '@mui/icons-material/Description';

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
                {tipoInput == "numero" && <NumbersIcon sx={{fontSize: "16px", position: "relative", top: "0.35vh", marginRight: "0.16vw"}}/>}
                {tipoInput == "texto" && <DescriptionIcon sx={{fontSize: "15px", position: "relative", top: "0.27vh", marginRight: "0.18vw"}}/>}
                {label}
              </label>
            }
            <input type="text" className={`search-input ${tamanho}`} onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)} value={inputValue} onChange={e => setInputValue(e.target.value)} />
          </div>;
}
  