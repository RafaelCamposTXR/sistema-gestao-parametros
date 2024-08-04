import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Início',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Gestão de Campos',
    path: '/gestaoparametros/gestaocampos',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Gestão de Fornecedores',
    path: '/gestaoparametros/gestaofornecedores',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Gestão de Usuários',
    path: '/gestaoparametros/gestaousuarios',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Info',
    path: '/gestaoparametros/info',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
];