import React from "react";
import './Botao.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TuneIcon from '@mui/icons-material/TuneSharp';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAddSharp';

export function Button({
  className,
  dataTooltip,
  onClick,
  children
}) {
  return <button className={className} data-tooltip={dataTooltip} onClick={onClick}> 
          <>
          {className === "add-button" && <PlaylistAddIcon sx={{fontSize: 22}}/>}
          {className === "delete-button" && <DeleteForeverIcon sx={{ fontSize: 18 }}/>}
          {className === "settings-button" && <TuneIcon sx={{ fontSize: 18 }}/>}
          {children}
          </>
          </button>;
}
  