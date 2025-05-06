import React, { useState, useEffect } from "react";
import Titulo from '../../Components/Titulo/Titulo';
import { apiComputadoras, apiDetalles } from "../../services/getApi";
import Animacion from "../../Components/Animacion/Animacion";
import { useTranslation } from "react-i18next";
import Icono from '../../Components/Icono/Icono';
import { getFavoritos, esFavorito, toggleFavorito } from '../../src/utils/favoritos';
import { useParams } from "react-router-dom";

const Info = () => {

    const {id} = useParams();
    const { t } = useTranslation();

    const [loading, setLoading] = useState(true);

    const [esFav, setEsFav] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 2000);

        return () => clearTimeout(timer); 
    }, []);
    
    const {computadora, notFound} = apiComputadoras(id);
    const detalle = apiDetalles(id);

    useEffect(() => {
        setEsFav(esFavorito(id));
      }, [id]); 


      if (notFound) {
        return (
            <Animacion texto={t("notFound")} src={"https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json"}/>
        );
    }


    if (loading || computadora === undefined || detalle === undefined) { 
        return (
            <Animacion texto={t("loading")} src={"https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json"}/>
        );
    }else{
        const handleToggleFavorito = () => {
          const nuevoEstado = toggleFavorito(computadora); 
          setEsFav(nuevoEstado);
        };

        return (
            
            <div className="min-h-screen bg-[#1c1c1c] text-[#ebeef3] font-mono p-6 max-w-screen-lg mx-auto">
                <Titulo texto={computadora.name} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    
                    <div className="relative rounded-2xl p-4 bg-[#2b2b2b] border border-[#67aaf1]/30 shadow-[0_4px_16px_rgba(103,170,241,0.15)] overflow-hidden">
                    <img 
                        src={computadora.image} 
                        className="rounded-2xl object-contain max-h-80 w-full transform transition-transform duration-300 hover:scale-105 ring-2 ring-[#67aaf1]/20" 
                    />
                    <div className="absolute top-2 right-4 z-10">    
                        <Icono activo={esFav} onClick={handleToggleFavorito} />
                    </div>
                    </div>
                    
                    <div className="p-6 bg-[#2b2b2b] border border-[#67aaf1]/20 shadow-[0_4px_16px_rgba(103,170,241,0.1)] rounded-2xl">
                    <h2 className="text-4xl font-bold text-[#67aaf1] mb-4">${computadora.price}</h2>
                    <div className="rounded-2xl m-1">
                        <h1 className="text-xl font-semibold text-[#b7c2ce] mb-2">{computadora.description}</h1>
                        <h1 className="text-xl text-[#b7c2ce] mb-2">{t("brand")}: {detalle.brand}</h1>
                        <h1 className="text-xl text-[#b7c2ce] mb-2">{t("model")}: {detalle.model}</h1>
                        
                        <div className="mt-4">
                        <h3 className="text-xl font-semibold text-[#67aaf1] mb-2">{t("specifications")}:</h3>
                        <ul className="list-disc list-inside text-[#b7c2ce]">
                            {detalle.specifications.map((item, n) => (
                            <li key={n} className="text-md">{item}</li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
      
        );
    };
};

export default Info;



