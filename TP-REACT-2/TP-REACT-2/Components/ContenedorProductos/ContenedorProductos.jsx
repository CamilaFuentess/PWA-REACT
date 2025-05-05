import { useState } from 'react';
import Tarjeta from "../Tarjeta/Tarjeta";
import InputBusqueda from "../InputBusqueda/InputBusqueda";
import Animacion from '../Animacion/Animacion';
import { useTranslation } from 'react-i18next';

    const ContenedorProductos = ({ productos }) => {
        const [filtro, setFiltro] = useState("");
        const { t, i18n } = useTranslation(); 

        const sinonimos = { //para buscar en ingles
            processor: "Procesador",
            memory: "Memoria RAM",
            graphicscard: "Placa de video",
            graphics: "Placa de video",
            storage: "Almacenamiento",
            ram: "Memoria RAM",
        };

        const normalizarTexto = (texto) => texto.toLowerCase();
        const filtroTraducido =
        i18n.language === "en" ? sinonimos[filtro.toLowerCase()] || filtro : filtro;

        if(!productos || !Array.isArray(productos)){
            return (
                <Animacion texto={t("loading")} src={"https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json"}/>
            )
        }
        
        const filtrados = productos.filter(prod =>
            normalizarTexto(prod.name).includes(filtro.toLowerCase()) ||
            normalizarTexto(prod.category).includes(normalizarTexto(filtroTraducido))
        );

        return(
            <div>
                <div className="p-4 m-4">
                    <InputBusqueda value={filtro} onChange={setFiltro} />
                </div>
                {filtrados.length===0 ? (
                     <Animacion texto={t("noResults", {filtro})} src={"https://lottie.host/e77a65c3-25d1-423b-9dd6-e6774ff153c3/zGThR5teVM.json"}/> 
                ) : (
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 mt-8"> 
    
                    
                    {filtrados.map(producto => (
                        <Tarjeta key={producto.id} producto={producto} />
                    ))}
                </div>
                )}
            </div>
        );
    
};

export default ContenedorProductos;
