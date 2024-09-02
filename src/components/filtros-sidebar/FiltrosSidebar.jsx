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
            <div className="area-titulo-modal">
              <Button className="back-button"  onClick={handleClose} style={{position: "relative", top: "0vh"}}/>
              <Titulo 
                nomeSecao={title[0]} 
                nomeSubSecao={title[1]} 
                style={{position: "relative",
                        top: "-0.8vh",
                        display: "inline",
                        margin: "0.8vh 0 0 0.3vw",
                        height: "2vh"}}/>
            </div>
            <div className="area-botoes">
              <Button className="cancel-button" dataTooltip="Cancelar"  onClick={handleClose}/>
              <Button className="save-button" dataTooltip="Salvar" onClick={handleClose}/>
            </div>
          </div>
          <div className="corpo-modal">
            <div className="texto-corpo-modal">
              <ChangeCircleIcon sx={{fontSize: "22px", color: "var(--blue)"}}/>
              Itens a serem alterados
            </div>
            <div className="area-checkbox-pai">
              <div className='area-checkbox-modal'>
                <p style={{width: "100%"}}>
                  teste
                </p>
                <p style={{width: "100%"}}>
                  teste
                </p>
                <p style={{width: "100%"}}>
                  teste
                </p>
                <p style={{width: "100%"}}>
                  teste
                </p>
                <p style={{width: "100%"}}>
                  teste
                </p>
                <p style={{width: "100%"}}>
                  teste
                </p>
                <p style={{width: "100%"}}>
                  teste
                </p>
                <p style={{width: "100%"}}>
                  teste
                </p>
                <p style={{width: "100%"}}>
                  teste
                </p>

                {/* {content} */}
              </div>
            </div>
            <div style={{width: "98%", position: "relative", left: "-0.5vw", marginTop: "1vh"}}>
            <SelectBox
              placeholder="Selecione o Usuário"
            />
            </div>
          </div>
        </>
      </motion.div>
    </Backdrop>
  )
}

export default FiltrosSidebar
