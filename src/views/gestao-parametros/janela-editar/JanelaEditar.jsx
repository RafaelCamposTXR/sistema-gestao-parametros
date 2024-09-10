import {React, useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import Titulo from '../../../components/titulos/titulo/Titulo';
import "./JanelaEditar.scss";
import {useNavigate} from 'react-router-dom';
import { Button } from '../../../components/input/botao/Button';
import EdicaoInfo from './edicao-views/EdicaoInfo.jsx';
import EdicaoFornecedores from './edicao-views/EdicaoFornecedores.jsx';
import EdicaoCampos from './edicao-views/EdicaoCampos.jsx';
import EdicaoErro from './edicao-views/EdicaoErro';
import EdicaoUsuarios from './edicao-views/EdicaoUsuarios';

function JanelaEditar() {

  const navigate = useNavigate();

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();


  return (
    <>
      <div className="area-superior-editar">
        <div className="area-superior-texto-editar">
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
                padding: "0",
                top: "-0.3vh",
                height: "3vh"
              }}  
        />
        </div>
        <div className="conteiner-botoes">
          
            <Button 
              className="cancel-button"
              dataTooltip="Cancelar"
              onClick={() => {navigate(-1)}}
            />
          
          {modoEdicao[1] == ["Editar valor da tabela"] || modoEdicao[1] == "Inserir Novo" && 
          <Button 
              className="delete-edit-button"
              dataTooltip="Apagar"
              onClick={() => {navigate(-1)}}
          />
        }
        {(modoEdicao[0] == ["Usuários"] && modoEdicao[1] == ["Editar valor da tabela"]) && 
          <Button 
              className="history-button"
              dataTooltip="Ver Histórico"
              onClick={() => {navigate(-1)}}
          />
        }
          <Button 
            className="save-button"
            dataTooltip="Salvar"
            onClick={() => {navigate(-1)}}
          />
        </div>
      </div>
      <div className="corpo-editar"
      >
      {modoEdicao[0] == "Tipos de Informação" && 
        <EdicaoInfo 
        />
      } 
      {modoEdicao[0] == "Usuários" && 
        <EdicaoUsuarios
        />
      } 
      {modoEdicao[0] == "Fornecedores" && 
        <EdicaoFornecedores
        />
      } 
      {modoEdicao[0] == "Gestão de Campos" && 
        <EdicaoCampos
        />
      } 
      {modoEdicao[0] == "Produtos com erro" && 
        <EdicaoErro
        />
      } 
      </div>
    </>
  )
}

export default JanelaEditar
