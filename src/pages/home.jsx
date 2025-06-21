import React, { useState } from 'react';
import '../style.css/home.css';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Password } from 'primereact/password';
import { Message } from 'primereact/message';
import { Logo } from './img/logo.png';

function Home() {

    const [value, setValue] = useState('');
    const [checked, setChecked] = useState('')

    return (

        <div className="card flex justify-content-center">
            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="250" />

            <div className='home-container'>
                <div className='home-box'>

                    <div className='inicio'>
                        <h2 className='title'>INICIAR SESIÓN</h2>

                        <form className='Correo eletronico'>

                            <div>
                                <FloatLabel>
                                    <InputText id="email" value={value} onChange={(e) => setValue(e.target.value)} />
                                    <label htmlFor="email">Correo electrónico</label>
                                </FloatLabel>

                                <Message text="required email" />
                            </div>

                            <div>
                                <FloatLabel>
                                    <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                                    <label htmlFor="username">Contraseña</label>
                                </FloatLabel>
                                <Password />
                            </div>
                            <Button label="Sumbit" />

                            <div className="checkbox">
                                <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                            </div>

                            <p className="registro">
                                Olvido contraseña <a href="#">Olvido contraseña</a>
                            </p>
                        </form>
                    </div>

                </div>
                <div className="logo">

                    <img src={logo} alt='Logo de mi página' />


                </div>
            </div>
        </div>    
            )
}


            export default Home;
