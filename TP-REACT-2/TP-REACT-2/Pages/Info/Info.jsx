import React from "react";
import Titulo from '../../Components/Titulo/Titulo';
import ArticuloImagen from "../../Components/ArticuloImagen/ArticuloImagen";
import ArticuloPrecio from "../../Components/ArticuloPrecio/ArticuloPrecio";
import TarjetaInfo from "../../Components/TarjetaInfo/TarjetaInfo";

const Info = ({articulo}) => {

    return (
        
            <div class="block items-center bg-blue-600 box-border rounded-2xl">
                <div class="box-border border-4 p-1 rounded-2xl">
                    <Titulo texto={articulo.nombre}></Titulo>
                </div>
                <div class="grid grid-cols-2 m-2 p-2">
                    <div class="grid grid-rows-2">
                        <div class="box-content size-59% border-4 p-4 m-1 rounded-2xl">
                            <ArticuloImagen articulo={articulo}></ArticuloImagen>
                        </div>
                        <div class="box-content size-40% border-4 p-4 m-4 rounded-2xl" >
                            <ArticuloPrecio articulo={articulo}></ArticuloPrecio>
                        </div>
                    </div>
                    <div class="box-border size-39% border-4 p-4 rounded-2xl m-4">
                    <TarjetaInfo articulo={articulo}></TarjetaInfo>
                    </div>
                </div>


            </div>
        
    );

};

export default Info;