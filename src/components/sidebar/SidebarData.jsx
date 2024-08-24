import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutlineSharp';
import InfoIcon from '@mui/icons-material/InfoSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartSharp';
import FeedIcon from '@mui/icons-material/FeedSharp';
import PeopleAltIcon from '@mui/icons-material/PeopleAltSharp';

export const SidebarData = [
  {
    title: 'Produtos com Erro',
    path: '/sistemagestao/produtoserro',
    icon: <ErrorOutlineIcon sx={{fontSize:"16px"}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Gestão de Campos',
    path: '/gestaoparametros/gestaocampos',
    // icon: <IoIcons.IoIosPaper />,
    icon: <FeedIcon sx={{fontSize: "16px"}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Gestão de Fornecedores',
    path: '/gestaoparametros/gestaofornecedores',
    // icon: <FaIcons.FaCartPlus />,
    icon: <ShoppingCartIcon sx={{fontSize:"16px"}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Gestão de Usuários',
    path: '/gestaoparametros/gestaousuarios',
    // icon: <IoIcons.IoMdPeople />,
    icon: <PeopleAltIcon sx={{fontSize:"16px"}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Tipos de Informação',
    path: '/gestaoparametros/info',
    icon: <InfoIcon sx={{fontSize:"16px"}}/>,
    cName: 'nav-text'
  },
];