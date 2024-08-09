import {React, useState, useEffect} from 'react';
import {Link,useOutletContext} from 'react-router-dom';
import { Textbox } from '../../../components/input/text-box/Textbox';
import { Button } from '../../../components/input/botao/Button';
import SelectBox from '../../../components/input/select/Select';
import GestaoConteudo from '../gestao-conteudo/GestaoConteudo';
import './Info.css';

function Info() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  useEffect(() => {
    setSubSecao('Informações de Mercadoria e Obrigatoriedade');
  }, [setSubSecao]);

  const [input1Focused, setInput1Focused] = useState(false);
  const [input1Value, setInput1Value] = useState('');   

  const Options = [
    {value: "imagem", label: "Imagem"},
    {value: "imagem", label: "Imagem"},
    {value: "imagem", label: "Imagem"},
    {value: "imagem", label: "Imagem"},
    {value: "imagem", label: "Imagem"},
  ];

  return (
    <>
      <div className="area-superior-info">
        <div className="filtros">
          <div className="input-container">
            <SelectBox
              options={Options}
              placeholder={"Tipo de Informação "}
            />
            <Button 
              className="search-button" 
              dataTooltip="Pesquisar">
              Pesquisar
            </Button>
            <Button 
              className="delete-button" 
              dataTooltip="Limpar Filtro">
            </Button>
            <Link to="/gestaoparametros/edicao">
            <Button
              className="settings-button" 
              dataTooltip="Mais Filtros"
              onClick={() => setModoEdicao(["Info", "Mais Filtros e Configurações", ""])}
            >
            </Button>
          </Link>
          </div>
        </div>
      </div>
      <GestaoConteudo view="info" />
    </>
  )
}

export default Info
