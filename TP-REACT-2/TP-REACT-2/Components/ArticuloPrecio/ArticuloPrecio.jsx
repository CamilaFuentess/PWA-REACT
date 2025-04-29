import React from "react";
import style from './ArticuloPrecio.module.css';


const ArticuloPrecio = ({articulo}) => {

    return (
        <div className={style.artPrecioDiv}>
            <h1 className={style.artPrecioH1}>${articulo.precio}</h1>
        </div>
        
    );

};

export default ArticuloPrecio;