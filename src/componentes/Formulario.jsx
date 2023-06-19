import React, {useState} from "react";
import "../estilo/Formulario.css";
import {v4 as uuidv4} from "uuid";


function Formulario(props) {

    const [input, setInput] = useState("");

    const manejarCambio = e => {
        setInput(e.target.value); 
    }

    const manejarEnvio = e => {
        e.preventDefault();
        console.log("envaindo formulario");

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        
        }
        console.log(tareaNueva);

        props.onSubmit(tareaNueva);
    }

    return (
    <div>
        <form className="tarea-formulario" 
        onSubmit={manejarEnvio}
        >
            <input 
                type="text" 
                className="tarea-input"
                placeholder="Ingresa una tarea"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="tarea-boton">Agregar tarea</button>
        </form>
    </div>
    );
}

export default Formulario;