import React from "react";
import Titulo from '../../Components/Titulo/Titulo';


const Info = ({articulo}) => {

    return (
        
            <div className="block items-center bg-blue-600 box-border p-4">
                <div className="box-border border-4 p-1 m-1 rounded-2xl">
                    <Titulo texto={articulo.nombre}></Titulo>
                </div>
                <div className="grid grid-cols-2 m-1">
                    <div className="grid grid-rows-2">
                        <div className="box-content size-70% border-4 p-4 m-1 rounded-2xl">
                            <img src={articulo.imagen} alt="Producto" className="box-border rounded-2xl" />
                        </div>
                        <div className="box-content size-30% border-4 p-4 m-4 rounded-2xl" >
                            <h1 className="text-8xl text-white ">${articulo.precio}</h1>
                        </div>
                    </div>
                    <div className="box-border size-30% border-4 rounded-2xl m-1">
                        <h1 className="text-2xl text-white">{articulo.nombre}</h1>
                    </div>
                </div>

            </div>
        
    );

};

export default Info;