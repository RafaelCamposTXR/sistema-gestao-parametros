import { GestaoCampos } from './gestaoCampos/GestaoCampos';
import {React} from 'react';
import './GestaoParametros.css';
import TituloSecao from '../../components/tituloSecao/TituloSecao';

function GestaoParametros() {  
  return (
    <div className="conteiner-gestao">
      <TituloSecao nomeSecao="Gestão de Parâmetros" nomeSubSecao= "Campos" />
      <div className="gestao">
        <GestaoCampos />
      </div>
      
    </div>
  )
}

export default GestaoParametros
