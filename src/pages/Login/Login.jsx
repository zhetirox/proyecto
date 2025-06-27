import React, { useState } from 'react';
import '../../style.css/Login.css';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Password } from 'primereact/password';
import { Message } from 'primereact/message';
import { Image } from './assets/Logo.png';

function Login() {

    const [value, setValue] = useState('');
    const [checked, setChecked] = useState('')

    return (
        <div className='Login-container'>
            <div className='Login-box'>

                <div className='inicio'>
                    <h1 className='title'>INICIAR SESIÓN</h1>

                    <form className='Correo eletronico'>

                        <div>
                            <FloatLabel>
                                <InputText id="email" value={value} onChange={(e) => setValue(e.target.value)} />
                                <label htmlFor="email">Correo electrónico</label>
                            </FloatLabel>

                        </div>
                    </form>
                    <div>
                        <Password>
                        </Password>
                    </div>
                </div>
                <Button label="Ingresar" />


                <p className="registro">
                    <h3><a href="#">Olvido contraseña</a></h3>
                </p>

                <div>
                    <Image src="\Users\Aprendiz\Desktop\Logo_sibu.png" alt="logo de sibu"></Image>
                </div>
            </div>

        </div >
    )
}


export default Login;
