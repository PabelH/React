import './App.css';
import Testimonio from './componentes/Testimonio';
import {shawn, sarah, emma} from './propiedades/propiedades';
function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre={shawn.nombre}
          pais={shawn.pais}
          imagen={shawn.imagen}
          cargo={shawn.cargo}
          empresa={shawn.empresa}
          testimonio={shawn.testimonio} />
        <Testimonio
          nombre={sarah.nombre}
          pais={sarah.pais}
          imagen={sarah.imagen}
          cargo={sarah.cargo}
          empresa={sarah.empresa}
          testimonio={sarah.testimonio} />
        <Testimonio 
          nombre={emma.nombre}
          pais={emma.pais}
          imagen={emma.imagen}
          cargo={emma.cargo}
          empresa={emma.empresa}
          testimonio={emma.testimonio} />
      </div>
    </div>
  );
}

export default App;
