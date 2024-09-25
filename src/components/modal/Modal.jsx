import React from 'react';
import './Modal.scss';
import Backdrop from './backdrop/Backdrop';
import {motion} from 'framer-motion';
import Titulo from '../titulos/titulo/Titulo';
import {Button} from '../input/button/Button';

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

const Modal = ({ modalOpen, handleClose, title, content }) => {
  if (!modalOpen) return null;

  return (
    <Backdrop onClick={handleClose}> 
      <motion.div 
        onClick={(e) => e.stopPropagation()} 
        className="modal" 
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <>
          <div className="area-superior-modal">
            <div className="area-titulo-modal">
              <Button 
                className="back-button"  
                onClick={handleClose} 
                style={{ position: "relative", top: "0vh" }}
              />
              <Titulo 
                nomeSecao={title[0]} 
                nomeSubSecao={title[1]} 
                style={{ position: "relative", top: "-0.8vh", display: "inline", margin: "0.8vh 0 0 0.3vw", height: "2vh" }}
              />
            </div>
            <div className="area-botoes">
              <Button className="cancel-button" dataTooltip="Cancelar"  onClick={handleClose} />
              <Button className="save-button" dataTooltip="Salvar" onClick={handleClose} />
            </div>
          </div>
          <div className="corpo-modal">
            {content} 
          </div>
        </>
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
