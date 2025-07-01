import React from "react";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Ajustes from "./pages/Ajustes";

function App() {
    return (
        <PrimeReactProvider>
           <Ajustes/>
        </PrimeReactProvider>

    );
}

export default App;
