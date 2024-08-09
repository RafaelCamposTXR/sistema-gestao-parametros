import React from 'react';
import Tabela from '../../../components/tabela/Tabela';
import './GestaoConteudo.css';


function GestaoConteudo({ view, activeTab }) {

  const colunasCampos = React.useMemo(
    () => [
      {
        Header: 'Prioridade',
        accessor: 'id',
      },
      {
        Header: 'Serviço',
        accessor: 'servico',
      },
      {
        Header: 'Data de Desativação',
        accessor: 'data',
      },
    ],
    []
  );

  const colunasInfo = React.useMemo(
    () => [
      {
        Header: 'Código',
        accessor: 'cod',
      },
      {
        Header: 'Tipo de Informação',
        accessor: 'tipo',
      },
    ],
    []
  );

  const dataCampos = React.useMemo(
    () => [
      {
        id: 1,
        servico: 'teste',
        data: '28/05/24',
      },
      {
        id: 2,
        servico: 'teste',
        data: '03/04/23',
      },
      {
        id: 3,
        servico: 'teste',
        data: '28/05/24',
      },
      {
        id: 4,
        servico: 'teste',
        data: '03/04/23',
      },
      {
        id: 5,
        servico: 'teste',
        data: '28/05/24',
      },
      {
        id: 5,
        servico: 'teste',
        data: '28/05/24',
      },
      {
        id: 5,
        servico: 'teste',
        data: '28/05/24',
      },
      {
        id: 5,
        servico: 'teste',
        data: '28/05/24',
      },
      {
        id: 5,
        servico: 'teste',
        data: '28/05/24',
      },
      {
        id: 5,
        servico: 'teste',
        data: '28/05/24',
      },
      {
        id: 5,
        servico: 'teste',
        data: '28/05/24',
      },
      {
        id: 5,
        servico: 'teste',
        data: '28/05/24',
      },
      {
        id: 5,
        servico: 'teste',
        data: '28/05/24',
      },
      {
        id: 5,
        servico: 'teste',
        data: '28/05/24',
      },
      {
        id: 5,
        servico: 'teste',
        data: '28/05/24',
      },
      {
        id: 5,
        servico: 'teste',
        data: '28/05/24',
      },
    ],
    []
  );

  const dataInfo = React.useMemo(
    () => [
      {
        cod: 1,
        tipo: 'Imagem',
      },
      {
        cod: 2,
        tipo: 'Ficha Técnica',
      },
      {
        cod: 3,
        tipo: 'Conteúdo',
      },
      {
        cod: 4,
        tipo: 'Vídeo',
      },
      {
        cod: 5,
        tipo: 'Manual',
      },
      {
        cod: 6,
        tipo: 'Inmetro',
      },
      {
        cod: 7,
        tipo: 'Anatel',
      },
    ],
    []
  );

  const EditaTabela = () => {

  }


  return (
    <div className='gestao-conteudo'>
      {view === "gestao-campos" && (
    <>
      {activeTab === 0 && <Tabela columns={colunasCampos} data={dataCampos} />}
      {activeTab === 1 && <Tabela columns={colunasCampos} data={dataCampos} />}
      {activeTab === 2 && <Tabela columns={colunasCampos} data={dataCampos} />}
    </>
      )}
      {view === "info" && (
    <>
      <Tabela columns={colunasInfo} data={dataInfo} onclick={EditaTabela()}/>
    </>
      )}
    </div>
  )
  //renderiza apenas o componente da tab selecionada
}

export default GestaoConteudo
