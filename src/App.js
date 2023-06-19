import './App.css';
import logo from "./imagenes/logo192.png";
import Tarea from "./componentes/Tarea.jsx";
import Formulario from "./componentes/Formulario.jsx";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img 
          src={logo} 
          className='logo' 
          alt="" 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
          <Formulario></Formulario>
          <Tarea texto="Aprender React"/>
      </div>
    </div>
  );
}

export default App;
