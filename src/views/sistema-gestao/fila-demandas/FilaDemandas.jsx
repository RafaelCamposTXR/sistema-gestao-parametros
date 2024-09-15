import React, {useEffect, useState} from 'react'
import { useOutletContext } from 'react-router-dom';
import GestaoConteudo from '../../gestao-conteudo/GestaoConteudo';
import Filtros from '../../../components/input/filtros/Filtros';
import { useSidebar } from '../../../context/SidebarContext';
import './FilaDemandas.scss';

function FilaDemandas() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  const { setIsSidebarOpen, setSidebarContent } = useSidebar();

  useEffect(() => {
    setSubSecao('Fila de Demandas');
    setModoEdicao(["Fila de Demandas",'','']);
    setSidebarContent(inputList)
  }, [setSubSecao, setModoEdicao]);

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);  
  const open = () => setModalOpen(true);

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


  const inputList = [
    {
      label: 'Código Cliente',
      labelTextbox: 'Insira um código de cliente',
      tamanho: '20vw',
      tipoInput: 'text',
      inputFocused: "",
      setInputFocused: "",
      inputValue: "",
      setInputValue: "",
    },
    {
      label: 'Código Produto',
      labelTextbox: 'Insira um código de produto',
      tamanho: '20vw',
      tipoInput: 'text',
      inputFocused: "",
      setInputFocused: "",
      inputValue: "",
      setInputValue: "",
    },
    {
      label: 'Descrição Produto',
      labelTextbox: 'Insira uma descrição',
      tamanho: '20vw',
      tipoInput: 'text',
      inputFocused: "",
      setInputFocused: "",
      inputValue: "",
      setInputValue: "",
    },
    {
      label: 'Soliticação',
      labelTextbox: 'Insira uma solicitação',
      tamanho: '20vw',
      tipoInput: 'text',
      inputFocused: "",
      setInputFocused: "",
      inputValue: "",
      setInputValue: "",
    },
    {
      label: 'Atendimento',
      labelTextbox: 'Insira um atendimento',
      tamanho: '10vw',
      tipoInput: 'number',
      inputFocused: "",
      setInputFocused: "",
      inputValue: "",
      setInputValue: "",
    },
    {
      label: 'Conclusão',
      labelTextbox: 'Insira uma conclusão',
      tamanho: '10vw',
      tipoInput: 'number',
      inputFocused: "",
      setInputFocused: "",
      inputValue: "",
      setInputValue: "",
    },
    {
      label: 'Autor',
      labelTextbox: 'Insira um autor',
      tamanho: '10vw',
      tipoInput: 'number',
      inputFocused: "",
      setInputFocused: "",
      inputValue: "",
      setInputValue: "",
    },
    {
      label: 'Atendente',
      labelTextbox: 'Insira um atendente',
      tamanho: '10vw',
      tipoInput: 'number',
      inputFocused: "",
      setInputFocused: "",
      inputValue: "",
      setInputValue: "",
    },
    {
      label: 'Estoque',
      labelTextbox: 'Insira um estoque',
      tamanho: '10vw',
      tipoInput: 'number',
      inputFocused: "",
      setInputFocused: "",
      inputValue: "",
      setInputValue: "",
    },
    {
      label: 'Diretoria',
      labelTextbox: 'Insira uma diretoria',
      tamanho: '10vw',
      tipoInput: 'number',
      inputFocused: "",
      setInputFocused: "",
      inputValue: "",
      setInputValue: "",
    },
    {
      label: 'Tipo de Demanda',
      labelTextbox: 'Insira um tipo de demanda',
      tamanho: '11vw',
      tipoInput: 'number',
      inputFocused: "",
      setInputFocused: "",
      inputValue: "",
      setInputValue: "",
    },
    {
      label: 'Conclusão',
      labelTextbox: 'Insira uma conclusão',
      tamanho: '10vw',
      tipoInput: 'number',
      inputFocused: "",
      setInputFocused: "",
      inputValue: "",
      setInputValue: "",
    },
  ];


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
      tipoInput: "texto",
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
    },
    {
      tipo: 'button',
      className: 'settings-button',
      dataTooltip: 'Mais Filtros',
      onClick: () => {setIsSidebarOpen(true)},
    },
    {
      tipo: 'extra-button',
      className: 'demand-button',
      dataTooltip: 'Exportar Tabelas',
      modalTitle: ["Fila de Demandas","Definição de Atendente"],
      contentModal: "teste \n teste \n teste",
      onClick: () => {LimpaCampos()},
      
    },
    {
      tipo: 'extra-button',
      className: 'export-button',
      dataTooltip: 'Exportar Tabelas',
      onClick: () => {LimpaCampos()},

    },
  ]

  return (
    <>
      <div className="area-superior-demanda">
        <Filtros 
          ListaComponentes={ListaFiltros}
          tamanho="total"
        />
      </div>
      <GestaoConteudo view="sistema-demanda"/>
    </>
  )
}

export default FilaDemandas
