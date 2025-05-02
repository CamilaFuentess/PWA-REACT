import { useState, useRef, useEffect } from 'react';
import BotonBarra from '../Botones/BotonBarra/BotonBarra';

const DropdownMenu = () => {
    const [abierto, setAbierto] = useState(false);
    const menuRef = useRef(null);

    const toggleDropdown = () => {
        setAbierto(!abierto);
    };

    // Cierra el dropdown si se hace clic fuera del mismo
    useEffect(() => {
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setAbierto(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return(
        <div className="relative" ref={menuRef}>
            {/* Botón principal */}
            <BotonBarra
                texto="Categorías"
                className="bg-[#262626] text-white px-4 py-2 rounded cursor-pointer border-none"
                onClick={toggleDropdown}
            />

            {/* Menú desplegable */}
            {abierto && (
                <div className="absolute top-full mt-2 bg-[#ebeef3] shadow-lg rounded z-10">
                    <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left">Procesador</button>
                    <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left">Placa de video</button>
                    <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left">Memoria RAM</button>
                    <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left">Almacenamiento</button>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
