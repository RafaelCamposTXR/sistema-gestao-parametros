import {React, useState, useEffect} from 'react';
import {Link,useOutletContext} from 'react-router-dom';
import { Textbox } from '../../../components/input/text-box/Textbox';
import { Button } from '../../../components/input/botao/Button';
import SelectBox from '../../../components/input/select/Select';
import GestaoConteudo from '../../gestao-conteudo/GestaoConteudo';
import './Info.scss';

function Info() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  const [selectedOption, setSelectedOption] = useState("");

  const handleClear = () => {
    setSelectedOption(null); 
  };

  useEffect(() => {
    setSubSecao('Tipos de Informação');
    setModoEdicao(['Tipos de Informação','',''])
  }, [setSubSecao, setModoEdicao]);


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
        <div className="input-container-pai">
          <div className="input-container-info">
            <SelectBox
              value={selectedOption}
              options={Options}
              placeholder={"Tipo de Informação "}
            />
            <div className="button-container">
            <Button
              className="search-button" 
              dataTooltip="Pesquisar"
            />
            <Button 
              className="delete-button" 
              dataTooltip="Limpar Filtro"
              onClick={handleClear}
            />
            <Button
              className="settings-button" 
              dataTooltip="Mais Filtros"
              onClick={() => setModoEdicao(["Tipos de Informação", "Mais Filtros e Configurações", ""])}
              path="/gestaoparametros/edicao"
            />
            </div>
          </div>
        </div>
      </div>
      <GestaoConteudo view="info" />
    </>
  )
}

export default Info
