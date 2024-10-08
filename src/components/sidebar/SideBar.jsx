import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './sidebar.scss';
import Backdrop from '../modal/backdrop/Backdrop';
import MenuIcon from '@mui/icons-material/MenuSharp';
import CloseIcon from '@mui/icons-material/Close';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { motion } from 'framer-motion';
import { HotKeys } from 'react-hotkeys';

const keyMap = {
  FECHAR: "esc",
};

function Sidebar(
  {nomeUsuario}
) {
  const [sidebar, setSidebar] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({});

  const showSidebar = () => setSidebar(!sidebar);

  const toggleSubMenu = (index) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlers = {
    FECHAR: () => setSidebar(false),
  };

  const submenuVariants = {
    hidden: { height: 0, opacity: 0, overflow: 'hidden' },
    visible: { height: 'auto', opacity: 1 },
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <MenuIcon sx={{ fontSize: "1.8rem" }} onClick={showSidebar} />
          </Link>
          <img src={require("../media/logo-martins.png")} style={{position: "relative", width: "2.65vw", marginLeft: "1.1vw", top: "-0.1vh"}}></img>
        </div>
        {sidebar && <Backdrop onClick={() => setSidebar(false)} />}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <span className="nome-usuario">Boas vindas, {nomeUsuario}</span>
            <li className='navbar-toggle'>
            <div className='menu-bars'>
              <CloseIcon 
                sx={{ fontSize: "1.63rem", color: "white" }} 
                onClick={() => setSidebar(false)} 
              />
            </div>
            </li>
            <div className="area-navegacao">
              {SidebarData.map((item, index) => (
                <React.Fragment key={index}>
                  {/* Verifica se o item tem um subMenu */}
                  {item.subMenu ? (
                    <li className={item.cName} onClick={() => toggleSubMenu(index)}>
                      {item.icon}
                      <span style={{ marginLeft: "0vw" }}>{item.title}</span>
                      
                      {subMenuOpen[index] ? (
                        <FaIcons.FaCaretUp className="submenu-icon" />
                      ) : (
                        <FaIcons.FaCaretDown className="submenu-icon" />
                      )}
                    </li>
                  ) : (

                    <Link to={item.path} key={index} style={{ textDecoration: "none", color: "white", cursor: "default" }}>
                      <li className={item.cName} onClick={showSidebar}>
                        {item.icon}
                        <span style={{ marginLeft: "0vw" }}>{item.title}</span>
                      </li>
                    </Link>
                  )}
                  {/* Renderiza o subMenu caso exista */}
                  {item.subMenu && (
                    <motion.ul
                      className="submenu"
                      initial="hidden"
                      animate={subMenuOpen[index] ? "visible" : "hidden"}
                      variants={submenuVariants}
                      transition={{ duration: 0.1 }}
                    >
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link key={subIndex} to={subItem.path} style={{ textDecoration: "none", color: "white" }} onClick={showSidebar}>
                          <li className="submenu-item">
                            {subItem.icon}
                            <span style={{ marginLeft: "0.5vw", color: "white" }}>{subItem.title}</span>
                          </li>
                        </Link>
                      ))}
                    </motion.ul>
                  )}
                </React.Fragment>
              ))}
            </div>
          </ul>
        </nav>
      </HotKeys>
  );
}

export default Sidebar;
