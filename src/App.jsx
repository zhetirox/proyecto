import React from "react";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from "primereact/button";
import Home from "./pages/home";
import Registro from "./page/registro/registro";

function App() {
    return (
        <PrimeReactProvider>
           
            <Registro/>
        </PrimeReactProvider>

    );
}

export default App;