import { useState } from 'react';
//import style from './InputBusqueda.module.css'; 

const InputBusqueda = ({ manejarFiltro }) => {

    const [busqueda, setBusqueda] = useState('');
    const buscar = () => {
        if (busqueda.trim() !== '') {
        manejarFiltro('ambos', busqueda);
        }
    };

    return (
        <>
        <div>
            <input 
                class="text-base rounded-lg border-none w-[60%] text-[#404866] bg-[#e5ebd2] max-w-md p-[0.5rem 1rem]" type="text" placeholder="Buscar por título o director" 
                value={busqueda} 
                onChange={(eBusqueda) => setBusqueda(eBusqueda.target.value)}/>
            <button onClick={buscar}>Buscar</button>
        </div>
        </>
    );
};

export default InputBusqueda;
