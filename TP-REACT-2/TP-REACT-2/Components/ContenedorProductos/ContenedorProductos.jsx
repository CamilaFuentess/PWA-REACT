import { useState } from 'react';
import Tarjeta from "../Tarjeta/Tarjeta";
import InputBusqueda from "../InputBusqueda/InputBusqueda";

{/*const ContenedorProductos = ({productos, filtro=null}) => {

    const [filtro, setFiltro] = useState("");
    
    const filtrados = filtro ? productos.filter
    (prod => prod.name.toLowerCase().includes(filtro.toLowerCase())) : productos;*/}

    const ContenedorProductos = ({ productos }) => {
        const [filtro, setFiltro] = useState("");
    
        const filtrados = productos.filter(prod =>
            prod.name.toLowerCase().includes(filtro.toLowerCase())
        );
        
    if (filtrados.length === 0) {
        return <p>No se encontraron elementos</p>;
    }   
    
    return(
        <div>
            <div className="p-4 m-4">
                <InputBusqueda value={filtro} onChange={setFiltro} />
            </div>
            
        
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 mt-8"> 

                
                {filtrados.map(producto => (
                    <Tarjeta key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

export default ContenedorProductos;
