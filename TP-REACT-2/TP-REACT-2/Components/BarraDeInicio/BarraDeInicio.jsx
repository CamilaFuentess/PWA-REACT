import { useState, useRef, useEffect } from 'react';

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
        <div className="flex bg-[#92af5a] items-center w-full justify-around sticky h-[8vh]">
        <button 
            className="bg-[#92af5a] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" 
            onClick={() => manejarFiltro('tipo', '')}>Inicio
        </button>

        <button 
            className="bg-[#92af5a] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" 
            onClick={() => manejarFiltro('tipo', 'Pelicula')}>Películas
        </button>

        <button 
            className="bg-[#92af5a] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" 
            onClick={() => manejarFiltro('tipo', 'Serie')}>Series
        </button>

        <button 
            className="bg-[#92af5a] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" 
            onClick={() => manejarFiltro('visto', true)}>Visto&nbsp;/&nbsp;No&nbsp;visto
        </button>

        <button 
            className="bg-[#92af5a] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" 
            onClick={() => setMostrarSubmenu((prev) => !prev)}>Género {mostrarSubmenu ? '▲' : '▼'}
        </button>

            {mostrarSubmenu && (
            <div className="relative inline-block">
                {generos.map((g) => (
                <button 
                    className="bg-[#92af5a] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" key={g} 
                    onClick={() => {
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

