import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import PasswordScreen from "./pages/PasswordScreen";
import TerminosCondiciones from "./components/TerminosCondiciones.jsx";


function App() {
    return (
        <PrimeReactProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PasswordScreen />} />
                    <Route path="/terminos" element={<TerminosCondiciones />} />
                </Routes>
            </BrowserRouter>
        </PrimeReactProvider>
    );
}

export default App;
