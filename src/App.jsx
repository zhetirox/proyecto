import React from 'react';
import './App.css';
import Mapa from './pages/Mapa/Mapa';
import SideMenu from './components/Menu/SideMenu';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from "./pages/home";
import Registropasajeros from "./pages/Registropasajeros";
import RegistroConductores from './pages/RegistroConductores';


function App() {
  return (
    <PrimeReactProvider>  
      <RegistroConductores />
    </PrimeReactProvider>

  );
}

export default App;
