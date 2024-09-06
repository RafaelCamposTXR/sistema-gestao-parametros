import './App.scss';
import React, {createContext, useContext} from 'react';

import { useSidebar } from './context/SidebarContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/sidebar/SideBar';
import FiltrosSidebar from './components/filtros-sidebar/FiltrosSidebar';
import GestaoParametros from './views/gestao-parametros/GestaoParametros';
import SistemaGestao from './views/sistema-gestao/SistemaGestao';
import { GestaoCampos } from './views/gestao-parametros/gestaoCampos/GestaoCampos';
import GestaoFornecedores from './views/gestao-parametros/gestao-fornecedores/GestaoFornecedores';
import GestaoUsuarios from './views/gestao-parametros/gestao-usuarios/GestaoUsuarios';
import JanelaEditar from './views/gestao-parametros/janela-editar/JanelaEditar';
import Info from './views/gestao-parametros/info/Info';
import ProdutosErro from './views/sistema-gestao/produtos-erro/ProdutosErro';
import ValidacaoConteudo from './views/sistema-gestao/validacao-conteudo/ValidacaoConteudo';
import FilaDemandas from './views/sistema-gestao/fila-demandas/FilaDemandas';


function App() {

  const { isSidebarOpen, setIsSidebarOpen, sidebarContent, setSidebarContent } = useSidebar();

  return (
    
      <Router>
        <div className="App">
          <div className="layout">
            <Sidebar />
            <FiltrosSidebar inputList = {sidebarContent }modalOpen={isSidebarOpen}  content="" title={["Fila de Demandas","Definição de Atendente"]}/>
            <div className="content">
            <Routes >
              <Route path="gestaoparametros" element={<GestaoParametros />}>
                    <Route path="gestaocampos" element={<GestaoCampos />} />
                    <Route path="info" element={<Info />} />
                    <Route path="gestaousuarios" element={<GestaoUsuarios />} />
                    <Route path="gestaofornecedores" element={<GestaoFornecedores />} />
                    <Route path="edicao" element={<JanelaEditar />} />
                  </Route>
                  <Route path="sistemagestao" element={<SistemaGestao />}>
                    <Route path="validacaoconteudo" element={<ValidacaoConteudo />} />
                    <Route path="filademandas" element={<FilaDemandas />} />
                    <Route path="produtoserro" element={<ProdutosErro />} />
                  </Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>

  );
}

export default App;
