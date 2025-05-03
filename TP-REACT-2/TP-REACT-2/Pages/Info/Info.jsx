import React, { useState, useEffect } from "react";
import Titulo from '../../Components/Titulo/Titulo';
import { useLocation } from 'react-router-dom';
import { apiComputadoras, apiDetalles } from "../../services/getApi";
import Animacion from "../../Components/Animacion/Animacion";

const Info = () => {
    const location = useLocation();
    const id = location.state?.id;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 7000);

        return () => clearTimeout(timer); 
    }, []);

    const [computadora, setComputadora] = useState();
    const [detalle, setDetalle] = useState();
 
    apiComputadoras(setComputadora, id)
    apiDetalles(setDetalle, id)
                   
    if (computadora === undefined || detalle === undefined) { 
        return (
            <Animacion texto="Cargando..." src={"https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json"}/>
        );
    }

    return (
        
            <div className="min-h-screen bg-[#ebeef3] text-[#262626] font-mono p-6 max-w-screen-lg mx-auto">
                    <Titulo texto={computadora.name}></Titulo>
                <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mt-6">
                    <div className="rounded-2xl p-4 bg-[#f9fafc] border border-[#e1e8ef] shadow-2xl overflow-hidden">
                        <img src={computadora.imagen}  className="rounded-2xl shadow-md object-contain max-h-80 w-full transform transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="p-6 bg-[#f9fafc] border border-[#e1e8ef] shadow rounded-2xl " >
                        <h2 className=" text-4xl font-bold text-[#4a5c71] mb-4">${computadora.precio}</h2>  
                        <div className="box-border size-30% rounded-2xl m-1">
                            <h1 className="text-xl font-semibold text-[#4a5c71] mb-2">{computadora.descripcion}</h1>
                            <h1 className="text-xl text-[#4a5c71] mb-2">Marca: {detalle.marca}</h1>
                            <h1 className="text-xl text-[#4a5c71] mb-2">Modelo: {detalle.modelo}</h1>
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold text-[#4a5c71] mb-2">Especificaciones:</h3>
                                <ul className="list-disc list-inside text-[#5e6c7c]">
                                    {detalle.especificaciones.map((item, n) => (
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

export default Info;



