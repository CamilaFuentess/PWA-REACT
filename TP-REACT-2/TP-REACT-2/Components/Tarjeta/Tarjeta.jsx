import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icono from '../Icono/Icono';
import { getFavoritos, esFavorito, toggleFavorito } from '../../src/utils/favoritos';
import { useTranslation } from 'react-i18next';

const Tarjeta = ({ producto }) => {
    const [esFav, setEsFav] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();
    useEffect(() => {
      setEsFav(esFavorito(producto.id));
    }, [producto.id]); 
    
    const handleToggleFavorito = () => {
      const nuevoEstado = toggleFavorito(producto); 
      setEsFav(nuevoEstado);
    };

    const clickTarjeta = (id) => {
      navigate(`/info/${id}`);   
    };

    return (
      <div className="bg-[#1c1c1c] border-5 border-[#ffffff] rounded-4xl cursor-pointer transition p-4 min-h-[250px] max-w-sm mx-auto [box-shadow:0_0_6px_#b7c2ce,0_0_12px_#b7c2ce]
             hover:[box-shadow:0_0_10px_#b7c2ce,0_0_20px_#b7c2ce]">
        <div className="relative">
          <img src={producto.image} className="w-full h-44 rounded-3xl object-cover"/>
          <div className="absolute top-2 right-4 z-10">
            <Icono activo={esFav} onClick={handleToggleFavorito} />
          </div>
        </div>
        <div className="text-center mt-2">
          <h3 className="text-base font-semibold text-[#ebeef3]">{producto.name}</h3>
          <div className='mt-4 text-center'> 
            <button className="bg-[#000000] text-[#67aaf1] font-bold px-6 py-3 rounded-full 
             border border-[#67aaf1]
             hover:bg-[#67aaf1] hover:text-black 
             transition transform hover:scale-105 hover:shadow-[0_0_15px_#67aaf1aa]" onClick={() => clickTarjeta(producto.id)}>{t("viewDetail")}</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Tarjeta;