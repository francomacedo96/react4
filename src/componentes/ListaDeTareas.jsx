import React, {useState} from "react";
import Tarea from "./Tarea";
import Formulario from "./Formulario";
import "../estilo/ListaDeTareas.css";


function ListaDeTareas() {

    const [tareas, setTareas] = useState ([]);

    const agregarTarea = tarea => {
        console.log("tarea agregada");

        if(tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasACtualizadas = [tarea, ...tareas];
            setTareas(tareasACtualizadas);
        }
    }


    return(

    <>
        <Formulario onSubmit={agregarTarea} />
        <div className="tareas-lista-contenedor">
            {
                tareas.map((tarea) =>
                <Tarea 
                    key={tarea.id}
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                />

                )
            }
        </div>
    </>
    );
}

export default ListaDeTareas;