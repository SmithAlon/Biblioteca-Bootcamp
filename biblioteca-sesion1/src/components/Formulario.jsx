import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './components.css';

const Fourmulario = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const validarPassword = () => {
        return password === 'Password';
    };

    const validarCorreo = () => {
        return correo === 'Pepe@gmail.com'
    }

    function validacion() {
        const validCorreo = validarCorreo();
        const validPassword = validarPassword();
        if(validCorreo && validPassword){
            navigate('/biblioteca');
        }else{
            alert('Correo o contraseña incorrectos');
        }
    }

    return(
        <div className="formulario">
            <h1>Inicio de Sesión</h1>
            <input 
            type="text" 
            placeholder="Correo" 
            onChange={(e) => setCorreo(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Contraseña" 
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={validacion}>Iniciar Sesión</button>
        </div>
    )
}

export default Fourmulario;