import React from "react";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from "primereact/button";
import Home from "./pages/home";
import RegistroConductores from "./pages/RegistroConductores";

function App() {
    return (
        <PrimeReactProvider>
           <Registropasajeros/>
        </PrimeReactProvider>

    );
}

export default App;
