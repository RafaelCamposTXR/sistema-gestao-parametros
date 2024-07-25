import React from 'react'
import './titulo.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Titulo({nomeSecao,nomeSubSecao}) {
  return (
    <div className="conteiner-titulo"> 
      <span className="titulo-principal">{nomeSecao}</span>
      <FiberManualRecordIcon sx={{ fontSize: 8 }} style={{position:"relative", color: "grey", bottom: "0px"}}/>
      <span className="titulo-secundario">{nomeSubSecao}</span>
    </div>
  )
}

export default Titulo
