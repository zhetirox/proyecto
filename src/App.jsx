import React from "react";
import { PrimeReactProvider } from 'primereact/api';
import PasswordScreen from "./pages/PasswordScreen";
import TerminosCondiciones from './components/TerminosCondiciones.jsx';


function App() {
    return (
        <PrimeReactProvider>
            <PasswordScreen />
                        <TerminosCondiciones />
        </PrimeReactProvider>
    );
}

export default App;
