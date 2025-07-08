import React from "react";
import { PrimeReactProvider } from 'primereact/api'; 
import Splash from "./page/registro/pantalla.jsx";

function App() {
    return (
        <PrimeReactProvider>
            <Splash />
        </PrimeReactProvider>
    );
}

export default App;
