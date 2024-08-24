import React from 'react'
import InputEditar from '../InputEditar.jsx';
import { useOutletContext } from 'react-router-dom';

function EdicaoInfo(
) {

  const FiltrosInfo = [
    { label: "Tipo de Informação", content: "" },
    { label: "Script", content: "" }
  ];

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  return (
    <>
      {modoEdicao[1] == ["Editar valor da tabela"] && 
        <>
        
        {FiltrosInfo.map((field, index) => (
          <InputEditar 
            key={index}
            label={field.label}
            content={field.content}
            type={field.type}
            tamanho={field.tamanho}
      />
    ))}
        </>
    }
    </>
  )
}

export default EdicaoInfo
