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
  
    const clickTarjeta = () => {
      navigate(`/info`)   //completar con idproducto 
    }

    return (
      <div className="bg-[#3d7b80] border-5 border-[#77b1a9] rounded-lg shadow-md cursor-pointer transition hover:shadow-lg p-4 min-h-[250px] max-w-sm mx-auto" onClick={clickTarjeta}>
        <div className="relative">
          <img src={producto.coverImage} className="w-full h-44 object-cover"/>
          <div className="absolute top-2 right-4 z-10">
            <Icono activo={esFavorito} onClick={handleToggleFavorito} />
          </div>
        </div>
        <div className="text-center mt-2">
          <h3 className="text-base font-semibold text-[#270a33]">{producto.name}</h3>
        </div>
      </div>
    );
  };
  
  export default Tarjeta;