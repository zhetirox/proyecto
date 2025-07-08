import React from 'react';
import { Button } from 'primereact/button';
import './pantalla.css';
import sibu_redondo from '../../assets/sibu_redondo.png';

function Splash() {
    return (
        <>
        
            <div className="logo">
                <img src={sibu_redondo} alt="Logo Sibu" />
            </div>
           </>
    );
}

export default Splash;
