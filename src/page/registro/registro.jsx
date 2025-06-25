import React from 'react';
import { Button } from 'primereact/button';
import './registro.css'
import sibu_redondo from './logo.png'

export default function Registro() {
    return (
        <>
            <div className='logo'>
                <img src={sibu_redondo} alt='' />
            </div>
            <div className='contenedor'>

                <div className="registro">
                    <Button label="REGISTRARSE" />
                </div>
                <p>ó</p>
                <div className="inicio">
                    <Button label="INICIAR SESIÓN" />
                </div>
            </div>
        </>

    );
}

