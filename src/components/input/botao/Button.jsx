import React from "react";
import './Botao.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TuneIcon from '@mui/icons-material/TuneSharp';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAddSharp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosSharp';
import {Link} from 'react-router-dom';
import SaveIcon from '@mui/icons-material/SaveSharp';

export function Button({
  className,
  dataTooltip,
  onClick,
  children,
  path
}) {

  //botões disponíveis: add, delete, settings, back, save

  return <Link to={path}>
    <button className={className} data-tooltip={dataTooltip} onClick={onClick}> 
      <>
        {className === "add-button" && 
        <>
        <PlaylistAddIcon sx={{fontSize: 18}}/>
        Novo
        </>}
        {className === "delete-button" && 
        <DeleteForeverIcon sx={{ fontSize: 18 }}/>}
        {className === "delete-edit-button" && 
        <DeleteForeverIcon sx={{ fontSize: 19 }}/>}
        {className === "settings-button" && <TuneIcon sx={{ fontSize: 18 }}/>}
        {className === "back-button" && <ArrowBackIosIcon/>}
        {className === "save-button" && <SaveIcon sx={{ fontSize: 19 }}/>}
          {children}
    </>
  </button>
          </Link>;
}
  