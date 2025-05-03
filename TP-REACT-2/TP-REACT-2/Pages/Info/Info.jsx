import React, { useState, useEffect } from "react";
import Titulo from '../../Components/Titulo/Titulo';
import { useLocation } from 'react-router-dom';
import { apiComputadoras, apiDetalles } from "../../services/getApi";

const Info = () => {
    const location = useLocation();
    const id = location.state?.id;
    console.log("id: ", id)

    const [computadora, setComputadora] = useState();
    const [detalle, setDetalle] = useState();
 
    apiComputadoras(setComputadora, id)
    apiDetalles(setDetalle, id)
                   
    if (computadora === undefined || detalle === undefined) { 
        return <h1>Loading...</h1>;
    }

    return (
        
            <div className="block items-center bg-blue-600 box-border p-4">
                <div className="box-border border-4 p-1 m-1 rounded-2xl">
                    <Titulo texto={computadora.name}></Titulo>
                </div>
                <div className="grid grid-cols-2 m-1">
                    <div className="grid grid-rows-2">
                        <div className="box-content size-70% border-4 p-4 m-1 rounded-2xl">
                            <img src={computadora.imagen} alt="Producto" className="box-border rounded-2xl" />
                        </div>
                        <div className="box-content size-30% border-4 p-4 m-4 rounded-2xl" >
                            <h1 className="text-8xl text-white ">${computadora.precio}</h1>
                        </div>
                    </div>
                    <div className="box-border size-30% border-4 rounded-2xl m-1">
                        <h1 className="text-2xl text-white">{computadora.name}</h1>
                        <h1 className="text-2xl text-white">{detalle.marca}</h1>
                        <h1 className="text-2xl text-white">{detalle.modelo}</h1>
                        <h1 className="text-2xl text-white">{detalle.especificaciones}</h1>
                    </div>
                </div>
            </div>        
    );

};

export default Info;



