import React from "react";
import Header from '../../Components/Header/Header'
import Titulo from '../../Components/Titulo/Titulo';
import Footer from '../../Components/Footer/Footer';
const Info = ({articulo}) => {

    return (
        
            <div className="block items-center bg-blue-600 box-border rounded-2xl">
                <Header />
                <div className="box-border border-4 p-1 rounded-2xl">
                    <Titulo texto={articulo.nombre}></Titulo>
                </div>
                <div className="grid grid-cols-2 m-2 p-2">
                    <div className="grid grid-rows-2">
                        <div className="box-content size-59% border-4 p-4 m-1 rounded-2xl">
                            <img src={articulo.imagen} alt="Producto" className="box-border rounded-2xl" />
                        </div>
                        <div className="box-content size-40% border-4 p-4 m-4 rounded-2xl" >
                            <h1 className="text-5xl text-white ">${articulo.precio}</h1>
                        </div>
                    </div>
                    <div className="box-border size-39% border-4 p-4 rounded-2xl m-4">
                        <h1 className="mx-auto">{articulo.nombre}</h1>
                    </div>
                </div>

                <Footer/>
            </div>
        
    );

};

export default Info;