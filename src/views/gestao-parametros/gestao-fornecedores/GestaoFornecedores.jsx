import {React, useEffect} from 'react'
import {useOutletContext} from 'react-router-dom';

function GestaoFornecedores() {

  const [subSecao, setSubSecao] = useOutletContext();

  useEffect(() => {
    setSubSecao('Fornecedores');
  }, [setSubSecao]);


  return (
    <div>
      
    </div>
  )
}

export default GestaoFornecedores



