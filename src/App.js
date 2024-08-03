import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebartailwind/Sidebar';
import GestaoParametros from './views/gestao-parametros/GestaoParametros';
import {GestaoCampos} from './views/gestao-parametros/gestaoCampos/GestaoCampos'
import GestaoFornecedores from './views/gestao-fornecedores/GestaoFornecedores';
import GestaoUsuarios from './views/gestao-usuarios/GestaoUsuarios';
import Info from './views/info/Info';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="layout">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="gestaoparametros" element={<GestaoParametros />}> 
                <Route path="gestaocampos" element={<GestaoCampos />} />
                <Route path="info" element={<Info />} />
                <Route path="gestaousuarios" element={<GestaoUsuarios />} />
                <Route path="gestaofornecedores" element={<GestaoFornecedores />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

