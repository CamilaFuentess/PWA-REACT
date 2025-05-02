import { useState } from 'react';
import BotonBarra from '../Botones/BotonBarra/BotonBarra';

const DropdownMenu = () => {
    const [abierto, setAbierto] = useState(false);

    const toggleDropdown = () => {
        setAbierto(!abierto);
    };

    return (
        <div className="relative">
        {/*Botón principal*/}
        <BotonBarra
            texto="Categorías"
            className="bg-[#262626] text-white px-4 py-2 rounded cursor-pointer border-none"
            onClick={toggleDropdown}
        />

        {/*Menú desplegable*/}
        {abierto && (
            <div className="absolute top-full mt-2 bg-[#ebeef3] shadow-lg rounded z-10">
            <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left">Notebooks</button>
            <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left">PC de escritorio</button>
            <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left">Componentes</button>
            </div>
        )}
        </div>
    );
};

export default DropdownMenu;
