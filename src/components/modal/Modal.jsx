import { ModalInput } from './ModalInput';
import React from 'react';
import './Modal.scss';
import Backdrop from './backdrop/Backdrop';
import {motion} from 'framer-motion';
import Titulo from '../titulos/titulo/Titulo';
import SaveIcon from '@mui/icons-material/SaveSharp';
import CloseIcon from '@mui/icons-material/CloseSharp';
import {Button} from '../input/botao/Button';
import {Textbox} from '../input/text-box/Textbox';

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

const Modal = ({handleClose}) => {
  return (
    <Backdrop onClick={handleClose}> 
    <motion.div onClick={(e) => e.stopPropagation()} className="modal" 
    variants={dropIn}
    initial="hidden"
    animate="visible"
    exit="exit">
      <>
      <div className="area-superior-modal">
      <Titulo 
      nomeSecao="Sistema de Gestão" 
      nomeSubSecao= "Fila de Demandas"
      style={{position: "relative",
              display: "inline",
              margin: "0.8vh 0 0 0.3vw",
              height: "5vh"}}/>
      <div className="area-botoes">
        <Button className="cancel-button" dataTooltip="Cancelar"  onClick={handleClose}/>
        <Button className="save-button" dataTooltip="Salvar" onClick={handleClose}/>
      </div>
      </div>
      <div className="corpo-modal">
      <Textbox
                  label = "Outro Filtro"
                  tamanho = ""
                  tipoInput = "numero"
                />
      <Textbox
                  label = "Outro Filtro"
                  tamanho = ""
                  tipoInput = "texto"
                />
      <Textbox
                  label = "Outro Filtro"
                  tamanho = ""
                  tipoInput = "texto"
                />
      </div>
      </>
    </motion.div>
    </Backdrop>
  )
}

export default Modal
