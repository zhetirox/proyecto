import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { useState } from "react";
import { Button } from 'primereact/button';
import sibuLogo from '../assets/sibu.jpeg';
import '../style.css/registropasajeros.css';


function Registropasajeros() {
    const [nombres, setValue] = useState('');
    return (
        <div className="container">
            <div className="card">
                <div className="curve" />
                <div className="header">
                    <div className="logo-container">

                    </div>
                   <h1 className="h1">
                        <label htmlFor="registro conductor">Registro pasajeros</label>
                        </h1>

                   


                </div>


                <form className="form">
                    <FloatLabel>
                        <InputText id="nombres" value={nombres} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="nombres">Nombres</label>
                    </FloatLabel>
                </form>

                <form className="form">
                    <FloatLabel>
                        <InputText id="nombres" value={nombres} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="nombres">Apellidos</label>
                    </FloatLabel>

                </form>

                <form className="form">
                    <FloatLabel>
                        <InputText id="nombres" value={nombres} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="nombres">Telefono</label>
                    </FloatLabel>

                </form>

                <form className="form">
                    <FloatLabel>
                        <InputText id="nombres" value={nombres} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="nombres">Correo Electronico</label>
                    </FloatLabel>


                </form>

                <form className="form">
                    <FloatLabel>
                        <InputText id="nombres" value={nombres} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="nombres">Documento</label>
                    </FloatLabel>

                </form>


            </div>
            <div className="but">
            <Button >
                <label htmlFor="Continuar">Continuar</label>

            </Button>
            </div>
            <div className="imagen">
                <img src={sibuLogo} alt="Logo de Sibu" style={{ width: '200px', borderRadius: '100px', padding: '40px' }} />
            </div>













        </div>

    )
}

export default Registropasajeros;


