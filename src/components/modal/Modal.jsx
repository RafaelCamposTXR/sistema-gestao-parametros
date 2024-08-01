import React from 'react';
import './Modal.css';
import Backdrop from '../backdrop/Backdrop';
import {motion} from 'framer-motion';
import Titulo from '../titulo/Titulo';

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

const Modal = ({handleClose, text}) => {
  return (
    <Backdrop onClick={handleClose}> 
    <motion.div onClick={(e) => e.stopPropagation()} className="modal" 
    variants={dropIn}
    initial="hidden"
    animate="visible"
    exit="exit">
      <Titulo nomeSecao="Gestão de Campos " nomeSubSecao= "Criar Novo"/>
    </motion.div>
    </Backdrop>
  )
}

export default Modal
