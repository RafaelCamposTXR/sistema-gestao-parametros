import React, {useState, useEffect} from 'react'
import InputEditar from '../InputEditar.jsx';
import { useOutletContext } from 'react-router-dom';

function EdicaoFornecedores() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  const FiltrosFornecedor = [
    { label: "Fornecedor", content: "", type: "select", tamanho: "longo", placeholder: "Insira o fornecedor", marginRight: "9vw" },
    { label: "Nome do Contato", content: "", type: "textbox", tamanho: "30vw", marginRight: "0vw" },
    { label: "Email", content: "", type: "textbox", tamanho: "30vw", marginRight: "9vw" },
    { label: "Cargo", content: "", type: "textbox", tamanho: "30vw", marginRight: "0vw" },
    { label: "Telefone", content: "", type: "textbox", tamanho: "30vw", marginRight: "9vw" },
    { label: "Site (download Conteúdo)", content: "", type: "textbox", tamanho: "13.5vw", marginRight: "1.9vw" },
    { label: "Diretoria", content: "", type: "select", tamanho: "curto", marginRight: "0vw" },
  ];

  return (
    <>
      {modoEdicao[1] == ["Editar valor da tabela"] || modoEdicao[1] == "Inserir Novo" && 
        <>
        {console.log("chamando fornecedores")}
        {FiltrosFornecedor.map((field, index) => (
          <InputEditar 
            key={index}
            type={field.type}
            label={field.label}
            content={field.content}
            tamanho={field.tamanho}
            marginRight={field.marginRight}
            placeholder={field.fornecedor}
      />
    ))}
        </>
    }
    </>
  )
}

export default EdicaoFornecedores
