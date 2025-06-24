import React, { useState } from 'react';
import '../style.css/home.css';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Password } from 'primereact/password';
import { Message } from 'primereact/message';

function Home() {

    const [value, setValue] = useState('');
    const [checked, setChecked] = useState('')

    return (
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
                            <Password />
                        </div>
                        <Button label="Sumbit" color='red' />

                           
                        <p className="registro">
                            <a href="#">Olvido contraseña</a>
                        </p>
                    </form>
                </div>

            </div>
            <div className="logo">


            </div>
        </div>
    )
}


export default Home;
