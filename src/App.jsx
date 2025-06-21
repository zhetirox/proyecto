import React from 'react';
import './App.css';
import Mapa from './pages/Mapa/Mapa';
import DropdownMenu from './components/Menu/DropdownMenu';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from "./pages/home";


function App() {
  return (
    <>

    </>
  );
}


function App() {
  return (
    <PrimeReactProvider>
      <Mapa />
      <DropdownMenu />
    </PrimeReactProvider>

  );
}

export default App;
