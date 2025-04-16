import { useState } from 'react';
import style from './BarraDeInicio.module.css'; 
const BarraInicio = ({ manejarFiltro }) => {
  const [mostrarSubmenu, setMostrarSubmenu] = useState(null);

  const generos = ['Accion', 'Comedia', 'Drama', 'Terror'];

  return (
    <div className={style.estiloBarraDeInicio}>
      <button onClick={() => manejarFiltro('tipo', '')}>Inicio</button>
      <button onClick={() => manejarFiltro('tipo', 'Pelicula')}>Películas</button>
      <button onClick={() => manejarFiltro('tipo', 'Serie')}>Series</button>
      <button onClick={() => manejarFiltro('visto', true)}>Visto /No visto</button>
      <div >
        <button onClick={() => setMostrarSubmenu(!mostrarSubmenu)}>Género</button>
        {mostrarSubmenu && (
          <div>
            {generos.map((g) => (
              <div key={g}>
                <button onClick={() => {
                  manejarFiltro('genero', g);
                  setMostrarSubmenu(false); 
                }}>
                  {g}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BarraInicio;
