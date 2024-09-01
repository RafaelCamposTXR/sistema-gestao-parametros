import React from 'react';
import Tabela from '../../components/tabela/Tabela';
import TabelaCheckbox from '../../components/tabela/TabelaCheckbox';
import './GestaoConteudo.scss';


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

  const colunasFornecedor = React.useMemo(
    () => [
      {
        Header: 'Diretoria',
        accessor: 'dir',
      },
      {
        Header: 'Fornecedor',
        accessor: 'fornecedor',
      },
      {
        Header: 'Nome do Contato',
        accessor: 'contato',
      },
      {
        Header: 'Cargo',
        accessor: 'cargo',
      },
      {
        Header: 'Site (Download de Conteúdo)',
        accessor: 'site',
      },
      {
        Header: 'Telefone',
        accessor: 'telefone',
      },
      {
        Header: 'Email',
        accessor: 'email',
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


  

  const dataFornecedor = React.useMemo(
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

  const colunasErro = React.useMemo(
    () => [
      {
        Header: 'Código Produto',
        accessor: 'cod-prod',
      },
      {
        Header: 'Código Loja',
        accessor: 'cod-loja',
      },
      {
        Header: 'Produto',
        accessor: 'prod',
      },
      {
        Header: 'Erro',
        accessor: 'erro',
      },
      {
        Header: 'Imagem',
        accessor: 'imagem',
      },
      {
        Header: 'Título',
        accessor: 'titulo',
      },
      {
        Header: 'Descrição',
        accessor: 'descricao',
      },
      {
        Header: 'Categoria',
        accessor: 'categoria',
      },
      {
        Header: 'Seller',
        accessor: 'seller',
      },
    ],
    []
  );

  const dataErro = React.useMemo(
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

  const colunasDemanda = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Código Martins',
        accessor: 'codigo-martins',
      },
      {
        Header: 'EAN',
        accessor: 'ean',
      },
      {
        Header: 'Título Cadastral',
        accessor: 'titulo-cadastral',
      },
      {
        Header: 'Serviço',
        accessor: 'servico',
      },
      {
        Header: 'Ação',
        accessor: 'acao',
      },
      {
        Header: 'Status da Ação',
        accessor: 'status-da-acao',
      },
      {
        Header: 'Atendente',
        accessor: 'atendente',
      },
      {
        Header: 'Data Atendimento',
        accessor: 'data-atendimento',
      },
      {
        Header: 'Data Conclusão',
        accessor: 'data-conclusao',
      },
      {
        Header: 'Autor',
        accessor: 'autor',
      },
      {
        Header: 'Data Solicitação',
        accessor: 'data-solicitacao',
      },
    ],
    []
  );
  

  const dataDemanda = React.useMemo(
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
      <Tabela columns={colunasInfo} data={dataInfo} />
    </>
      )}
      {view === "gestao-fornecedores" && (
        <>
          <Tabela columns={colunasFornecedor} data={dataFornecedor} />
        </>
      )}
      {view === "sistema-erro" && (
        <>
          <Tabela columns={colunasErro} data={dataErro} area="sistema"/>
        </>
      )}
      {view === "sistema-demanda" && (
        <>
          <TabelaCheckbox columns={colunasDemanda} data={dataDemanda} area="sistema"/>
        </>
      )}
    </div>
  )
  //renderiza apenas o componente da view e tab selecionada
}

export default GestaoConteudo
