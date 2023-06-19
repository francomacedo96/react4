import React from "react";
import "../estilo/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tarea = ({texto, completada}) => (
    <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
        <div className="tarea-texto">
            {texto}
        </div>
        <div className="tarea-contenedor-iconos">
            <AiOutlineCloseCircle className="tarea-icono"/>
        </div>
    </div>
);

export default Tarea;