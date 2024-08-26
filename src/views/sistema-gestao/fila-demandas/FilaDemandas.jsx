import React, {useEffect} from 'react'
import { useOutletContext } from 'react-router-dom';
import GestaoConteudo from '../../gestao-conteudo/GestaoConteudo';
import './FilaDemandas.scss';

function FilaDemandas() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  useEffect(() => {
    setSubSecao('Fila de Demandas');
    setModoEdicao(["Fila de Demandas",'','']);
  }, [setSubSecao, setModoEdicao]);

  return (
    <div>
      
    </div>
  )
}

export default FilaDemandas
