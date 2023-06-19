import React from "react";
import "../estilo/Formulario.css";

const Formulario = (props) => (
    <div>
        <form className="tarea-formulario" action="">
            <input 
                type="text" 
                className="tarea-input"
                placeholder="Ingresa una tarea"
                name="texto"
            />
            <button className="tarea-boton">Agregar tarea</button>
        </form>
    </div>
);

export default Formulario;