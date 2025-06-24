import React from "react";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from "primereact/button";
import Home from "./pages/home";

function App() {
    return (
        <PrimeReactProvider>
            <Home />
        </PrimeReactProvider>

    );
}

export default App;