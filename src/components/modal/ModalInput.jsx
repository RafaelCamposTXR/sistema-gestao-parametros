import React from "react";
import "./Modal.scss";

export function ModalInput({label, isShort}) {
  return <div className="input-conteiner-modal">
          <div className="input-label-modal">
            <div className="label-modal">
            {label}
            </div>
          <input type="text" className={`search-input-modal ${isShort ? 'pequeno' : 'longo'}`} value="" onChange={e => {}} />
          </div>
        </div>;
}
  