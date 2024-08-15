import {React, useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import Titulo from '../../../components/titulos/titulo/Titulo';
import "./JanelaEditar.css";
import {useNavigate} from 'react-router-dom';
import { Button } from '../../../components/input/botao/Button';
import SaveIcon from '@mui/icons-material/SaveSharp';
import CloseIcon from '@mui/icons-material/CloseSharp';
import InputEditar from '../InputEditar.jsx';

function JanelaEditar() {

  const navigate = useNavigate();

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  const FiltrosFornecedor = [
    { label: "Fornecedor", content: "", type: "textbox", tamanho: "" },
    { label: "Nome do Contato", content: "", type: "textbox", tamanho: "" },
    { label: "Email", content: "", type: "textbox", tamanho: "" },
    { label: "Site (download de conteúdo)", content: "", type: "textbox", tamanho: "" },
    { label: "Cargo", content: "", type: "textbox", tamanho: "longo" },
    { label: "Telefone", content: "", type: "textbox", tamanho: "longo" },
    { label: "Diretoria", content: "", type: "textbox", tamanho: "" },

  ];

  const FiltrosInfo = [
    { label: "Tipo de Informação", content: "" },
    { label: "Script", content: "" }
  ];

  const RenderInputs = () => {
    let selectedList;

    switch (modoEdicao[0]) {
      case "Fornecedores":
        selectedList = FiltrosFornecedor;
        break;
      case "Info":
        selectedList = FiltrosInfo;
        break;
      default:
        selectedList = []; 
        break;
    }
  }

  return (
    <>
    <div className="area-superior-editar">
      <div classname="titulo-editar">
      <Button 
        className="back-button"
        onClick={() => {navigate(-1)}}
      />
      <Titulo 
            nomeSecao={modoEdicao[0]}
            nomeSubSecao={modoEdicao[1]} 
            style={{
              position: "relative",
              display: "inline",
              margin: "0vh 0 0 0.5vw",
              top: "-0.75vh",
              height: "5vh"
            }}  
      />
      </div>
      <div className="conteiner-botoes">
        <Button 
            className="delete-edit-button"
            dataTooltip="Apagar"
            onClick={() => {navigate(-1)}}
        />
        <Button 
          className="save-button"
          dataTooltip="Salvar"
          onClick={() => {navigate(-1)}}
        />
      </div>
    </div>
    <div className="corpo-editar">
    {modoEdicao[1] == ["Editar valor da tabela"] && 
        <>
        {FiltrosFornecedor.map((field, index) => (
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
    {modoEdicao[1] == ["Mais Filtros e Configurações"] && 
      <>
        {FiltrosFornecedor.map((field, index) => (
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
    </div>
    </>
  )
}

export default JanelaEditar
