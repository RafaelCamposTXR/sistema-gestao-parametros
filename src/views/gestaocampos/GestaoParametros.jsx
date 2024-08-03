import { GestaoCampos } from './gestaoCampos/GestaoCampos';
import {React,useState} from 'react';
import GestaoServico from '../../components/gestaoservico/GestaoServico';
import './GestaoParametros.css';
import Filtros from './Filtros';
import Titulo from '../../components/titulo/Titulo';
import TituloSecao from '../../components/tituloSecao/TituloSecao';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairServiceSharp';
import PendingActionsIcon from '@mui/icons-material/PendingActionsSharp';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheckSharp';


function GestaoParametros() {  


  return (
    <div className="conteiner-gestao">
      <TituloSecao nomeSecao="Gestão de Parâmetros " nomeSubSecao= "Campos" />
      <div className="gestao">
        <GestaoCampos   />
      </div>
      
    </div>
  )
}

export default GestaoParametros
