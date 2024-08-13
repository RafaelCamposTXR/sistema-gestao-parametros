import React from "react";
import './Botao.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TuneIcon from '@mui/icons-material/TuneSharp';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAddSharp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosSharp';
import {Link} from 'react-router-dom';

export function Button({
  className,
  dataTooltip,
  onClick,
  children,
  path
}) {
  return <Link to={path}>
    <button className={className} data-tooltip={dataTooltip} onClick={onClick}> 
          <>
          {className === "add-button" && <PlaylistAddIcon sx={{fontSize: 22}}/>}
          {className === "delete-button" && <DeleteForeverIcon sx={{ fontSize: 18 }}/>}
          {className === "settings-button" && <TuneIcon sx={{ fontSize: 18 }}/>}
          {className === "back-button" && <ArrowBackIosIcon/>}
          {children}
          </>
          </button>
          </Link>;
}
  