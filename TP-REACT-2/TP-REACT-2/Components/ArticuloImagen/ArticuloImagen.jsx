import React from "react";
import style from './ArticuloImagen.module.css';

const ArticuloImagen = ({articulo}) => {

    return (
        <div className={style.artImagenDiv}>
            <img src={articulo.imagen} alt="Producto" className={style.artImagen} />
        </div>
    );

};

export default ArticuloImagen;