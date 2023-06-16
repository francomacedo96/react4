import React from "react";
import "../estilo/Tarea";

const Tarea = ({texto}) => (
    <div className="tarea-contenedor">
        <div className="tarea-texto">
            {texto}
        </div>
        <div className="tarea-icono">
            Eliminar
        </div>
    </div>
);

export default Tarea;