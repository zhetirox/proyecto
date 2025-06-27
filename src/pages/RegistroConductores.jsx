import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { useState } from "react";
import { Button } from 'primereact/button';
import sibuLogo from '../assets/sibu.jpeg';
import './registroconductores.css'


        
function RegistroConductores() {
    const [nombres, setValue] = useState('');
    return (
        <div className="container">
            <div className="card">
                <div className="curve" />
                <div className="header">
                    <div className="logo-container">

                    </div>
                    <Button>
                        <label htmlFor="registro conductor">Registro conductor</label>
                     
                    </Button>
                    

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
                    <Button>
                        <label htmlFor="Continuar">Continuar</label>
                     
                    </Button>
                    <div>     
                     <img src={sibuLogo} alt="Logo de Sibu" style={{ width: '150px', borderRadius: '250px' }} />
                    </div>

                    



                    

                

               
               


            </div>
    
    )
}

export default RegistroConductores;


