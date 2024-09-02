import {React, useState, useEffect} from 'react';
import {Link,useOutletContext} from 'react-router-dom';
import { Textbox } from '../../../components/input/text-box/Textbox';
import { Button } from '../../../components/input/botao/Button';
import SelectBox from '../../../components/input/select/Select';
import GestaoConteudo from '../../gestao-conteudo/GestaoConteudo';
import './Info.scss';
import Filtros from '../../../components/input/filtros/Filtros'

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

  const ListaFiltros = [
    { 
      tipo: 'selectbox',
      options: ["teste","teste1"],
      placeholder: 'Tipo de Informação',
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
      onClick: () => {},

    },
    {
      tipo: 'button',
      className: 'settings-button',
      dataTooltip: 'mais Filtros',
      onClick: () => {},

    },
    {
      tipo: 'extra-button',
      className: 'demand-button',
      dataTooltip: 'Exportar Tabelas',
      onClick: () => {},

    },
    {
      tipo: 'extra-button',
      className: 'export-button',
      dataTooltip: 'Exportar Tabelas',
      onClick: () => {},

    },
  ]

  return (
    <>
      <div className="area-superior-info">
        <Filtros ListaComponentes={ListaFiltros}/>
      </div>
      <GestaoConteudo view="info"/>
    </>
  )
}

export default Info
