import { ModalInput } from '../modal/ModalInput';
import React from 'react';
import './FiltrosSidebar.scss';
import Backdrop from '../modal/backdrop/Backdrop';
import {motion} from 'framer-motion';
import {Button} from '../input/botao/Button';
import {Textbox} from '../input/text-box/Textbox';
import TuneIcon from '@mui/icons-material/Tune';
import { useSidebar } from '../../context/SidebarContext'; 



const dropIn = {
  hidden: {
    x:"100vh",
    opacity: 0.7
  },
  visible: {
    x:"0",
    opacity: 1,
    transition:{
      duration: 0.18,
      type:"easeinout",
    }
    
  },
  exit: {
    x: "100vh",
  },
};


const FiltrosSidebar = ({inputList, modalOpen, handleClose, title, content}) => {

  const { setIsSidebarOpen } = useSidebar(); 

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };


  return (
    <>
    { modalOpen && 
    <Backdrop onClick={(closeSidebar)}>
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
              <Button className="back-button"  onClick={closeSidebar} style={{position: "relative", top: "0vh"}} color="white"/>
              <div style={{width: "4.5vw", display: "flex", flexWrap: "no-wrap", justifyContent: "space-around", alignItems: "center"}}>
                <p style={{color: "white", position: "relative", top: "-0.3vh"}}>
                  Filtros
                </p>
                <TuneIcon sx={{fontSize: "16px", color: "white", position: "relative", top: "-0.25vh"}}/>
                </div>
            </div>
          </div>
          <div className="corpo-modal-filtros">
            {inputList.map((inputProps, index) => (
              <div key={index} className="input-group-filtros">
              <label className="texto-input-filtros">{inputProps.label}</label>
                <div style={{width: "12.5vw", display: "flex", flexDirection: "column", gap: "5vh"}}>
                  <Textbox 
                    label={inputProps.labelTextbox}
                    tipoInput={inputProps.tipoInput}
                    inputFocused={inputProps.inputFocused}
                    setInputFocused={inputProps.setInputFocused}
                    inputValue={inputProps.inputValue}
                    setInputValue={inputProps.setInputValue}
                  />
                </div>
              </div>
              ))}
          </div>
        </>
      </motion.div>
    </Backdrop>
    }
    </>
  )
}

export default FiltrosSidebar
