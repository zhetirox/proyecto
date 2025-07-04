import React from 'react';
import './App.css';
import Mapa from './pages/Mapa/Mapa';
import SideMenu from './components/Menu/SideMenu';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from "./pages/home";

function App() {
  return (
    <PrimeReactProvider>
      <Mapa />
      
      <SideMenu />
    </PrimeReactProvider>

  );
}

export default App;
