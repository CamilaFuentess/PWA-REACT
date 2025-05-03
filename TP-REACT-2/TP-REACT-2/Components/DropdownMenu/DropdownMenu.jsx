import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BotonBarra from '../Botones/BotonBarra/BotonBarra';

const DropdownMenu = () => {
    const [abierto, setAbierto] = useState(false);
    const menuRef = useRef(null);

    const navigate = useNavigate();

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

    const clickTarjeta = (cat) => {
        navigate(`/categoria`, { state: { cat: cat }});   
      };

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
                    <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left" onClick={() => clickTarjeta("Procesador")}>Procesador</button>
                    <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left" onClick={() => clickTarjeta("Placa")}>Placa de video</button>
                    <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left" onClick={() => clickTarjeta("Memoria")}>Memoria RAM</button>
                    <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left" onClick={() => clickTarjeta("Almacenamiento")}>Almacenamiento</button>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
