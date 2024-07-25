import React from 'react';
import Tabela from '../tabela/Tabela';


function GestaoServico({ activeTab }) {

  const columns = React.useMemo(
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

  const data = React.useMemo(
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

  return (
    <div className='gestao-servico'>
      {activeTab === 0 && <Tabela columns={columns} data={data} />}
      
      {activeTab === 2 && <Tabela columns={columns} data={data} />}
    </div>
  )
  //renderiza apenas o componente da tab selecionada
}

export default GestaoServico
