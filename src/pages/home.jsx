import React, {useState} from 'react';
import'../style.css/home.css';

function App() {
   const [email,setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [mensaje,setMensaje] = useState('');

   const handleLogin =() => {
   const user = JSON.parse(localStorage.getItem('user'));
   if (user .email=== email user.password === password) {
    setMensaje('inicio de sesion existoso');
   } else {
    setMensaje('datos incorrectos');
   }
  

   }
  return (
    <div style={styles.container}>
      <img src="logo.png" alt="SIBU Logo" style={styles.logo} />
      <h1 style={styles.title}>INICIAR SESIÓN...</h1>
      <input type="email" placeholder="Correo electrónico" style={styles.input} />
      <input type="password" placeholder="Contraseña" style={styles.input} />
      <button style={styles.button}>INGRESAR</button>
      <a href="#" style={styles.link}>Olvidó contraseña</a>
    </div>
  );
}