import {React, useState, useEffect} from 'react';
import {Link,useOutletContext} from 'react-router-dom';
import { Filtro } from '../../../components/input/filtros/Filtro';
import { Button } from '../../../components/input/botao/Button';
import GestaoConteudo from '../gestao-conteudo/GestaoConteudo';

function Info() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  useEffect(() => {
    setSubSecao('Informações de Mercadoria e Obrigatoriedade');
  }, [setSubSecao]);

  const [input1Focused, setInput1Focused] = useState(false);
  const [input1Value, setInput1Value] = useState('');


  return (
    <>
      <div className="area-superior-info">
        <div className="filtros">
          <div className="input-container">
            <Filtro   
              inputFocused={input1Focused} 
              inputValue={input1Value} 
              label={"Tipo de Informação"} 
              setInputFocused={setInput1Focused} 
              setInputValue={setInput1Value}  
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
              onClick={() => setModoEdicao(["Info", "Mais Filtros e Configurações"])}
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
