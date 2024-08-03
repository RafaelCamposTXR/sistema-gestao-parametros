import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebartailwind/Sidebar';
import GestaoCampos from './views/gestao-campos/GestaoCampos';
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
              <Route path="/gestaocampos" element={<GestaoCampos />} />
              <Route path="/gestaofornecedores" element={<GestaoFornecedores />} />
              <Route path="/gestaousuarios" element={<GestaoUsuarios />} />
              <Route path="/info" element={<Info />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

