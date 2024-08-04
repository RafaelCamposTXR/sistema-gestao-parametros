import React from 'react';
import './tituloSecao.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function TituloSecao({nomeSecao,nomeSubSecao}) {
  return (
    <div className="conteiner-titulo-secao">
      {/* <FiberManualRecordIcon sx={{ fontSize: 11 }} style={{position:"relative", color: "var(--blue)", top: "-1px", left: "1px"}}/> */}
      <span className="titulo-principal-secao">{nomeSecao}</span>
      <ArrowForwardIosIcon sx={{ fontSize: 10 }} style={{position:"relative", color: "black", top: "1.3px"}}/>
      <span className="titulo-secundario-secao">{nomeSubSecao}</span>
    </div>
  )
}

export default TituloSecao
  