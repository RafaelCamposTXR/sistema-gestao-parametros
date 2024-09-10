import React from 'react';
import Tabela from '../../components/tabela/Tabela';
import TabelaCheckbox from '../../components/tabela/TabelaCheckbox';
import './GestaoConteudo.scss';


function GestaoConteudo({ view, activeTab }) {

  const colunasCamposServico = React.useMemo(
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

  const colunasCamposAcao = React.useMemo(
    () => [
      {
        Header: 'Ação',
        accessor: 'acao',
      },
      {
        Header: 'Data de Desativação',
        accessor: 'data',
      },
    ],
    []
  );

  const colunasCamposStatus = React.useMemo(
    () => [
      {
        Header: 'Status da Ação',
        accessor: 'status',
      },
      {
        Header: 'Rótulo',
        accessor: 'rotulo',
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
        accessor: 'id0',
      },
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

  const colunasUsuarios = React.useMemo(
    () => [
      {
        Header: 'Código do Perfil',
        accessor: 'cod',
      },
      {
        Header: 'Perfil',
        accessor: 'perfil',
      },
      {
        Header: 'Permissões',
        accessor: 'permissoes',
      },
    ],
    []
  );
  

  const dataUsuarios = React.useMemo(
    () => [
      {
        cod: 1,
        perfil: 'Administrador',
        permissoes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis felis. Duis sit amet dolor justo. In id tortor vel lacus sodales suscipit a nec libero. Phasellus nec lacinia lacus. Curabitur ultrices purus et lectus lacinia, a egestas nisi varius. Maecenas egestas hendrerit arcu, nec laoreet felis sagittis at. Proin mollis, metus nec dapibus faucibus, ligula eros pharetra risus, eget malesuada eros ligula eget sapien.'
      },
      {
        cod: 2,
        perfil: 'Editor',
        permissoes: 'Suspendisse potenti. Quisque ultricies magna id odio laoreet, at tristique odio malesuada. Fusce ac velit risus. Praesent aliquam convallis turpis, in volutpat risus tristique nec. Nam dapibus eros non ante blandit interdum.'
      },
      {
        cod: 3,
        perfil: 'Visitante',
        permissoes: 'at tristique odio'
      },
    ],
    []
  );



  return (
    <div className='gestao-conteudo'>
      {view === "gestao-campos" && (
    <>
      {activeTab === 0 && <Tabela columns={colunasCamposServico} data={dataCampos} />}
      {activeTab === 1 && <Tabela columns={colunasCamposAcao} data={dataCampos} />}
      {activeTab === 2 && <Tabela columns={colunasCamposStatus} data={dataCampos} />}
    </>
      )}
      {view === "usuarios" && (
    <>
      <Tabela columns={colunasUsuarios} data={dataUsuarios} />
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
  //renderiza apenas o componente da page e tab selecionada
}

export default GestaoConteudo
