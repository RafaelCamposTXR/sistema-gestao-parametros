import React, {useState, useEffect} from 'react'
import InputEditar from '../InputEditar.jsx';
import { useOutletContext } from 'react-router-dom';

function EdicaoCampos() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  const FiltrosCampos = [
    { label: "Prioridade", content: modoEdicao[2], type: "textbox", tamanho:"30vw", marginRight: "5vw" },
    { label: "Serviço", content: "", type: "textbox", tamanho:"30vw" },
    { label: "Data de Desativação", content: "", type: "textbox", tamanho:"30vw" },
  ];




  return (
    <>
      {modoEdicao[1] == ["Editar valor da tabela"] && 
        <>
        {console.log(modoEdicao, modoEdicao[2])}
        {FiltrosCampos.map((field, index) => (
          <InputEditar 
            key={index}
            type={field.type}
            label={field.label}
            content={field.content}
            tamanho={field.tamanho}
            marginRight={field.marginRight}
      />
    ))}
        </>
    }
    </>
  )
}

export default EdicaoCampos
