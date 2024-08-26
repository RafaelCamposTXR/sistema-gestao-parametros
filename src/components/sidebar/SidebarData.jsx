import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutlineSharp';
import InfoIcon from '@mui/icons-material/InfoSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartSharp';
import FeedIcon from '@mui/icons-material/FeedSharp';
import PeopleAltIcon from '@mui/icons-material/PeopleAltSharp';
import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import TuneIcon from '@mui/icons-material/Tune';
import ChecklistIcon from '@mui/icons-material/ChecklistSharp';
import RuleIcon from '@mui/icons-material/RuleSharp';
import AddTaskIcon from '@mui/icons-material/AddTaskSharp';

export const SidebarData = [
  {
    title: 'DashBoard',
    path: '/gestaoparametros/info',
    icon: <HomeIcon sx={{fontSize:"16px", color: "white"}}/>,
    cName: 'nav-text',
  },
  {
    title: 'Sistema de Gestão',
    path: '/gestaoparametros/info',
    icon: <LayersIcon sx={{fontSize:"16px", color: "white"}}/>,
    cName: 'nav-text',
    subMenu: [
      {
        title: 'Fila de Demandas',
        path: '/sistemagestao/filademandas',
        icon: <AddTaskIcon sx={{fontSize:"16px"}}/>,
        cName: 'nav-text'
      },
      {
        title: 'Validação de Conteúdo',
        path: '/sistemagestao/validacaoconteudo',
        icon: <RuleIcon sx={{fontSize:"16px"}}/>,
        cName: 'nav-text'
      },
      {
        title: 'Produtos com Erro',
        path: '/sistemagestao/produtoserro',
        icon: <ErrorOutlineIcon sx={{fontSize:"16px"}}/>,
        cName: 'nav-text'
      },
      
    ]
  },
  {
    title: 'Gestão de Parâmetros',
    path: '/sistemagestao/produtoserro',
    icon: <TuneIcon sx={{fontSize:"16px", color: "white"}}/>,
    cName: 'nav-text',
    subMenu: [

      {
        title: 'Gestão de Campos',
        path: '/gestaoparametros/gestaocampos',
        icon: <FeedIcon sx={{fontSize: "16px"}}/>,
        cName: 'nav-text'
      },
      {
        title: 'Gestão de Fornecedores',
        path: '/gestaoparametros/gestaofornecedores',
        icon: <ShoppingCartIcon sx={{fontSize:"16px"}}/>,
        cName: 'nav-text'
      },
      {
        title: 'Gestão de Usuários',
        path: '/gestaoparametros/gestaousuarios',
        icon: <PeopleAltIcon sx={{fontSize:"16px"}}/>,
        cName: 'nav-text'
      },
      {
        title: 'Tipos de Informação',
        path: '/gestaoparametros/info',
        icon: <InfoIcon sx={{fontSize:"16px"}}/>,
        cName: 'nav-text',
      }
    ]
  },

  
];