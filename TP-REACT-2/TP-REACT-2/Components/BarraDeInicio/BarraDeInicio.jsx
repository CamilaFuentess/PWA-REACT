import { useState, useRef, useEffect } from 'react';
//import style from './BarraDeInicio.module.css'; 

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
        </div>
    );
};

export default BarraInicio;

