import React from "react";
//import style from './Info.module.css';
import Titulo from '../../Components/Titulo/Titulo';
import ArticuloImagen from "../../Components/ArticuloImagen/ArticuloImagen";
import ArticuloPrecio from "../../Components/ArticuloPrecio/ArticuloPrecio";

const Info = ({articulo}) => {

    return (
        
            <div class="block items-center bg-amber-400 ">
                    <Titulo texto={articulo.nombre}></Titulo>
                <div class="grid grid-cols-2">
                    <ArticuloImagen articulo={articulo}></ArticuloImagen>
                    <ArticuloPrecio articulo={articulo}></ArticuloPrecio>

                </div>

            </div>
        
    );

};

export default Info;