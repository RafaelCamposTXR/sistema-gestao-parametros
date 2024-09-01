import React, {useState} from "react";
import './Button.scss';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TuneIcon from '@mui/icons-material/TuneSharp';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAddSharp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosSharp';
import {Link} from 'react-router-dom';
import SaveIcon from '@mui/icons-material/SaveSharp';
import CloseIcon from '@mui/icons-material/CloseSharp';
import SearchIcon from '@mui/icons-material/SearchSharp';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PersonIcon from '@mui/icons-material/Person';
import Modal from '../../modal/Modal';

export function Button({
  className,
  dataTooltip,
  onClick,
  children,
  path,
  contentModal
}) {

  //botões disponíveis: add, delete, delete-edit, settings, back, save, cancel, export, demand


  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);  
  const open = () => setModalOpen(true);

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);  // Chama o onClick genérico
    }
    open();  // Abre o modal
  }

  return <Link to={path} style={{ textDecoration: 'none' }}>
    <button className={className} data-tooltip={dataTooltip} onClick={handleClick}> 
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
        {className === "export-button" && 
          <FileDownloadIcon sx={{ fontSize: 13 }}/>
        }
        {className === "demand-button" && 
          <>
            <PersonIcon sx={{ fontSize: 13 }}/>
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} content={contentModal} />}
          </>
        }
        {children}
    </>
  </button>
          </Link>;
}
  