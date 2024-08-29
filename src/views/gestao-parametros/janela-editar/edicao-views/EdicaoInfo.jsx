import React, {useState, useEffect} from 'react'
import InputEditar from '../InputEditar.jsx';
import { useOutletContext } from 'react-router-dom';

function EdicaoInfo() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  const FiltrosInfo = [
    { label: "Tipo de Informação", content: modoEdicao[2], type: "textbox", tamanho:"30vw" },
    { label: "Script", content: "", type: "textbox", tamanho:"30vw" }
  ];




  return (
    <>
      {modoEdicao[1] == ["Editar valor da tabela"] && 
        <>
        {console.log(modoEdicao, modoEdicao[2])}
        {FiltrosInfo.map((field, index) => (
          <InputEditar 
            key={index}
            type={field.type}
            label={field.label}
            content={field.content}
            tamanho={field.tamanho}
      />
    ))}
        </>
    }
    </>
  )
}

export default EdicaoInfo
