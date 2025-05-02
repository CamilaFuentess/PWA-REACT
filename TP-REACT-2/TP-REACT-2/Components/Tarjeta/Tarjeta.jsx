import { useState, useEffect } from 'react';
import Icono from '../Icono/Icono';
import { useNavigate } from 'react-router-dom';

const Tarjeta = ({ producto }) => {
    const [esFavorito, setEsFavorito] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const favs = JSON.parse(localStorage.getItem('favoritos')) || [];
      setEsFavorito(favs.some(f => f.id === producto.id));
    }, [producto.id]);
  
    const handleToggleFavorito = (e) => {

      e.stopPropagation(); 
      let favs = JSON.parse(localStorage.getItem('favoritos')) || [];
      const existe = favs.some(f => f.id === producto.id);
  
      if (existe) {
        favs = favs.filter(f => f.id !== producto.id);
      } else {
        favs.push(producto);
      }
  
      localStorage.setItem('favoritos', JSON.stringify(favs));
      setEsFavorito(!existe);
      window.dispatchEvent(new Event("favoritosActualizados"));
    };
  
    const clickTarjeta = (id) => {
      navigate(`/info`, { state: { id: id }});   
    };

    return (
      <div className="bg-[#3c3a3a] border-10 border-[#b7c2ce] rounded-3xl cursor-pointer transition p-4 min-h-[250px] max-w-sm mx-auto [box-shadow:0_0_6px_#b7c2ce,0_0_12px_#b7c2ce]
             hover:[box-shadow:0_0_10px_#b7c2ce,0_0_20px_#b7c2ce]" onClick={clickTarjeta}>
        <div className="relative">
          <img src={producto.coverImage} className="w-full h-44 rounded-3xl object-cover"/>
          <div className="absolute top-2 right-4 z-10">
            <Icono activo={esFavorito} onClick={handleToggleFavorito} />
          </div>
        </div>
        <div className="text-center mt-2">
          <h3 className="text-base font-semibold text-[#ebeef3]">{producto.name}</h3>
          <div className='mt-3'> 
            <button className="bg-[#f9fafc] text-[#3c3a3a] font-bold  px-6 py-3 rounded-full transition transform hover:scale-105 hover:shadow-lg" onClick={clickTarjeta}> Ver detalle</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Tarjeta;