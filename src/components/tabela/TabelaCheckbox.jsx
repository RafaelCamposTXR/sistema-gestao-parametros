import React, { useMemo, useState } from 'react';
import { useTable, useRowSelect } from 'react-table';
import { useNavigate } from 'react-router-dom';

function TabelaSistema({ columns, data }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns,  
      data,     
      initialState: { selectedRowIds: {} },
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <input type="checkbox" {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ]);
    }
  );

  // Verificação de selectedFlatRows antes de usar
  React.useEffect(() => {
    if (selectedFlatRows) {
      setSelectedRows(selectedFlatRows.map((row) => row.original));
    }
  }, [selectedFlatRows]);

  const handleNavigate = () => {
    navigate('/outra-rota', { state: { selectedRows } });
  };

  return (
    <div className="table-container-sistema">
      <table {...getTableProps()} className="tabela-sistema">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={handleNavigate}>Ver Linhas Selecionadas</button>
    </div>
  );
}

export default TabelaSistema;
