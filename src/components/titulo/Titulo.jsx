import React from 'react'
import './titulo.css'

function Titulo({nomeSecao,nomeSubSecao}) {
  return (
    <div>
      <div className="titulo-principal">
      {nomeSecao + "->" + nomeSubSecao}
      </div>
      <div className="titulo-secundario">
      {nomeSecao + "->" + nomeSubSecao} 
      </div>
    </div>
  )
}

export default Titulo
