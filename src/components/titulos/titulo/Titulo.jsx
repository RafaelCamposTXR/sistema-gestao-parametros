import React from 'react'
import './titulo.scss'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Titulo({nomeSecao,nomeSubSecao, style, fontPrincipal, fontSecundario}) {
  return (
    <div style={style}> 
      <span className="titulo-principal" style={{fontSize: fontPrincipal}}>{nomeSecao}</span>
      <FiberManualRecordIcon sx={{ fontSize: 8 }} style={{position:"relative", color: "grey", bottom: "0px"}}/>
      <span className="titulo-secundario" style={{fontSize: fontSecundario}}>{nomeSubSecao}</span>
    </div>
  )
}

export default Titulo
