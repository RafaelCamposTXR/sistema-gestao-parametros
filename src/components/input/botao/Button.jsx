import React from "react";
import './Botao.scss';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TuneIcon from '@mui/icons-material/TuneSharp';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAddSharp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosSharp';
import {Link} from 'react-router-dom';
import SaveIcon from '@mui/icons-material/SaveSharp';
import CloseIcon from '@mui/icons-material/CloseSharp';
import SearchIcon from '@mui/icons-material/SearchSharp';

export function Button({
  className,
  dataTooltip,
  onClick,
  children,
  path
}) {

  //botões disponíveis: add, delete, delete-edit, settings, back, save, cancel

  return <Link to={path} style={{ textDecoration: 'none' }}>
    <button className={className} data-tooltip={dataTooltip} onClick={onClick}> 
      <>
        {className === "search-button" && 
          <>
            <SearchIcon sx={{fontSize: 18}}/>
            <span style ={{margin: 0, paddingTop: "0.06vh"}}>
            Pesquisar
            </span>
          </>
        }
        {className === "add-button" && 
          <>
            <PlaylistAddIcon sx={{fontSize: 18}}/>
            <span style ={{margin: 0, paddingTop: "0.06vh"}}>
            Novo
            </span>
          </>
        }
        {className === "delete-button" && 
          <DeleteForeverIcon sx={{ fontSize: 18 }}/>}
        {className === "delete-edit-button" && 
          <DeleteForeverIcon sx={{ fontSize: 18 }}/>}
        {className === "settings-button" && 
          <TuneIcon sx={{ fontSize: 18 }}/>}
        {className === "back-button" && 
          <ArrowBackIosIcon/>}
        {className === "cancel-button" && 
          <CloseIcon sx={{ fontSize: 16 }}/>}
        {className === "save-button" && 
          <SaveIcon sx={{ fontSize: 16 }}/>}
        {children}
    </>
  </button>
          </Link>;
}
  