import {React, useEffect} from 'react'
import {useOutletContext} from 'react-router-dom';

function GestaoUsuarios() {

  const [subSecao, setSubSecao] = useOutletContext();

  useEffect(() => {
    setSubSecao('Usuários');
  }, [setSubSecao]);



  return (
    <div>
      
    </div>
  )
}

export default GestaoUsuarios
