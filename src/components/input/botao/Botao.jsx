import React from 'react';
import './Botao.css';

function Botao({
  className,
  onClick,
  dataTooltip
}) {
  return <button className={className} data-tooltip={dataTooltip} onClick={onClick}> 
    </button>;
}

export default Botao;

  