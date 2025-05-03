import { useState, useEffect } from 'react';
import Icono from '../Icono/Icono';
import { useNavigate } from 'react-router-dom';
import { getFavoritos, esFavorito, toggleFavorito } from '../../src/utils/favoritos';

const Tarjeta = ({ producto }) => {
    const [esFav, setEsFav] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      setEsFav(esFavorito(producto.id));
    }, [producto.id]); 
    
    const handleToggleFavorito = () => {
      const nuevoEstado = toggleFavorito(producto); 
      setEsFav(nuevoEstado);
    };

    const clickTarjeta = (id) => {
      navigate(`/info`, { state: { id: id }});   
    };

    return (
      <div className="bg-[#3c3a3a] border-10 border-[#b7c2ce] rounded-3xl cursor-pointer transition p-4 min-h-[250px] max-w-sm mx-auto [box-shadow:0_0_6px_#b7c2ce,0_0_12px_#b7c2ce]
             hover:[box-shadow:0_0_10px_#b7c2ce,0_0_20px_#b7c2ce]">
        <div className="relative">
          <img src={producto.imagen} className="w-full h-44 rounded-3xl object-cover"/>
          <div className="absolute top-2 right-4 z-10">
            <Icono activo={esFav} onClick={handleToggleFavorito} />
          </div>
        </div>
        <div className="text-center mt-2">
          <h3 className="text-base font-semibold text-[#ebeef3]">{producto.name}</h3>
          <div className='mt-4 text-center'> 
            <button className="bg-[#f9fafc] text-[#3c3a3a] font-bold px-6 py-3 rounded-full transition transform hover:scale-105 hover:shadow-lg" onClick={() => clickTarjeta(producto.id)}> Ver detalle</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Tarjeta;