import React, { useState } from 'react';
import '../../style.css/Login.css';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import LogoSibu from '../../assets/Logo_sibu.png';



function Login() {

    const [value, setValue] = useState('');
    const [checked, setChecked] = useState('')

    return (
        <div className='Login-container'>
            <div className='Login-box'>
                <div className='logo'>
                    <img src={LogoSibu} alt="logo de sibu" />
                </div>

                <div className='inicio'>
                    <h1 className='title'>INICIAR SESIÓN</h1>

                    <form className='Correo eletronico'>

                        <div className='registro'>
                            <FloatLabel>
                                <InputText id="email" value={value} onChange={(e) => setValue(e.target.value)} />
                                <label htmlFor="email">Correo electrónico</label>
                            </FloatLabel>

                        </div>
                    </form>
                    <div className='contraseña'>
                        <Password value={value} onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} />
                             <label htmlFor="Contraseña"></label>
                    </div>
                </div>

                <div className='ingresar'>
                    <Button label="INGRESAR" />
                </div>


                <p className="registro">
                    <h3><a href="#">Olvido contraseña</a></h3>
                </p>

                
            </div>

        </div >
    )
}


export default Login;
