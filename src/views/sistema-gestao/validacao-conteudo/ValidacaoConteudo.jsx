import React, {useEffect, useState} from 'react'
import { useOutletContext } from 'react-router-dom';
import GestaoConteudo from '../../gestao-conteudo/GestaoConteudo';
import Filtros from '../../../components/input/filtros/Filtros';
import { useSidebar } from '../../../context/SidebarContext';
import './ValidacaoConteudo.scss';

function ValidacaoConteudo() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  const { setIsSidebarOpen, setSidebarContent } = useSidebar();

  useEffect(() => {
    setSubSecao('Validação de Conteúdo');
    setModoEdicao(["Validação de Conteúdo",'','']);
  }, [setSubSecao, setModoEdicao]);

  const [input0Focused, setInput0Focused] = useState(false);
  const [input0Value, setInput0Value] = useState('');
  const [input1Focused, setInput1Focused] = useState(false);
  const [input1Value, setInput1Value] = useState('');
  const [input2Focused, setInput2Focused] = useState(false);
  const [input2Value, setInput2Value] = useState('');

  const LimpaCampos = () => {
    setInput0Value("");
    setInput1Value("");
    setInput2Value("");
  }

  const ListaFiltros = [
    { 
      tipo: 'textbox',
      label: 'Código Mercadoria',
      tamanho: '',
      tipoInput: "numero",
      inputFocused: input0Focused,
      setInputFocused: setInput0Focused,
      inputValue: input0Value,
      setInputValue: setInput0Value,

    },
    
    { 
      tipo: 'selectbox',
      placeholder: 'Status Movimento',
      tamanho: '',
      inputFocused: input1Focused,
      setInputFocused: setInput1Focused,
      inputValue: input1Value,
      setInputValue: setInput1Value,

    },
    { 
      tipo: 'textbox',
      label: 'Data Geração',
      tipoInput: "texto",
      tamanho: '',
      inputFocused: input2Focused,
      setInputFocused: setInput2Focused,
      inputValue: input2Value,
      setInputValue: setInput2Value,

    },
    { 
      tipo: 'textbox',
      label: 'Data Validação',
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
    },
    {
      tipo: 'button',
      className: 'settings-button',
      dataTooltip: 'Mais Filtros',
      onClick: () => {setIsSidebarOpen(true)},
    },
    {
      tipo: 'extra-button',
      className: 'export-button',
      dataTooltip: 'Exportar Tabelas',
      onClick: () => {LimpaCampos()},

    },
  ]

  return (
    <div>
      <div className="area-superior-validacao">
        <Filtros 
          ListaComponentes={ListaFiltros}
          tamanho="total"
        />
      </div>
      <GestaoConteudo view="sistema-validacao"/>
    </div>
  )
}

export default ValidacaoConteudo





