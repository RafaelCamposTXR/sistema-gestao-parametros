import React, {useState, useEffect} from 'react';
import './ProdutosErro.scss';
import Filtros from '../../../components/input/Filtros';
import { useOutletContext } from 'react-router-dom';
import GestaoConteudo from '../../gestao-parametros/gestao-conteudo/GestaoConteudo';

function ProdutosErro() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  useEffect(() => {
    setSubSecao('Produtos com Erro');
    setModoEdicao(["Produtos com erro",'','']);
  }, [setSubSecao, setModoEdicao]);

  const LimpaCampos = () => {
    setInput0Value("");
    setInput1Value("");
    setInput2Value("");
  }

  const [input0Focused, setInput0Focused] = useState(false);
  const [input0Value, setInput0Value] = useState('');
  const [input1Focused, setInput1Focused] = useState(false);
  const [input1Value, setInput1Value] = useState('');
  const [input2Focused, setInput2Focused] = useState(false);
  const [input2Value, setInput2Value] = useState('');

  const ListaFiltros = [
    { 
      tipo: 'textbox',
      label: 'Código Cliente',
      tamanho: '',
      tipoInput: "numero",
      inputFocused: input0Focused,
      setInputFocused: setInput0Focused,
      inputValue: input0Value,
      setInputValue: setInput0Value,

    },
    
    { 
      tipo: 'textbox',
      label: 'Código Produto',
      tamanho: '',
      tipoInput: "numero",
      inputFocused: input1Focused,
      setInputFocused: setInput1Focused,
      inputValue: input1Value,
      setInputValue: setInput1Value,

    },
    { 
      tipo: 'textbox',
      label: 'Descrição Produto',
      tamanho: '',
      inputFocused: input2Focused,
      setInputFocused: setInput2Focused,
      inputValue: input2Value,
      setInputValue: setInput2Value,

    },
    { 
      tipo: 'selectbox',
      options: ["teste","teste1"],
      placeholder: 'Origem',
      tamanho: '',
    },
    {
      tipo: 'button',
      className: 'search-button',
      dataTooltip: '',
      onClick: () => {},
      path: '/gestaoparametros/gestaocampos',
    },
    {
      tipo: 'button',
      className: 'delete-button',
      dataTooltip: 'Limpar Filtros',
      onClick: () => {LimpaCampos()},

    }
  ]


  return (
    <>
      <div className="area-superior-produtos-erro">
        <Filtros ListaComponentes={ListaFiltros}/>
      </div>
      <GestaoConteudo view="sistema-erro"/>

    </>
  )
}

export default ProdutosErro
