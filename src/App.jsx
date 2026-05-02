import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ReportesTerreno from './components/ReportesTerreno';
import RegistroDonaciones from './components/RegistroDonaciones';
import PanelControlGlobal from './components/PanelControlGlobal';
import MapaNecesidades from './components/MapaNecesidades';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<PanelControlGlobal />} />
            <Route path="/mapa" element={<MapaNecesidades />} />
            <Route path="/registro" element={<RegistroDonaciones />} />
            <Route path="/reportes" element={<ReportesTerreno />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
