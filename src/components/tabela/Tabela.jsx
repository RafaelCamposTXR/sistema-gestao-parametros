import {React, useState, useEffect} from 'react';
import { useTable, usePagination } from 'react-table';
import SwapVertIcon from '@mui/icons-material/SwapVertSharp';
import './Tabela.scss'; 
import { useOutletContext, useNavigate } from 'react-router-dom';


function Tabela({ columns, data, area }) {

  const [pageSize, setPageSize] = useState(10);

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, 
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize: setTablePageSize,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize },
    },
    usePagination
  );

  useEffect(() => {
    setTablePageSize(pageSize);
  }, [pageSize, setTablePageSize]);

  const handlePageSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setPageSize(newSize);
    setTablePageSize(newSize);
  };

  const navigate = useNavigate();

  const setEdicao = (row) => {
    // alert(row.original.data); 
    // console.log(JSON.stringify(row.original, null, 2))
    const tipo = row.original.tipo;
    setModoEdicao([modoEdicao[0], "Editar valor da tabela", tipo]); 
  };
  
  const onClick = (row) => {
    setEdicao(row);
    navigate(`/gestaoparametros/edicao`);
  };

  

  return (
    <>
    <div div className={area == "sistema" ? "table-container-sistema" : "table-container"}>
      <table {...getTableProps()} className={area == "sistema" ? "tabela-sistema" : "tabela"}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}
                  onClick= {() => onClick(row)} >
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}
                  </td>
                ))}
              </tr>
              
            );
          })}
        </tbody>
      </table>
      </div>
      <div className="pagination">
      <div className="page-size">
          <label>
            Registros por página:
            <select value={pageSize} onChange={handlePageSizeChange}>
              {[30, 40, 50, 60, 70].map(size => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
          <SwapVertIcon sx={{ fontSize: 16 }} className="icone-tabela"/>
        </div>
        <div className="pagination-page-slider"> 
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <span className='indice'>
          {' '}
          <strong >
            {pageIndex + 1} de {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
        </div>
        <div className="page-info">
          <span>
            Mostrando {page.length} de {data.length} registros
          </span>
        </div>
      </div>
    </>
  );
}

export default Tabela;
