import React from 'react'
import './titulo.css'

function Titulo({nomeSecao,nomeSubSecao}) {
  return (
    <div className="conteiner-titulo">
      <span className="titulo-principal">{nomeSecao}</span>
      <span className="titulo-secundario">{nomeSubSecao}</span>
    </div>
  )
}

export default Titulo
