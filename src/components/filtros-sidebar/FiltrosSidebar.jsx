import { ModalInput } from '../modal/ModalInput';
import React from 'react';
import './FiltrosSidebar.scss';
import Backdrop from '../modal/backdrop/Backdrop';
import {motion} from 'framer-motion';
import Titulo from '../titulos/titulo/Titulo';
import SaveIcon from '@mui/icons-material/SaveSharp';
import CloseIcon from '@mui/icons-material/CloseSharp';
import {Button} from '../input/botao/Button';
import {Textbox} from '../input/text-box/Textbox';
import SelectBox from '../input/select/Select';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircleSharp';
import AutorenewIcon from '@mui/icons-material/AutorenewSharp';
import TuneIcon from '@mui/icons-material/Tune';

const dropIn = {
  hidden: {
    y:"-100vh",
    opacity: 0
  },
  visible: {
    y:"0",
    opacity: 1,
    transition:{
      duration: 0.15,
      type:"easeinout",
    }
    
  },
  exit: {
    y: "100vh",
  },
};


const FiltrosSidebar = ({handleClose, title, content}) => {
  return (
    <Backdrop onClick={(handleClose)}>
      <motion.div onClick={(e) => e.stopPropagation()} 
        className="modal-filtros" 
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <>
          <div className="area-superior-modal">
            <div className="area-titulo-modal-filtros">
              <Button className="back-button"  onClick={handleClose} style={{position: "relative", top: "0vh"}} color="white"/>
              <TuneIcon sx={{fontSize: "24px", color: "white"}}/>
              <p style={{color: "white"}}>
                Filtros
              </p>
            </div>
          </div>
          <div className="corpo-modal-filtros">
            <div style={{width: "10vw", display: "flex", flexDirection: "column", gap: "5vh"}}>
              <Textbox/>
              <Textbox/>
              <Textbox/>
              <Textbox/>
            </div>
            
            
          </div>
        </>
      </motion.div>
      </Backdrop>
  )
}

export default FiltrosSidebar
