import React, {useEffect} from 'react'
import { useOutletContext } from 'react-router-dom';
import GestaoConteudo from '../../gestao-conteudo/GestaoConteudo';

function ValidacaoConteudo() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  useEffect(() => {
    setSubSecao('Validação de Conteúdo');
    setModoEdicao(["Validação de Conteúdo",'','']);
  }, [setSubSecao, setModoEdicao]);


  return (
    <div>
      
    </div>
  )
}

export default ValidacaoConteudo

