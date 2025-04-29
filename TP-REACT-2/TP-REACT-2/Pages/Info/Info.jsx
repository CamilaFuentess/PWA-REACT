import React from "react";
import style from './Info.module.css';
import Titulo from '../../Components/Titulo/Titulo';
import ArticuloImagen from "../../Components/ArticuloImagen/ArticuloImagen";
import ArticuloPrecio from "../../Components/ArticuloPrecio/ArticuloPrecio";

const Info = ({articulo}) => {

    return (
        
            <div className={style.info}>
                <Titulo texto={articulo.nombre}></Titulo>
                <ArticuloImagen articulo={articulo}></ArticuloImagen>
                <ArticuloPrecio articulo={articulo}></ArticuloPrecio>

            </div>
        
    );

};

export default Info;