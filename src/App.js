import './App.css';
import logo from "./imagenes/logo192.png";
import ListaDeTareas from './componentes/ListaDeTareas';

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
          <ListaDeTareas></ListaDeTareas>
      </div>
    </div>
  );
}

export default App;
