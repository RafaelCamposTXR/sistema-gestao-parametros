import {React, useEffect, useMemo} from 'react'
import {useOutletContext} from 'react-router-dom';
import TabelaCheckbox from '../../../components/tabela/TabelaCheckbox'

function GestaoUsuarios() {

  const [subSecao, setSubSecao] = useOutletContext();

  useEffect(() => {
    setSubSecao('Usuários');
  }, [setSubSecao]);

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Nome',
        accessor: 'nome',
      },
      {
        Header: 'Idade',
        accessor: 'idade',
      },
    ],
    []
  );
  
  const data = useMemo(
    () => [
      { id: 1, nome: 'Alice', idade: 25 },
      { id: 2, nome: 'Bob', idade: 30 },
      { id: 3, nome: 'Charlie', idade: 35 },
      { id: 4, nome: 'Diana', idade: 28 },
    ],
    []
  );

  return (
    <div>
      <TabelaCheckbox columns={columns} data={data}/>
    </div>
  )
}

export default GestaoUsuarios
