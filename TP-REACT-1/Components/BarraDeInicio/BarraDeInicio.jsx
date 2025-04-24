import { useState, useRef, useEffect } from 'react';
import style from './BarraDeInicio.module.css'; 
import InputBusqueda from '../InputBusqueda/InputBusqueda';

const BarraInicio = ({ manejarFiltro }) => {
  const [mostrarSubmenu, setMostrarSubmenu] = useState(false);
  const submenuRef = useRef(null);

  const generos = ['Accion', 'Comedia', 'Drama', 'Terror'];

  useEffect(() => {
    const manejarClickFuera = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setMostrarSubmenu(false);
      }
    };

    document.addEventListener('mousedown', manejarClickFuera);
    return () => {
      document.removeEventListener('mousedown', manejarClickFuera);
    };
  }, []);
// ojo aca: estan haciendo manejarFiltro('visto', true) pero despues en el componente de pelis comparan con 'visto' y 'novisto', no se si genera algun bug,
//pero intenten mantener la consistencia.
  return (
    <div className={style.estiloBarraDeInicio}>
      <button onClick={() => manejarFiltro('tipo', '')}>Inicio</button>
      <button onClick={() => manejarFiltro('tipo', 'Pelicula')}>Películas</button>
      <button onClick={() => manejarFiltro('tipo', 'Serie')}>Series</button>
      <button onClick={() => manejarFiltro('visto', true)}>Visto&nbsp;/&nbsp;No&nbsp;visto</button>

        <button onClick={() => setMostrarSubmenu((prev) => !prev)}>
          Género {mostrarSubmenu ? '▲' : '▼'}
        </button>
        {mostrarSubmenu && (
          <div className={style.submenu}>
            {generos.map((g) => (
              <button key={g} onClick={() => {
                manejarFiltro('genero', g);
                setMostrarSubmenu(false);
              }}>
                {g}
              </button>
            ))}
          </div>
        )}

      <InputBusqueda manejarFiltro={manejarFiltro} />
    </div>
  );
};

export default BarraInicio;

