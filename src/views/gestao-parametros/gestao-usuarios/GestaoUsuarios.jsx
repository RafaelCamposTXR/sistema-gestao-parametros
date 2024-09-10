import {React, useEffect, useMemo} from 'react'
import {useOutletContext} from 'react-router-dom';
import Filtros from '../../../components/input/filtros/Filtros'
import './GestaoUsuarios.scss';
import GestaoConteudo from '../../gestao-conteudo/GestaoConteudo';

function GestaoUsuarios() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  useEffect(() => {
    setSubSecao('Usuários');
    setModoEdicao(['Usuários','',''])
  }, [setSubSecao,setModoEdicao]);


  const ListaFiltros = [
    { 
      tipo: 'selectbox',
      options: ["teste","teste1"],
      placeholder: 'Usuário',
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
      tipo: 'extra-button',
      className: 'export-button',
      dataTooltip: 'Exportar Tabelas',
      onClick: () => {},

    },
  ]


  return (
    <>
      <div className="area-superior-usuarios">
        <Filtros ListaComponentes={ListaFiltros}/>
      </div>
      <GestaoConteudo view="usuarios"/>
    </>
  )
}

export default GestaoUsuarios
